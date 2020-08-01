import storeMessage from './Router/storeMessage';
import login from './Router/login';

export default (app) => {
    app.use('/storeMessage',storeMessage); 
    app.use('/login',login);   
}