import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    profileImagePath:String,
    bannerImagePath:String,
    email:String,
    password:String,
    username:String,
    firstname:String,
    lastname:String,
    verified:Boolean,
    description:String,
    followers:Number,
    followed:Number,
    location:String,
    website:String,
    date:Date,
});

module.exports = mongoose.model('users',userSchema);