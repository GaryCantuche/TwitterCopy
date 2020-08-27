import passport from 'passport';
const LocalStrategy = require('passport-local').Strategy;
const User = require('./../models/user');
const bcrypt = require('bcrypt');

/*PASSPORT*/
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
    function(email, password, done) {
        User.findOne({ email: email }, async function (err, user) {
            if (err) { return done(err); }
            if (!user) {
              return done(null, false, { message: 'Incorrect email.' });
            }
            if (!await validPassword(password,user.password)) {
              return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
          });
    }
));

async function validPassword(password,userPassword){
  const passwordMatch = await bcrypt.compare(password, userPassword);

  if(!passwordMatch){
    return false;
  }else{
    return true;
  }
}

passport.serializeUser(function(user, done) {
    done(null, user.id);
});
  
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(null, user);
    });
});