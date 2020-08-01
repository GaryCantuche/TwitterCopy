import express from "express";
import router from './router';
import serverConfig from './config';
import {config} from 'dotenv';
import database from './database';

const app = express();
const SETTINGS = config();

require('./auth/local-auth');

serverConfig(app);
router(app);

app.listen(SETTINGS.parsed.PORT,() => {
    console.log(`Server listening on port ${SETTINGS.parsed.PORT}`);
});