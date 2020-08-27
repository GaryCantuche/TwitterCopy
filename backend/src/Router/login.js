import express from 'express';
import passport from 'passport';

const router = express.Router();

router.post('/',function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {

        if (err) { 
            return next(err); 
        }

        if (!user) {
            return res.send(info); 
        }
        req.login(user, function(err) {
            if (err) { 
                return next(err); 
            }
            return res.send(
                {
                    sessionID:req.session.id,
                    userID:user.id,
                    firstname:user.firstname,
                    lastname:user.lastname,
                    username:user.username
                });
        });
    })(req, res, next)
}); 

module.exports =  router;
