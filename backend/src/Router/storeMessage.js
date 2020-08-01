import express from 'express';
import Tweet from './../models/storeTweet';
const router = express.Router();

router.post('/', async (req,res) => {
    const saveTweet = new Tweet();
    saveTweet.tweet = req.body.message;
    const result = await saveTweet.save();
    console.log(result);
    res.end();
});

module.exports = router;