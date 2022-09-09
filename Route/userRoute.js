const express = require('express');
const router = express.Router();
const userController = require('../Controller/userController')

router
  .route('/')
  .get(userController.getAllUser)
  .post(userController.createUser)
  
router
  .route('/:id')
  .get(userController.getUserById)
  .patch(userController.updateUser)
  .delete(userController.removeUser);

 

module.exports = router
