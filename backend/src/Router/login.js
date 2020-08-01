import express from 'express';
import passport from 'passport';

const router = express.Router();

router.post('/',(req,res) =>{
    passport.authenticate('local', function(err, user, info) {
        if (err) { return next(err); }
        if (!user) { 
            return res.send(
                {
                    islogged:false
                }
            ); 
        }

        req.logIn(user, (err) => {
            if (err) { 
              return next(err); 
            }
            return res.send(user);
        });
      })(req, res, next);
});