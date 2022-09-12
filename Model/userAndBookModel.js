const mongoose = require('mongoose');

const userGetBookSchema = new mongoose.Schema({
     user_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
     },
     book_id:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Book', 
        required: true 
     }
})

const UsersBook = mongoose.model('UsersBook',userGetBookSchema);

module.exports = UsersBook;