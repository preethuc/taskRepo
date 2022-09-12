const express = require('express');
const router = express.Router();
const userController = require('../Controller/userController')
// router
// .route('/Users-buy-Books')
// .post(userController.userBuyDetails)
// .get(userController.getAlluserBuyDetails)

router
  .route('/')
  .get(userController.getAllUser)
  .post(userController.createUser)
  
router
  .route('/:id')
  .get(userController.getBookAndUser)
  .patch(userController.updateUser)
  // .delete(userController.removeUser);




module.exports = router
