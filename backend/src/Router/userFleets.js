import express from 'express';
import Fleets from './../models/fleet';
import User from './../models/user';
import {imageController} from './../Controllers/image.controller';
import { addUserPropertiesToUserFleet } from '../Controllers/fleetImage.controller';

const router = express.Router();

router.get('/', (req,res,next) => {
    next();
}, async (req,res) => {
    const fleets = await Fleets.find({username:req.query.username});
    const user = await User.findOne({username:req.query.username});
    const profileImagePath = imageController(user.profileImagePath);
    const userFleets = await addUserPropertiesToUserFleet(fleets,profileImagePath); 
    res.json(userFleets);
    
});

module.exports = router;