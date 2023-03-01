import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from './routes/web';
import initApiRoutes from './routes/api';
import configCORS from './config/cors';
import cookieParser from 'cookie-parser';

require('dotenv').config();

const app = express();

// config CORS
configCORS(app)

// config bordyParser 
var jsonParser = bodyParser.json({ limit: 1024 * 1024 * 20, type: 'application/json' });
var urlencodedParser = bodyParser.urlencoded({ extended: true, limit: 1024 * 1024 * 20, type: 'application/x-www-form-urlencoded' })
app.use(jsonParser);
app.use(urlencodedParser);

// config express 
app.use(express.static('public'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }))

// config view engine
viewEngine(app)

// congif cookieParser
app.use(cookieParser())

// init web routes
initWebRoutes(app)
initApiRoutes(app)


const PORT = process.env.PORT || 6969;
// port === undefined => port = 6969

app.use((req, res,) => {
    return res.send('404 not found')
})

app.listen(PORT, () => {
    console.log("JWT Backend Nodejs is runing on the port:" + PORT)
})
