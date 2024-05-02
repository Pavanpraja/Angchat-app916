import { useCallback, useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../../hooks/useSendMessage";
import EmojiPicker from "emoji-picker-react";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();
  const [openEmoji, setOpenEmoji] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };
  const handleEmoji = useCallback((e) => {
    console.log(e);
    setMessage((prev) => prev + e.emoji);
    setOpenEmoji(false);
  }, []);

  return (
    <>
      <div className="flex px-4 space-x-2 text-center w-full">
        <button onClick={() => setOpenEmoji((prev) => !prev)}>
          <img
            width={40}
            height={40}
            src="https://img.icons8.com/windows/32/crazy.png"
            alt="crazy"
          />
        </button>
        <form className="my-3" onSubmit={handleSubmit}>
          <div className="w-full relative flex space-x-2 items-center">
            <input
              type="text"
              className="border w-[42rem] text-sm rounded-lg block p-2.5 bg-gray-700 border-gray-600 text-white"
              placeholder="Send a message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="flex space-x-2">
              <button
                type="submit"
                className="inset-y-0 end-0 flex items-center pe-3"
              >
                {loading ? (
                  <div className="loading loading-spinner"></div>
                ) : (
                  <BsSend className="text-[1.5rem]" />
                )}
              </button>
              <div className="absolute right-0 bottom-12">
                <EmojiPicker
                  open={openEmoji}
                  onEmojiClick={handleEmoji}
                  theme="dark"
                  emojiStyle="apple"
                  defaultSkinTone="neutral"
                  autoFocusSearch={true}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default MessageInput;

//STARTER CODE SNIPPETS

// import {BsSend} from 'react-icons/bs'

// const MessageInput = () => {
//   return (
//     <div className="px-4 my-3">
//       <div className="w-full">
//         <input type="text" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white" placeholder="Send a message" />
//         <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
//             <BsSend />
//         </button>
//       </div>
//     </div>
//   )
// }

// export default MessageInput
