import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    email:String,
    password:String,
    firstname:String,
    lastname:String
});

module.exports = mongoose.model('users',userSchema);