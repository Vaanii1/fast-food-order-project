import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  //to navigate
  const navigate = useNavigate();

  //when searching for the order
  function handleSubmit(e) {
    e.preventDefault();
    //if you didn't enter any order number
    if (!query) return;
    // navigate to the order
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order by no."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-28 rounded-full bg-stone-50 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-500 focus:ring focus:ring-blue-400 focus:outline-none sm:w-64 sm:focus:w-72"
      />
    </form>
  );
}

export default SearchOrder;
