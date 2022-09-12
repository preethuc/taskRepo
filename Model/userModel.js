const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name: {
      type:String,
      required: [true, 'User must have a name'],
      unique: [true, 'User name must be unique'],
      trim:true
    },
    age: {
        type: Number
    },
    email:{
        type:String,
        required: [true, 'User must have a emailId'],
        unique: [true, 'User mailId must be unique'],
        validate: [validator.isEmail, 'please provide a valid emailId']
    },
    gender: {
        type: String
    },
    
})

const User = mongoose.model('User',userSchema);

module.exports = User;