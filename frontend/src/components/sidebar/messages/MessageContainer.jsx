import { useEffect } from "react"
import useConversation from "../../../zustand/useConversation"
import MessageInput from "./MessageInput"
import Messages from "./Messages"
import {TiMessages} from 'react-icons/ti'
import { useAuthContext } from "../../../context/AuthContext"
import '../../../App.css'
import { FaArrowLeft } from "react-icons/fa6";

const MessageContainer = ({visible, handleOpenProps}) => {

    const {selectedConversation, setSelectedConversation} = useConversation();

    useEffect(()=>{
      //signup function (unmounts)
      return () => setSelectedConversation(null)
    },[setSelectedConversation])

  return (
    <div className={`flex w-[100%] flex-col relative ${visible ? 'hidden' : ''}`}>
    {
        !selectedConversation ? (
            <NoChatSelected />
        ) :
      <>
        {/* <Header /> */}
        <div className={`chat-head px-4 py-2 mb-2 flex space-x-2 items-center text-[2rem]`}>
        <h1 onClick={()=>handleOpenProps(true)} className="text-[2rem] font-bold text-white"><FaArrowLeft /></h1>
            <span className="label-text font-bold [text-shadow:0_0_0.2rem_black] text-white text-[2rem]">To:</span>{" "}
            <span className="text-white font-bold [text-shadow:0_0_0.2rem_black]">{selectedConversation.fullName}</span>
        </div>

        <Messages />
        <MessageInput />
      </>
    }
    </div>
  )
}

export default MessageContainer

const NoChatSelected = () =>{
    const {authUser} = useAuthContext();
    return(
        <div className="flex items-center justify-center w-full h-full max-[430px]:w-[34rem]">
            <div className="px-4 text-center text-gray-200 font-semibold flex flex-col items-center gap-2 text-[2.5rem]">
                <p>Hello! 🖐 welcome {authUser.fullName}</p>
                <p>Select a chat to start messaging...</p>
                <TiMessages className="text-3xl md:text-6xl text-center" />
            </div>
        </div>
    )
}

//STARTER CODE SNIPPETS

// import MessageInput from "./MessageInput"
// import Messages from "./Messages"

// const MessageContainer = () => {
//   return (
//     <div className="md:min-w-[450px] flex flex-col">
//       <>
//         {/* <Header /> */}
//         <div className="bg-slate-500 px-4 py-2 mb-2">
//             <span className="label-text">To:</span>{" "}
//             <span className="text-gray-900 font-bold">Pavan Prajapati</span>
//         </div>

//         <Messages />
//         <MessageInput />
//       </>
//     </div>
//   )
// }

// export default MessageContainer

