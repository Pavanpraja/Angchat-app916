import { useState } from 'react';
import { toast } from 'react-hot-toast';
import useConversation from '../zustand/useConversation';
import { useSocketContext } from '../context/SocketContext';

const useDeleteMessage = () => {
    const [isDeleting, setIsDeleting] = useState(false);
    const { messages, setMessages } = useConversation();
    const { socket } = useSocketContext();

    const deleteMessage = async (messageId) => {
        if (!messageId) return false;
        
        setIsDeleting(true);
        try {
            const res = await fetch(`/api/messages/${messageId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Failed to delete message');
            }

            // Update local state
            setMessages(messages.filter((message) => message._id !== messageId));

            toast.success('Message deleted');
            return data;

        } catch (error) {
            toast.error(error.message);
            console.error('Error deleting message:', error);
        } finally {
            setIsDeleting(false);
        }
    };

    // Listen for message deletions from other users
    useState(() => {
        if (!socket) return;

        socket.on("messageDeleted", (deletedMessageId) => {
            setMessages((prevMessages) => 
                prevMessages.filter((message) => message._id !== deletedMessageId)
            );
        });

        return () => {
            socket.off("messageDeleted");
        };
    }, [socket, setMessages]);

    return { deleteMessage, isDeleting };
};

export default useDeleteMessage;