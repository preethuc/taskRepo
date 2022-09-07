const Book = require('../Model/bookModel');

//GET ALL DATA
exports.getAllBooks = async (req, res,next) => {
    //EXECUTE THE QUERY
   try{ const books = await Book.find().populate('user_id','name')
    
    //SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: books.length,
      data: {
        books
      },
    });
  } catch(err){
    res.status(400).json({ 
      status: false, 
      message: "unable to fetch all the data from book" 
    });
   }
};
//GET Book by Id
exports.getBookById = async (req, res,next) => {
try{ const books = await Book.findById(req.params.id);
  console.log(books)
    res.status(200).json({
      status: 'success',
      data: {
        books
      },
    });
  } catch(err){
    res.status(400).json({ 
      status: false, 
      message: "unable to fetch the data from bookId" 
    });
   }
};
//POST BOOK
exports.createBook = (async (req, res, next) => {
  
  //const newTour = new Tour({})
  // newTour.save()
  try
  {
  const newBook = await Book.create(req.body)
  //   bookName: req.body.bookName,
  //   genere: req.body.genere,
  //   authorName: req.body.authorName,
  //   user_id: req.body.user_id
  // });
  res.status(201).json({
    status: 'success',
    data: {
      book: newBook,
    },
  });
} catch(err){
  res.status(400).json({ 
    status: false, 
    message: "unable to create the data from book" 
  });
 }
})

// PATCH / PUT TOUR
exports.updateBook = (async (req, res, next) => {
   try{ const books = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    
    res.status(200).json({
      status: 'success',
      book: '<Updated books here....!>',
      data: {
        books,
      },
    })
  } catch(err){
    res.status(400).json({ 
      status: false, 
      message: "unable to update the data from book" 
    });
   }
});
//DELETE USER
exports.removeBook = (async (req, res, next) => {
try{
   const Books = await Book.deleteMany();

    res.status(204).json({
      status: 'success',
      data: null,
    }); 
  } catch(err){
    res.status(400).json({ 
      status: false, 
      message: "unable to remove the data from book" 
    });
   }
});