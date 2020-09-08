import express from 'express';
import User from './../models/user';

const router = express.Router();

router.get('/',function(req,res,next){
    console.log(req.user);
    if(req.isAuthenticated()){
       next();
    }else{
        res.send({isAuthenticated:false});
    }
},async function(req, res) {
    if(req.query.user == req.user.username){
        res.send({
            isLogged:true
        });
    }else{
        const result = await User.findOne({username:req.query.user});
        console.log(result);

        const followed = result.followers.filter(item => {
            return item == req.user.username
        });

        console.log(followed);

        if(followed.length > 0){
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
