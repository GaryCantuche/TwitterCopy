import passport from 'passport';
import LocalStrategy from 'passport-local';
import User from './../models/';

const user = new User();

passport.serializeUser((user, done) => {
    done(null, user.id);
});
  
passport.deserializeUser(async (id, done) =>  {
    await User.findById(id,(err, user) => {
      done(err, user);
    });
});

passport.use('local-login',new LocalStrategy((email,password,done) => {
    user.findOne({email:email}, (err,user)=>{
        if (err) { 
            return done(err); 
        }
        if (!user) { 
            return done(null, false); 
        }
        if (!user.verifyPassword(password)) { 
            return done(null, false); 
        }
        
        return done(null, user);
    })
}));

