const Book = require("../Model/bookModel");
const User = require("../Model/userModel");

//GET ALL DATA
exports.getAllBooks = async (req, res, next) => {
  //EXECUTE THE QUERY
  try {
    const books = await Book.find();

    //SEND RESPONSE
    res.status(200).json({
      status: "success",
      results: books.length,
      data: {
        books,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: false,
      message: "unable to fetch all the data from book",
    });
  }
};
//GET ALL DATA
exports.getAllBooks = async (req, res, next) => {
  //EXECUTE THE QUERY
  try {
    // const books = await Book.find().populate('user_id', 'name')
    const books = await Book.find();

    //SEND RESPONSE
    res.status(200).json({
      status: "success",
      results: books.length,
      data: {
        books,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: false,
      message: "unable to fetch all the data from book",
    });
  }
};

//GET Book by Id
exports.getBookById = async (req, res, next) => {
  try {
    const books = await Book.findById(req.params.id);
    console.log(books);
    res.status(200).json({
      status: "success",
      data: {
        books,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: false,
      message: "unable to fetch the data from bookId",
    });
  }
};

//GET Books by UserId
exports.getBookByUserId = async (req, res, next) => {
  try {
    const books = await Book.find({
      user_id: req.params.book_id,
    }).exec();
    console.log(books);
    res.status(200).json({
      status: "success",
      data: {
        books,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: false,
      message: "unable to fetch the data from bookId",
    });
  }
};
//POST BOOK
exports.createBook = async (req, res, next) => {
  try {
    const books = await Book.create({
      bookName: req.body.bookName,
      genere: req.body.genere,
      authorName: req.body.authorName,
      userId: req.body.userId,
    });

    await user(User, req.body.userId, books._id, res);
    books.save();

    res.status(201).json({
      status: "success",
      data: {
        book: books,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: false,
      message: err.message,
    });
  }
};
const user = (User, userId, _id, res) => {
  return new Promise((resolve, reject) => {
    User.findById(userId, (err, data) => {
      if (err) return res.send(err);
      console.log(data);
      data.bookId.push(_id);
      data.save(resolve(data));
    });
  });
};
// PATCH BOOK
exports.updateBook = async (req, res, next) => {
  try {
    const books = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      book: "<Updated books here....!>",
      data: {
        books,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: false,
      message: "unable to update the data from book",
    });
  }
};
//DELETE BOOK
exports.removeBook = async (req, res, next) => {
  try {
    const Books = await Book.findByIdAndDelete();

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: fail,
      message: "unable to remove the data from book",
    });
  }
};
