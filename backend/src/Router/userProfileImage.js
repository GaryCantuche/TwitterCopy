import express from 'express';
import User from './../models/user';
import fs from 'fs';

const router = express.Router();

router.get('/', (req,res,next) => {
    next();
}, async (req,res) => {
    const user = await User.findOne({username:req.query.username});
    console.log(user);
    if(user === null){
        res.status(404).send({error:'User not found'});
    }else{
        await fs.readFile(`${__dirname}/../../${user.profileImagePath}`,(err,content) => {
            if(content !== undefined){
                res.send(content.toString('base64'));
            }else{
                res.status(404).send(
                    {
                        error:'Profile image not found or not exists'
                    }
                );
            }
        });
    }
});

module.exports = router;