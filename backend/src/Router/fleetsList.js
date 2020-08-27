import express from 'express';
import {isAuthenticated} from '../middlewares/authMiddlewares';
import Fleet from '../models/fleet';
import User from '../models/user';

const router = express.Router();

router.get('/',(req,res,next) => {
    isAuthenticated(req,res,next);
}, async (req,res) => {
    const fleets = await Fleet.find();

    let data = await Promise.all(
        fleets.map(async (fleet) => {
            const user = await User.findOne({_id:fleet.userID});
            let data1 = JSON.parse(JSON.stringify(fleet));
            if(user){
                data1.verified = user.verified;
                return data1;
            }
    }));

    data = data.filter((item) => {
        if(item == undefined){
            return false;
        }else{
            return true
        }
    });
    

    data.sort((a,b) => {
       return new Date(b.date) - new Date(a.date);
    });

    return res.send(data);
}); 

module.exports =  router;
