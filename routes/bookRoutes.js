const express = require("express")
const router = express.Router()
const { getAllBooks, createBook, getBookById, updateBookById, deleteBookById } = require("../controllers/bookController")

// get all books

router.get("/", getAllBooks)

// get a specific book details based on its id 

router.get("/:id", getBookById)

// create a new book using the post request type

router.post("/", createBook)

// update a book details 

router.put("/:id", updateBookById)

// delete a book details 

router.delete("/:id", deleteBookById)


module.exports = router; 