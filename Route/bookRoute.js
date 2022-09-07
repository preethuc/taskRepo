const express = require('express');
const router = express.Router();
const bookController = require('../Controller/bookController')

router
  .route('/')
  .get(bookController.getAllBooks)
  .post(bookController.createBook)
  .delete(bookController.removeBook);
router
  .route('/:id')
  .get(bookController.getBookById)
  .patch(bookController.updateBook)
  

module.exports = router