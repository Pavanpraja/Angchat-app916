import { useEffect, useRef } from "react";
import { useAuthContext } from "../../../context/AuthContext";
import useGetMessages from "../../../hooks/useGetMessages";
import { extractTime } from "../../../utils/extractTime";
import useConversation from "../../../zustand/useConversation";
import MessageSkeleton from "../../skeletons/MessageSkeleton";
import useListenMessages from "../../../hooks/useListenMessages";
// import Message from "./Message";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages();
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(()=>{
      lastMessageRef.current?.scrollIntoView({behavior: "smooth"});
    },100);
  }, [messages])

  return (
    <div className="px-4 overflow-auto h-[55rem]" id="chat-box">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => {
          const fromMe = message.senderId === authUser._id;
          const chatClassName = fromMe ? 'chat-end' : 'chat-start';
          const profilePic = fromMe ? authUser.profilePic : selectedConversation.profilePic;
          const bubbleBgColor = fromMe ? 'bg-slate-600' : "";
          const formattedTime = extractTime(message.createdAt);
          const shakeClass = message.shouldShake ? "shake" : ""

         
          return (
            <>
            <div key={message._id} ref={lastMessageRef}>
              <div className={`chat ${chatClassName} mb-[1rem]`}>
                <div className="chat-image avatar">
                  <div className="w-[4.5rem] rounded-full">
                    <img
                      alt="Tailwind CSS chat bubble component"
                      src={profilePic}
                      className="filter invert"
                    />
                  </div>
                </div>
                <div className={`chat-bubble text-white max-sm:w-[18rem] p-[1rem] w-[29rem] text-[1.7rem] font-bold ${bubbleBgColor} ${shakeClass}`}>
                  {message.message}
                </div>
                <div className="chat-footer text-white opacity-50 flex gap-1 items-center font-bold text-[1.4rem] mt-1">
                  <p>{formattedTime}</p>
                </div>
              </div>
            </div>
            </>
          );
        })}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {!loading && messages.length === 0 && (
        <p className="text-center text-[2rem]">
          🙄 Send a message to start the conversation
        </p>
      )}
    </div>
  );
};

export default Messages;

//STARTER CODE SNIPPETS

// import Message from "./Message"

// const Messages = () => {
//   return (
//     <div className="px-4 flex-1 overflow-auto" id="chat-box">
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//     </div>
//   )
// }

// export default Messages
