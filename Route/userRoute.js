const express = require('express');
const router = express.Router();
const userController = require('../Controller/userController')

router
  .route('/')
  .get(userController.getAllUser)
  .post(userController.createUser)
  .delete(userController.removeUser);
  // .post(userController.checkBody,tourController.createTour);--- checkbody is invalid by using mongoose
router
  .route('/:id')
  .get(userController.getUserById)
  .patch(userController.updateUser)
 

module.exports = router
