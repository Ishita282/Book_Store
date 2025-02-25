import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-black-600 mb-8">
        Welcome to the Book Store
      </h1>
      <Link to="/login">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
          Login
        </button>
      </Link>
      <Link to="/Signup">
        <button className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-green-600 transition duration-300">
          Signup
        </button>
      </Link>
    </div>
  );
};

export default Home;
