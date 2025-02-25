import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import BookStore from "../assets/images/BookStore.jpg";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="relative bg-gray-100">
        <div className="relative h-[500px]">
          <img
            src={BookStore}
            alt="Store"
            className="w-full h-full object-cover"
          />
          <div className="absolute insert-0 bg-black  bg-opacity-50 flex justify-center items-center">
            <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
              Welcome to Book Store
            </h1>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          About Us
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
          This is the place everyone wants to stop because this is a magical
          place everyone is dreaming to surround with. Books and Books
          everywhere to be seen. Surrounding by the book is the dream of every
          human and if you are the one of them, then this is the right place you
          where you are.
        </p>
      </div>
      <div className="container mx-auto px-4 py-6">
        <SearchBar onSearch={(query) => console.log("Search: ", query)} />
      </div>
      <div className="container mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center">
          <div className="w-16 bg-blue-500 text-white rounded-full flex justify-center items-center text-2xl font-bold">
            🌟
          </div>
          <h3 className="text-xl font-bold mt-4">High-Quality Books</h3>
          <p className="text-gray-600 text-center">
            Only the best Sales, tending books just for you.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-green-500 text-white rounded-full flex justify-center items-center text-2xl font-bold">
            🚚
          </div>
          <h3 className="text-xl font-bold mt-4">Fast Delivery</h3>
          <p className="text-gray-600 text-center">
            Get your order delivered quickly and safely.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-yellow-500 text-white rounded-full flex justify-center items-center text-2xl font-bold">
            💰
          </div>
          <h3 className="text-xl font-bold mt-4">Great Prices</h3>
          <p className="text-gray-600 text-center">
            Enjoy amazing deals and competitive pricing.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
