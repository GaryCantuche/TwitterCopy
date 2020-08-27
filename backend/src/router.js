import storeMessage from './Router/storeFleet';
import login from './Router/login';
import fleetsList from './Router/fleetsList';
import signup from './Router/signup';
import logout from './Router/logout';
import userData from './Router/userData';
import userFleets  from './Router/userFleets';
import uploadUserProfile  from './Router/uploadProfile';
import uploadProfilePhoto  from './Router/uploadProfilePhoto';

export default (app) => {
    app.use('/storeMessage',storeMessage); 
    app.use('/login',login);   
    app.use('/signup',signup);
    app.use('/logout',logout);
    app.use('/fleetslist',fleetsList);
    app.use('/userData',userData);
    app.use('/userFleets',userFleets);
    app.use('/uploadProfile',uploadUserProfile);
    app.use('/uploadProfilePhoto',uploadProfilePhoto); 
}