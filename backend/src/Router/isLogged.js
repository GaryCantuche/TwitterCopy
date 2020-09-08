import express from 'express';

const router = express.Router();

router.get('/',function(req,res,next){
    console.log(req.user);
    if(req.isAuthenticated()){
       next();
    }else{
        res.send({isAuthenticated:false});
    }
},function(req, res) {
    if(req.query.user == req.user.username){
        res.send(true);
    }else{
        res.send(false);
    }
}); 

module.exports =  router;
