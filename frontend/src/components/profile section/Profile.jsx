import { useEffect, useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import '../../App.css'

const Profile = () => {
  const [userData, setUserData] = useState([]);
  const {authUser} = useAuthContext();
  useEffect(()=>{
    setUserData(authUser);
  },[authUser])
  console.log(userData)
    
  return (
    <div className="p-[0.5rem] transp-appbac">
    <h1 className="font-bold text-[2rem] border-b border-b-gray-500 border-b-[0.2rem] [text-shadow:0_0_0.2rem_black] text-[aqua]">Hello! <span className="text-[red]">User</span></h1>
      <div className="text-gray-300 p-[5rem] space-y-1">
      <div className="bg-black rounded-full [box-shadow:0_0_1rem_0_black] [box-shadow:inset_0_0_1rem_0_aqua] p-[2rem]">
        <img src={userData.profilePic} alt="image" className="rounded-full w-[12rem] h-[12rem] multicolor" />
      </div>
        <h1 className="text-[1.7rem] text-gray-300 font-bold [text-shadow:0_0_0.1rem_black]">{userData.userName}</h1>
        <p className="text-[1.2rem] text-[#ffb4b4] font-bold [text-shadow:0_0_0.1rem_black]">Email</p>
        <p className="text-[1.2rem] font-bold [text-shadow:0_0_0.1rem_black]">{userData.email}</p>
        <p className="text-[1.2rem] text-[#9af3e3] font-bold [text-shadow:0_0_0.1rem_black]">Gender</p>
        <p className="text-[1.2rem] font-bold [text-shadow:0_0_0.1rem_black]">{userData.gender}</p>
      </div>
    </div>
  )
}

export default Profile
