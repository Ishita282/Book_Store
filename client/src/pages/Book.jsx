import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Book = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:3000/books");
        setBooks(response.data);
        setLoading(false);
        if (response.data.length === 0) {
          navigate("/create-book");
        }
      } catch (error) {
        setError("Error fetching books.");
        setLoading(false);
      }
    };
    fetchBooks();
  }, [navigate]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Books</h1>
      {books.length === 0 ? (
        <div>No books available. Redirecting to create a book...</div>
      ) : (
        <ul className="space-y-4">
          {books.map((book) => {
            <li key={book._id} className="border p-4 rounded shadow-md">
              <h2 className="text-xl font-semibold">{book.title}</h2>
              <p>Author: {book.author}</p>
              <Link to={`/books/${book._id}`} className="text-blue-500">
                View Details
              </Link>
            </li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Book;
