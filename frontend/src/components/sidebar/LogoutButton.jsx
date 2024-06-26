import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout.js";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext.jsx";

const LogoutButton = () => {
  const { loading, logout } = useLogout();
  const {authUser} = useAuthContext();
  console.log(authUser)
  return (
    <div className="mt-auto flex space-x-3 items-center pt-3">
      {!loading ? (
        <BiLogOut
          className="hover:text-black transition-[1s] text-white cursor-pointer text-[4rem]"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
      <h1 className="text-gray-100 hover:text-gray-400 font-bold text-[2.5rem] [text-shadow:0_0_0.1rem_black] border-black border-b transition-[2s] hover:rounded-full p-2">
        <Link to={"/profile"} className="flex items-center justify-center gap-2"><div className="p-[0.3rem] bg-[gray] rounded-full"><img src={authUser.profilePic} className="w-[4rem]"/></div> Profile</Link>
      </h1>
    </div>
  );
};

export default LogoutButton;
