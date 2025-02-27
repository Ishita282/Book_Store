import React, { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search Term: ", searchTerm);
  };
  return (
    <div className="container mx-auto mt-6">
      <form
        onSubmit={handleSubmit}
        className="flex items-center border border-gray-300 rounded-full overflow-hidden shadow-sm"
      >
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className=" px-2  bg-blue-500  hover:bg-blue-300 rounded-full py-2 transition"
        >
          <div className="w-16 text-white  rounded-full flex justify-center items-center text-2xl font-bold">
            🔍
          </div>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
