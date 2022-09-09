const express = require('express');
const router = express.Router();
const bookController = require('../Controller/bookController')

router
  .route('/')
  .get(bookController.getAllBooks)
  .post(bookController.createBook)
router
  .route('/:id')
  .get(bookController.getBookById)
  .patch(bookController.updateBook)
  .delete(bookController.removeBook);


router
  .route('/get-books-by-user/:book_id')
  .get(bookController.getBookByUserId)


module.exports = router