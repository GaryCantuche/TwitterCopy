
import express from 'express';
import User from './../models/user';

const bcrypt = require('bcrypt');
const router = express.Router();

router.post('/', async (req,res) => {
    const ifUserExists = await User.findOne({email:req.body.userData.email});
    if(ifUserExists){
        res.send({message:'Sorry, but the user already exists.'});
    }else{
        const user = new User();
        user.firstname = req.body.userData.firstname
        user.lastname = req.body.userData.lastname
        user.email = req.body.userData.email
        user.username = req.body.userData.username
        user.description = ''
        user.followers = []
        user.followed = []
        user.verified = false
        user.date = ''
        user.location = ''
        user.website = ''
        await bcrypt.hash(req.body.userData.password,2,async (err,hash) => {
            user.password = hash;
            await user.save();
        });
        return res.send({isSaved:true}); 
    } 
});

module.exports = router;