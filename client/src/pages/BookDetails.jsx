import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BookDetails = () => {
  const { title } = useParams();
  const [book, setBook] = useState(null);
  const [error, setError] = useState(" ");

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`/books${title}`);
        setBook(response.data);
      } catch (error) {
        setError("Error fetching book details");
      }
    };
    fetchBook();
  }, [title]);

  if (error) return <p className="text-red-500">{error}</p>;
  if (!book) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{book.title}</h1>
      <p>
        <strong>Author:</strong>
        {book.author}
      </p>
      <p>
        <strong>Genre:</strong>
        {book.genre}
      </p>
      <p>
        <strong>Price:</strong>
        {book.price}
      </p>
      <p>
        <strong>Published Date:</strong>
        {new Date(book.publishedDate).toDateString()}
      </p>
    </div>
  );
};

export default BookDetails;
