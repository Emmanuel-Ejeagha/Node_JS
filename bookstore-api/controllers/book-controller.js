const Book = require("../models/book");

const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find({});
    if (allBooks?.length > 0) {
      res.status(200).json({
        success: true,
        message: "List of books fetched succcessfully",
        data: allBooks,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No book found in database!",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
};
const getSingleBookById = async (req, res) => {
  try {
    const getCurrentBookID = req.params.id;
    const bookDetailsByID = await Book.findById(getCurrentBookID);

    if (!bookDetailsByID) {
      return res.status(404).json({
        success: false,
        message:
          "Book with the current ID is not found! Please try with another ID",
      });
    }
    res.status(200).json({
      success: true,
      data: bookDetailsByID,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
};
const addNewBook = async (req, res) => {
  try {
    const newBookFormData = req.body;
    const newlyCreatedBook = await Book.create(newBookFormData);
    if (newlyCreatedBook) {
      res.status(201).json({
        success: true,
        message: "Book added sucessfully",
        data: newlyCreatedBook,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
};
const updateBook = async (req, res) => {};
const deleteBook = async (req, res) => {};

module.exports = {
  getAllBooks,
  getSingleBookById,
  addNewBook,
  updateBook,
  deleteBook,
};
