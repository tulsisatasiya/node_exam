const { bookService } = require("../services");

// add
const addBook = async (req, res) => {
  try {
    const body = req.body;
    const file = req.file;

    body.profile_pic = file.path;
    console.log(body);

    const bookExist = await bookService.getBookByTitle(body.Book_title);

    if (bookExist) {
      throw new Error("Book already exists");
    }

    const book = await bookService.addBook(body);

    if (!book) {
      throw new Error("Something went wrong");
    }

    res.status(201).json({
      message: "Book created successfully",
      data: book,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

//get
const getAllBooks = async (req, res) => {
  try {
    const books = await bookService.getAllBooks();

    res.status(200).json({
      success: true,
      message: "Successfully retrieved all books",
      data: {
        books,
      },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


// Update 
const updateBook = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    console.log(id, body);

    const bookExist = await bookService.getBookByTitle(body.Book_title);

    if (bookExist) {
      throw new Error("Book already exists");
    }

    const book = await bookService.updateBook(id, body);

    res.status(200).json({
      message: "Book updated successfully",
      data: book,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

//delete
const deleteBook = async (req, res) => {
  try {
    const id = req.params.id;

    const book = await bookService.deleteBook(id);

    if (!book) {
      throw new Error("Something went wrong");
    }

    res.status(200).json({
      message: "Book deleted successfully",
      data: book,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

module.exports = { addBook, getAllBooks, updateBook, deleteBook };
