import express from 'express';
import User from './../models/user';
import {imageController} from './../Controllers/image.controller';
const router = express.Router();

router.post('/', (req,res,next) => {
    next();
}, async (req,res) => {
    const user = await User.findOne({username:req.body.user});

    if(user === null){
        res.status(404).send({error:'User not found'});
    }else{
        const bannerImage = imageController(user.bannerImagePath);
        const profileImage = imageController(user.profileImagePath);
        res.send(
            {
                username:user.username,
                firstname:user.firstname,
                lastname:user.lastname,
                description:user.description,
                followers:user.followers.length,
                followed:user.followed.length,
                verified:user.verified,
                date:user.date,
                location:user.location,
                website:user.website,
                bannerImage:bannerImage,
                profileImage:profileImage
            }
        );
    }
    
    
});

module.exports = router;