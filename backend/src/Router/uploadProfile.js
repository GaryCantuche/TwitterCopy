import express from 'express';
import User from '../models/user';
import multer from '../libs/multer';


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
    await User.updateOne(
        {
            _id:req.user._id
        },
        {
            description:req.body.profileValues.description,
            location:req.body.profileValues.location,
            website:req.body.profileValues.website,
            date:req.body.profileValues.date ? new Date(req.body.profileValues.date) : "",
        });
    res.status(200).json({isSaved:true});
});

module.exports = router;