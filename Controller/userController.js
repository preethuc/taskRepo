const UsersBook = require('../Model/userAndBookModel');
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
      status: 'fail', 
      message: "unable to remove the data from user" 
    });
  }
});
//Get Book by User by id
exports.getBookAndUser = (async(req,res,next)=>{
  try{
    const usersBook = await UsersBook.find({
     book_id:req.params.id
    }).exec();

    res.status(200).json({
      status: 'success',
      data: {
        usersBook
      },
    })
  }catch(err){
    res.status(400).json({ 
      status: 'fail', 
      message: "unable to get the Book by user by id" 
    });
  }
}) 
//POST UserBuyBooks
exports.userBuyDetails = (async(req,res,next)=>{
 
  try{ 
    const newUser = await UsersBook.create(req.body);
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
})

//get all userBuy detail
exports.getAlluserBuyDetails = (async(req,res,next)=>{
 
  try{ 
    const usersBook = await UsersBook.find().populate('user_id','name')
    res.status(200).json({
      status: 'success',
      results: usersBook.length,
      data: {
        usersBook
      },
    });
  } catch(err){
    res.status(400).json({ 
      status: 'fail', 
      message: "unable to create the data in user" 
    });
  }
})