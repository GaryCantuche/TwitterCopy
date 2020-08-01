import mongoose from 'mongoose';

const tweetSchema = mongoose.Schema({
    tweet:String
});

module.exports = mongoose.model('storeTweet',tweetSchema);