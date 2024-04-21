import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/sidebar/messages/MessageContainer";
import '../../App.css'

const Home = () => {
  return (
    <div className="p-[1rem] transp-appbac [box-shadow:0rem_0rem_1rem_0rem_gray] w-[60%] max-[600px]:w-[70vw] h-[95%]">
    <h1 className="mb-[0.2rem] font-bold text-[1.5rem] [text-shadow:0_0_0.2rem_black] text-white ml-6 border-b border-black flex space-x-2 items-center pb-[0.2rem]"><img src="/bacicon.png" alt="icon" width={40} /><p>ChatterSparkle</p></h1>
      <div className="flex rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 h-[50rem]">
        <Sidebar />
        <MessageContainer />
      </div>
    </div>
  );
};

export default Home;
