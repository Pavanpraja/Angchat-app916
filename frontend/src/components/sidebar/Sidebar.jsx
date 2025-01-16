import { useState } from "react"
import Conversations from "./Conversations"
import LogoutButton from "./LogoutButton"
import SearchInput from "./SearchInput"

const Sidebar = ({handleOpen}) => {
  const [visibleLeft, setVisibleLeft] = useState(false);
  
  const handleSidebarVisible = () =>{
    setVisibleLeft(prev=>!prev);
    handleOpen(visibleLeft);
  }
  
  return (
    <div className={`border-r border-slate-500 p-4 flex flex-col w-full ${visibleLeft ? 'hidden': ''}`}>
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations handleSidebarVisible={handleSidebarVisible}/>
      <LogoutButton />
    </div>
  )
}

export default Sidebar

// STARTER CODE TEMPLATE 

// import Conversations from "./Conversations"
// import LogoutButton from "./LogoutButton"
// import SearchInput from "./SearchInput"

// const Sidebar = () => {
//   return (
//     <div className="border-r border-slate-500 p-4 flex flex-col">
//       <SearchInput />
//       <div className="divider px-3"></div>
//       <Conversations />
//       <LogoutButton />
//     </div>
//   )
// }

// export default Sidebar

