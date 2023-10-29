import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) {
      return;
    }
    setQuery("");
    navigate(`/order/${query}`);
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="search #orderId"
        className="transition-w input w-[80%] bg-stone-100 duration-200 focus:w-full"
      />
    </form>
  );
}

export default SearchOrder;
