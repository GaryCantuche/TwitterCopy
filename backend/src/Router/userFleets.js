import express from 'express';
import Fleets from './../models/fleet';

const router = express.Router();

router.get('/', (req,res,next) => {
    next();
}, async (req,res) => {
    const username = req.query.username;
    const userFleets = await Fleets.find({userID:username});
    res.json(userFleets);
    
});

module.exports = router;