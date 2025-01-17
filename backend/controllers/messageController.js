import Conversation from "../models/conversationModel.js";
import Message from "../models/messageModel.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) =>{
    try {
        const {message} = req.body;
        const {id:receiverId} = req.params;
        const senderId = req.user._id
        
        let conversation = await Conversation.findOne({
            participants: {$all: [senderId, receiverId]},
        })
        // console.log("receiverId: ", senderId)
        
        if(!conversation){
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            })
        }
        // console.log("conversation: ", conversation)

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        })

        if(newMessage){
            conversation.messages.push(newMessage._id);
        } 

        await conversation.save();
        await newMessage.save();

        
        await Promise.all([conversation.save(), newMessage.save()]);
        
        //SOCKET IO FUNCTIONALITY WILL GO HERE
        const receiverSocketId = getReceiverSocketId(receiverId);
        // console.log("receiverSocketId: ", receiverSocketId)
        if(receiverSocketId) {
            //io.to(<socket_id>).emit() used to send events to specific client
            io.to(receiverSocketId).emit("newMessage", newMessage)
        }

        res.status(201).json(newMessage);
    } catch (error) {
        console.log("Error in sendMessage controller: ", error.message)
        res.status(500).json({error: 'Internal server error'})
    }
}

export const getMessages = async (req, res) =>{
    try {
        const {id:userToChatId} = req.params;
        const senderId =  req.user._id;
        const conversation = await Conversation.findOne({
            participants: {$all: [senderId, userToChatId]},
        }).populate("messages");

        if(!conversation) return res.status(200).json([]);
        
        const messages = conversation.messages;

        res.status(200).json(messages)
    } catch (error) {
        console.log("Error in getMessages controller: ", error.message)
        res.status(500).json({error: 'Internal server error'})
    }
}

// Delete chat message endpoint
export const deleteMessages = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedMessage = await Message.findByIdAndDelete(id);
      if (!deletedMessage) {
        return res.status(404).json({ message: 'Message not found' });
      }
      return res.status(200).json({ message: 'Message deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

//   delete single message 

export const deleteMessage = async (req, res) => {
    try {
        const { id: messageId } = req.params;
        const userId = req.user._id;

        // Find the message and verify ownership
        const message = await Message.findById(messageId);
        if (!message) {
            return res.status(404).json({ error: 'Message not found' });
        }

        // Ensure the user is the sender of the message
        if (message.senderId.toString() !== userId.toString()) {
            return res.status(403).json({ error: 'Unauthorized to delete this message' });
        }

        // Find the conversation containing this message
        const conversation = await Conversation.findOne({
            messages: messageId
        });

        if (conversation) {
            // Remove the message ID from the conversation's messages array
            conversation.messages = conversation.messages.filter(
                (id) => id.toString() !== messageId.toString()
            );
            await conversation.save();
        }

        // Delete the message
        await Message.findByIdAndDelete(messageId);

        // Emit socket event to notify other user
        const receiverId = message.receiverId.toString();
        const receiverSocketId = getReceiverSocketId(receiverId);
        if (receiverSocketId) {
            io.to(receiverSocketId).emit("messageDeleted", messageId);
        }

        res.status(200).json({ message: 'Message deleted successfully' });
    } catch (error) {
        console.log("Error in deleteMessage controller: ", error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};