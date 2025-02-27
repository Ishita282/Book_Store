import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import SearchBar from "../components/SearchBar";

const Navbar = () => {
  return (
    <nav className="text-black py-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <img src={Logo} alt="Store" className="w-50 h-17 object-cover" />{" "}
        <div className="container mx-auto px-4 py-6">
          <SearchBar onSearch={(query) => console.log("Search: ", query)} />
        </div>
        <div>
          <Link to="/login">
            <button className=" text-black px-6 py-2 rounded-lg shadow-lg hover:bg-blue-300 transition duration-300 items-right">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className=" text-black px-6 py-2 rounded-lg shadow-lg hover:bg-blue-300 transition duration-300 items-right">
              Signup
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
