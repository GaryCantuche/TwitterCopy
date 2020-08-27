import express from 'express';
import Tweet from '../models/fleet';

const router = express.Router();

router.post('/', (req,res,next) => {
    if(req.isAuthenticated()){
        next();
    }else{
        return res.send({
            isLogged:false
        }); 
    }
}, async (req,res) => {
    if(req.user){
        const saveTweet = new Tweet();
        saveTweet.fleet = req.body.message;
        saveTweet.userID = req.user.id;
        saveTweet.username = req.user.username;
        saveTweet.date = new Date();
        await saveTweet.save();
        return res.send({isSaved:true});
    }  
});

module.exports = router;