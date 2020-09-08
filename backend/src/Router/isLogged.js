import express from 'express';
import { isFollowed } from '../Controllers/followButton.controller';

const router = express.Router();

router.get('/',function(req,res,next){
    console.log(req.user);
    if(req.isAuthenticated()){
       next();
    }else{
        res.send({isAuthenticated:false});
    }
},async function(req, res) {
    //Verifying if user thats already logged is the same that's the user it's in the profile.
    if(req.query.user == req.user.username){
        res.send({
            isLogged:true
        });
    }else{
        
        const followed = await isFollowed(req.query.user,req.user.username);

        if(followed){
            res.send({
                isLogged:false,
                followed:true
            });
        }else{
            res.send({
                isLogged:false,
                followed:false
            });
        }
        
    }
}); 

module.exports =  router;
