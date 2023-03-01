require('dotenv').config();


const configCORS = (app) => {
    // Add headers before the routes are defined
    app.use(function (req, res, next) {

        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin',
            // process.env.REACT_APP_BACKEND_URL
            // process.env.REACT_URL_DOCKER,
            process.env.REACT_URL_LOCALHOST
        );

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');

        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);

        if (req.method === 'OPTIONS') {
            return res.sendStatus(200)
        }

        // Pass to next layer of middleware
        next();
    });
}

export default configCORS;