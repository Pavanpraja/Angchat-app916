import GenderCheckbox from "./GenderCheckbox"

const Singup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
    <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter bg-opacity-0 backdrop-blur-lg rounded-xl [box-shadow:0_0_0.2rem_0rem_black]">
    <h1 className="text-3xl font-semibold text-center [text-shadow:_0_0.2rem_0_rgb(0_0_0_/_40%)]">Singup <span className="text-[aqua] [text-shadow:_0_0.2rem_0_rgb(0_0_0_/_40%)]">ChatterSparkle</span></h1>
    <form action="">
      <div>
        <label className="label p-2">
          <span className="text-base label-text font-bold">full Name</span>
        </label>
        <input type="text" placeholder="Enter full Name" className="w-full input input-bordered h-10 bg-gray-600 text-white" />
        <label className="label p-2">
          <span className="text-base label-text font-bold">Username</span>
        </label>
        <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10 bg-gray-600 text-white" />
        <label className="label p-2">
          <span className="text-base label-text font-bold">Password</span>
        </label>
        <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10 bg-gray-600 text-white" />
        <label className="label p-2">
          <span className="text-base label-text font-bold">Confirm Password</span>
        </label>
        <input type="password" placeholder="Confirm Password" className="w-full input input-bordered h-10 bg-gray-600 text-white" />

        {/* GENDER CHECKBOX GOES HERE */}
        <GenderCheckbox />

        <a href="#" className="text-sm hover:underline hover:text-gray-600 mt-2 inline-block font-bold ml-1">
          {"Already"} have an account?
        </a>

        <div><button className="btn btn-block btn-sm mt-2 bg-slate-800 text-white hover:text-white font-bold hover:bg-gray-600">Signup</button></div>
      </div>
    </form>
    </div>
  </div>
  )
}

export default Singup
