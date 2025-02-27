import React, { useState } from "react";
import axios from "axios";

const CreateBook = () => {
  const [formData, setFormData] = useState({
    title: " ",
    author: " ",
    genre: " ",
    price: " ",
  });
  const [message, setMessage] = useState();
  const [error, setError] = useState(" ");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefult();
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "https://localhost:3000/books",
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setMessage("Book created successfully!");
      setError(" ");

      const createBook = response.data.book;
      const books = JSON.parse(localStorage.getItem("books")) || [];
      localStorage.setItem("books", JSON.stringify([...books, createBook]));
      console.log("saved data", createBook);

      //clear the form
      setFormData({ title: "", author: "", genre: "", price: "" });
    } catch (error) {
      console.error(
        "Error creating book: ",
        error.response?.data || error.message
      );
      setMessage(" ");
      setError(error.response?.data?.message || "Error creating book");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Create Book</h1>
        {message && <p className="text-green-500 mb-4">{message}</p>}
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-medium mb-1"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleChange}
              className="block mb-2 p-2 border"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-medium mb-1"
            >
              Author
            </label>
            <input
              type="text"
              id="author"
              name="author"
              placeholder="Author"
              value={formData.author}
              onChange={handleChange}
              className="block mb-2 p-2 border"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-medium mb-1"
            >
              Genre
            </label>
            <input
              type="text"
              id="genre"
              name="genre"
              placeholder="Genre"
              value={formData.genre}
              onChange={handleChange}
              className="block mb-2 p-2 border"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-medium mb-1"
            >
              Price
            </label>
            <input
              type="text"
              id="price"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
              className="block mb-2 p-2 border"
              required
            />
          </div>

          <button type="submit" className="bg-blue-500 text-white px-4 py-2">
            Create Book
          </button>
        </form>
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        {message && (
          <p className="text-green-500 text-center mt-4">{message}</p>
        )}
      </div>
    </div>
  );
};

export default CreateBook;
