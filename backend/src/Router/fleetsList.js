import express from 'express';
import {isAuthenticated} from '../middlewares/authMiddlewares';
import Fleet from '../models/fleet';
import { addUserPropertiesToFleet } from '../Controllers/fleetImage.controller';

const router = express.Router();

router.get('/',(req,res,next) => {
    isAuthenticated(req,res,next);
}, async (req,res) => {
    const fleets = await Fleet.find();

    let data = await addUserPropertiesToFleet(fleets);

    data = data.filter((item) => {
        return item !== undefined;
    });
    

    data.sort((a,b) => {
       return new Date(b.date) - new Date(a.date);
    });

    return res.send(data);
}); 

module.exports =  router;
