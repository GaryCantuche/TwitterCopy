import cors from 'cors';
import bodyParser from 'body-parser';
import passport from 'passport'
import session from 'express-session';

export default (app) => {
    
    const corsOptions = {
        origin: 'http://192.168.1.101:3000',
        credentials: true
    };
    app.use(cors(corsOptions));
    app.use(bodyParser());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(session(
        { 
            key:'user_sid',
            secret: "garycantuche",
            resave: false,
            saveUninitialized: false,
            cookie:{
                expires:60000,
                sameSite:false,
                httpOnly:false
            }
        })
    );
    app.use(passport.initialize());
    app.use(passport.session());
    
    
}

