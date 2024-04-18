import { FaSearchengin } from "react-icons/fa";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full bg-slate-600 text-white"
      />
      <button type="submit" className="btn btn-circle bg-black text-white text-2xl"><FaSearchengin /></button>
    </form>
  );
};

export default SearchInput;
