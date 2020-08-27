
import express from 'express';
const router = express.Router();

router.get('/', function(req, res){
    req.logout();
    res.send({isLogout:true});
  });

module.exports = router;