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
    followers:Array,
    followed:Array,
    location:String,
    website:String,
    date:Date,
});

module.exports = mongoose.model('users',userSchema);