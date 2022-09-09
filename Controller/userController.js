const User = require('../Model/userModel');

//GET ALL DATA
exports.getAllUser = async (req, res,next) => {
    //EXECUTE THE QUERY
   try{
    const users = await User.find()
    
    //SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: users.length,
      data: {
        users
      },
    });
   } catch(err){
    res.status(400).json({ 
      status: false, 
      message: "unable to fetch the data from user" 
    });
   }
};
//GET DATA by Id
exports.getUserById = async (req, res,next) => {
 try{ const users = await User.findById(req.params.id);
  
    res.status(200).json({
      status: 'success',
      results: users.length,
      data: {
        users
      },
    });
  } catch(err){
    res.status(400).json({ 
      status: false, 
      message: "unable to fetch the data by userId" 
    });
  }
};
//POST USER
exports.createUser = async (req, res, next) => {

  try{ const newUser = await User.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        user: newUser,
      },
    });
  } catch(err){
    res.status(400).json({ 
      status: false, 
      message: "unable to create the data in user" 
    });
  }
  }
// PATCH / PUT USER
exports.updateUser = (async (req, res, next) => {
  try{ 
    const users = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    
    res.status(200).json({
      status: 'success',
      user: '<Updated user here....!>',
      data: {
        users,
      },
    })
  } catch(err){
    res.status(400).json({ 
      status: false, 
      message: "unable to update the data from user" 
    });
  }
});
//DELETE USER
exports.removeUser = (async (req, res, next) => {

  try{ 
    const users = await User.findByIdAndDelete();

    res.status(204).json({
      status: 'success',
      // data: null,
      message: 'deleted'
    }); 
  } catch(err){
    res.status(404).json({ 
      status: false, 
      message: "unable to remove the data from user" 
    });
  }
});
