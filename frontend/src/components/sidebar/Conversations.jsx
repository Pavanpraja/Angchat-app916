// import Conversation from "./Conversation";
import "../../App.css";
import { useSocketContext } from "../../context/SocketContext";
import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";
import useConversation from "../../zustand/useConversation";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  const { selectedConversation, setSelectedConversation } = useConversation();
  return (
    <div
      className="py-2 flex flex-col overflow-auto scroll-smooth"
      id="journal-scroll"
    >
      {conversations.map((conversation, idx) => {
        const isSelected = selectedConversation?._id === conversation._id;
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const {onlineUsers} = useSocketContext();
        const isOnline = onlineUsers.includes(conversation._id)
        return (
          <>
            <div className={`flex gap-2 items-center hover:bg-black rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-black" : ""}`} onClick={()=>setSelectedConversation(conversation)}>
              <div className={`avatar ${isOnline ? "online" : ""}`}>
                <div className="w-12 rounded-full">
                  <img
                    src={conversation.profilePic}
                    alt="user avatar"
                    key={idx}
                  />
                </div>
              </div>
              <div className="flex flex-col flex-1">
                <div className="flex gap-3 justify-between">
                  <p className="font-bold text-gray-200" key={conversation._id}>
                    {conversation.fullName}
                  </p>
                  <span className="text-xl">{getRandomEmoji()}</span>
                </div>
              </div>
            </div>
          </>
        );
      })}

      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};
{
  /* key={conversation._id} conversation={conversation} emoji={getRandomEmoji()} lastIdx={idx === conversation.length - 1} */
}

export default Conversations;
