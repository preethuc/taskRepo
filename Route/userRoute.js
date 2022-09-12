const express = require('express');
const router = express.Router();
const userController = require('../Controller/userController')

router
  .route('/')
  .get(userController.getAllUser)
  .post(userController.createUser)
  
router
  .route('/:id')
  .get(userController.getBookAndUser)
  .patch(userController.updateUser)
  .delete(userController.removeUser);

 router
 .route('/Users-buy-Books')
 .post(userController.userBuyDetails)

module.exports = router
