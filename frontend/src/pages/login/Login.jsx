import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const {loading, login} = useLogin();

  const handleSubmit = async (e) =>{
    e.preventDefault();
    await login(userName, password)
  }
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter bg-opacity-0 backdrop-blur-lg rounded-xl [box-shadow:0_0_0.2rem_0rem_black]">
        <h1 className="text-3xl font-semibold text-center [text-shadow:_0_0.2rem_0_rgb(0_0_0_/_40%)]">
          Login{" "}
          <span className="text-[aqua] [text-shadow:_0_0.2rem_0_rgb(0_0_0_/_40%)]">
            ChatterSparkle
          </span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text font-bold">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10 bg-gray-600 text-white"
              value={userName}
              onChange={(e)=> setUserName(e.target.value)}
            />
            <label className="label p-2">
              <span className="text-base label-text font-bold">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10 bg-gray-600 text-white"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
            />
            <Link
              to="/signup"
              className="text-sm hover:underline hover:text-gray-600 mt-2 inline-block font-bold ml-1"
            >
              {"Don't"} have an account?
            </Link>
            <div>
              <button className="btn btn-block btn-sm mt-2 bg-slate-800 text-white hover:text-white font-bold hover:bg-gray-600" disabled={loading}>
                {loading ? <span className="loading loading-spinner"></span> : "Login"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
