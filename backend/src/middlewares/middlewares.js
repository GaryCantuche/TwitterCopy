import {isAuthenticated} from './authMiddlewares';

const middlewares = (app) => {
    app.use(isAuthenticated);
}

export default middlewares;