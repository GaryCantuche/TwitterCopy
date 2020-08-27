import express from 'express';
import User from '../models/user';
import multer from './../libs/multer';
import { isAuthenticated } from '../middlewares/authMiddlewares';

const router = express.Router();

router.post('/',
    multer.fields(
        [
            { name:'profileImage', maxCount: 1 },
            { name:'bannerImage', maxCount: 1 }
        ]
    ),
    (req,res,next) => {
        isAuthenticated(req,res,next);
    },async (req,res) => {
        if(Object.keys(req.files).length !== 0){
            if(req.files.profileImage){
                const profileImagePath = req.files.profileImage[0].path;
                await User.updateOne({_id:req.user._id},
                    {
                        profileImagePath:profileImagePath,
                    }
                );
            }
            if(req.files.bannerImage){
                const bannerImagePath = req.files.bannerImage[0].path;
                await User.updateOne({_id:req.user._id},
                    {
                        bannerImagePath:bannerImagePath
                    }
                );
            }
            
            res.status(200).json({isSaved:true});
        }else{
            res.status(200).json({isSaved:false});
        }
});

module.exports = router;