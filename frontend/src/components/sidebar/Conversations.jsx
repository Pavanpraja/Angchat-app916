import Conversation from "./Conversation";
import '../../App.css'

const Conversations = () => {
  return (
      <div className="py-2 flex flex-col overflow-auto scroll-smooth" id="journal-scroll">
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
      </div>
  );
};



export default Conversations;
