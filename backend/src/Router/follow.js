import express from 'express';
import User from '../models/user';
const router = express.Router();

router.post('/',function(req,res,next){
    if(req.isAuthenticated()){
       next();
    }else{
        res.status(403).send();
    }
},async function(req, res) {
    //User I want to follow
    const user = await User.findOne({
        username:req.body.username
    });

    //If I follow already
    const following  = user.followers.filter(item => {
        return item ===  req.user.username;
    });

    if(following.length === 0){
        //I followed a user
        await User.updateOne({
            username:req.user.username
        },{ $push:{   
                followed:req.body.username
            } 
        });

        //This user have one more follower
        await User.updateOne({
            username:req.body.username
        },{ $push:{   
                followers:req.user.username
            } 
        });
    }
}); 

module.exports =  router;
