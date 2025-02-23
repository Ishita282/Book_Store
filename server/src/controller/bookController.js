const Book = require("../models/book");

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    console.error("Error in getAllBooks: ", error);
    res.status(500).json({ message: "Error fetching books", error });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: "Error fetching book", error });
  }
};

exports.createBook = async (req, res) => {
  try {
    const { title, author, genre, price } = req.body;
    if (!title || !author || !genre || !price) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (typeof price !== "number" || price <= 0) {
      return res
        .status(400)
        .json({ message: "Price must be a positive number" });
    }

    const newBook = new Book.create({ title, author, genre, price });

    res.status(201).json({ message: "Book created success", book: newBook });
  } catch (error) {
    console.error("Error in createBook", error.message);
    res.status(500).json({ message: "Error creating book", error });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, genre, price } = req.body;
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { title, author, genre, price },
      { new: true }
    );
    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: "Error updating book", error });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: `Book with ID ${id} deleted` });
  } catch (error) {
    res.status(500).json({ message: "Error deleting books", error });
  }
};
