import { useState } from "react";
import { FaSearchengin } from "react-icons/fa";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const {setSelectedConversation} = useConversation();
  const {conversations} = useGetConversations();

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!search) return;
    if(search.length < 3){
      return toast.error('Search term must be at least 3 characters long');
    }

    const conversation = conversations.find((c)=> c.fullName.toLowerCase().includes(search.toLowerCase()));

    if(conversation){
      setSelectedConversation(conversation);
      setSearch('');
    } else toast.error("No such user found!")
  }
  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full bg-slate-700 [box-shadow:inset_0_0_0.2rem_0_white] text-white text-[2rem] p-[2rem]" 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="btn btn-circle border-0 flex text-center w-[4.5rem] h-[4.5rem] hover:bg-gray-400 hover:text-black bg-slate-700 [box-shadow:inset_0_0_0.2rem_0_white] text-white p-[0.5rem]"><FaSearchengin className="text-[2rem]"/></button>
    </form>
  );
};

export default SearchInput;
