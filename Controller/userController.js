
const User = require('../Model/userModel');

//GET ALL DATA
exports.getAllUser = async (req, res,next) => {
    //EXECUTE THE QUERY
   try{
    const users = await User.find().populate('books')
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
      status: 'fail', 
      message: "unable to fetch the data from user" 
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
      status: 'fail', 
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
      status: 'fail', 
      message: "unable to update the data from user" 
    });
  }
});
