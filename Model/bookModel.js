const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true,
        unique: [true, 'must have a unique book name '],
    },
    genere: {
        type:  String
    },
    authorName: {
        type: String,
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
     }
    
})

const Book = mongoose.model('Book',bookSchema);

module.exports = Book;