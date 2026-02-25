const Book = require("../schemas/book");

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.send(books);
  } catch (error) {
    res.status(500).send("Failed to fetch todos.");
  }
};

exports.getBookById = async (req, res) => {
  const id = req.params.id;

  if (!id) {
    res.send("Please provide an ID.");
  }

  try {
    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).send({ error: "book not found." });
    }

    res.send(book);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch book details." });
  }
};

exports.createBook = async (req, res) => {
  const book = req.body;

  if (!book.title) {
    res.send("Please add a title.");
  }

  const title = book.title;
  const author = book.author;

  try {
    const newBook = new Book({ title , author });
    await newBook.save();
    res.send(newBook);
  } catch (error) {
    res.status(500).send({ error: "Failed to add book details." });
  }
};

exports.updateBookById = async (req, res) => {
  const id = req.params.id;

  if (!id) {
    res.send("Please provide an ID.");
  }

  try {
    const book = await Book.findByIdAndUpdate(id, req.body, {
      returnDocument: "after",
    });

    res.send(book);
  } catch (error) {
    res.status(500).send({ error: "Failed to update book." });
  }
};

exports.deleteBookById = async (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).send({ error: "Please provide an ID." });
  }

  try {
    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).send({ error: "book not found." });
    }

    res.send({ message: "Book deleted successfully.", book: deletedBook });
  } catch (error) {
    res.status(500).send({ error: "Failed to delete book." });
  }
};