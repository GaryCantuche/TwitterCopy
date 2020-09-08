import express from 'express';
import User from '../models/user';

const router = express.Router();

router.post('/', (req,res,next) => {
    console.log(req.user)
    if(req.isAuthenticated()){
        next();
    }else{
        return res.send({
            isLogged:false
        }); 
    }
}, async (req,res) => {
    await User.updateOne(
        {
            _id:req.user._id
        },
        req.body.profileValues
    );
    
    res.status(200).json({isSaved:true});
});

module.exports = router;