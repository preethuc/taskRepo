
// // //Get Book by User by id
// exports.getBookAndUser = (async(req,res,next)=>{
//     try{
//       const usersBook = await UsersBook.find().exec();
  
//       res.status(200).json({
//         status: 'success',
//         data: {
//           usersBook
//         },
//       })
//     }catch(err){
//       res.status(400).json({ 
//         status: 'fail', 
//         message: "unable to get the Book by user by id" 
//       });
//     }
//   }) 
//   // //POST UserBuyBooks
//   exports.userBuyDetails = (async(req,res,next)=>{
   
//     try{ 
//       const newUser = await UsersBook.create(req.body);
//       res.status(201).json({
//         status: 'success',
//         data: {
//           user: newUser,
//         },
//       });
//     } catch(err){
//       res.status(400).json({ 
//         status: 'fail', 
//         message: "unable to create the data in user" 
//       });
//     }
//   })
  
//   // //get all userBuy detail
//   exports.getAlluserBuyDetails = (async(req,res,next)=>{
   
//     try{ 
//       const usersBook = await UsersBook.find()
//       res.status(200).json({
//         status: 'success',
//         results: usersBook.length,
//         data: {
//           usersBook
//         },
//       });
//     } catch(err){
//       res.status(400).json({ 
//         status: 'fail', 
//         message: "unable to create the data in user" 
//       });
//     }
//   })
//DELETE USER
// exports.removeUser = (async (req, res, next) => {

//     try{ 
//       const users = await User.findByIdAndDelete();
  
//       res.status(204).json({
//         status: 'success',
//         // data: null,
//         message: 'deleted'
//       }); 
//     } catch(err){
//       res.status(404).json({ 
//         status: 'fail', 
//         message: "unable to remove the data from user" 
//       });
//     }
//   });