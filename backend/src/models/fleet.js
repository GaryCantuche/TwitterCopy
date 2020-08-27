import mongoose from 'mongoose';

const fleet = mongoose.Schema({
    fleet:String,
    userID:String,
    username:String,
    date:Date
});

module.exports = mongoose.model('fleet',fleet);