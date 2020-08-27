import express from 'express';
import User from './../models/user';

const router = express.Router();

router.post('/', (req,res,next) => {
    next();
}, async (req,res) => {
    const user = await User.findOne({username:req.body.user});

    if(user === null){
        res.status(404).send({error:'User not found'});
    }else{
        res.send(user);
    }
    
    
});

module.exports = router;