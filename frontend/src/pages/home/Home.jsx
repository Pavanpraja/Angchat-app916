import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/sidebar/messages/MessageContainer";
import '../../App.css'
import { useState } from "react";

const Home = () => {
  const [visible, setVisible] = useState(true);
  
  const handleOpen = (condition) =>{
    setVisible(condition)
  }

  const handleOpenProps = (condition) =>{
    setVisible(condition)
  }

  return (
    <div className="p-[1rem] transp-appbac [box-shadow:0rem_0rem_1rem_0rem_gray] w-[60%] max-[1300px]:w-[77%] max-[1000px]:w-[90%] max-[793px]:w-[100%]">
    <h1 className="mb-[0.2rem] font-bold text-[3rem] [text-shadow:0_0_0.2rem_black] text-white ml-6 border-b border-black flex space-x-2 items-center pb-[0.2rem]"><img src="/bacicon.png" alt="icon" className="w-[4rem]" /><p>ChatterSparkle</p></h1>
      <div className="flex rounded-lg overflow-auto bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0" id="journal-scrollj">
        {visible && <Sidebar handleOpen={handleOpen}/> }
        <MessageContainer visible={visible} handleOpenProps={handleOpenProps}/>
      </div>
    </div>
  );
};

export default Home;
