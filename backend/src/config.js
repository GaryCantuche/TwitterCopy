import cors from 'cors';
import bodyParser from 'body-parser';

export default (app) => {
    app.use(cors());
    app.use(bodyParser());  
    app.use(passport.initialize());
    app.use(passport.session());
}