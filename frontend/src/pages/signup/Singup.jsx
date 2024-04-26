import { Link } from "react-router-dom"
import GenderCheckbox from "./GenderCheckbox"
import { useState } from "react"
import useSignup from "../../hooks/useSignup.js";

const Singup = () => {

  const [inputs, setInputs] = useState({
    fullName: '',
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: ''
  });

  const {loading, signup} = useSignup()

  const handleCheckBoxChange = (gender) =>{
    setInputs({...inputs, gender})
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    await signup(inputs)
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
    <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter bg-opacity-0 backdrop-blur-lg rounded-xl [box-shadow:0_0_0.2rem_0rem_black]">
    <h1 className="text-3xl font-semibold text-center [text-shadow:_0_0.2rem_0_rgb(0_0_0_/_40%)]">Singup <span className="text-[aqua] [text-shadow:_0_0.2rem_0_rgb(0_0_0_/_40%)]">ChatterSparkle</span></h1>
    <form action="" onSubmit={handleSubmit}>
      <div>
        <label className="label p-2">
          <span className="text-base label-text font-bold">full Name</span>
        </label>
        <input type="text" placeholder="Enter full Name" className="w-full input input-bordered h-10 bg-gray-600 text-white" value={inputs.fullName} onChange={(e)=> setInputs({...inputs, fullName: e.target.value})} />
        <label className="label p-2">
          <span className="text-base label-text font-bold">Username</span>
        </label>
        <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10 bg-gray-600 text-white" value={inputs.userName} onChange={(e)=> setInputs({...inputs, userName: e.target.value})}/>

        <label className="label p-2">
          <span className="text-base label-text font-bold">Email</span>
        </label>
        <input type="email" placeholder="Enter Email" className="w-full input input-bordered h-10 bg-gray-600 text-white" value={inputs.email} onChange={(e)=> setInputs({...inputs, email: e.target.value})}/>

        <label className="label p-2">
          <span className="text-base label-text font-bold">Password</span>
        </label>
        <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10 bg-gray-600 text-white" value={inputs.password} onChange={(e)=> setInputs({...inputs, password: e.target.value})} />
        <label className="label p-2">
          <span className="text-base label-text font-bold">Confirm Password</span>
        </label>
        <input type="password" placeholder="Confirm Password" className="w-full input input-bordered h-10 bg-gray-600 text-white" value={inputs.confirmPassword} onChange={(e)=> setInputs({...inputs, confirmPassword: e.target.value})} />

        {/* GENDER CHECKBOX GOES HERE */}
        <GenderCheckbox onCheckBoxChange={handleCheckBoxChange} selectedGender={inputs.gender}/>

        <Link to={"/login"} className="text-sm hover:underline hover:text-gray-600 mt-2 inline-block font-bold ml-1">
          {"Already"} have an account?
        </Link>

        <div><button className="btn btn-block btn-sm mt-2 bg-slate-800 text-white hover:text-white font-bold hover:bg-gray-600" disabled={loading}>{loading ? <span className="loading loading-spinner"></span> : "Sign Up"}</button></div>
      </div>
    </form>
    </div>
  </div>
  )
}

export default Singup
