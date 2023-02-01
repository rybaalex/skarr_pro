require('dotenv').config()
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');


const cors = require('cors');
//setting DB
const PORT = process.env.SERVER_PORT || 8080;
const APP_URL = process.env.APP_URL;
const DB_NAME = process.env.DB_NAME;
const DB_URL = 'mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASSWORD + '@' + (process.env.NODE_ENV === 'dev' ? process.env.DB_URL_DEV : process.env.DB_URL_PROD) + ':27017/' + DB_NAME

const corsOptions = {
    origin: APP_URL + ":3000"
};

const app = express()
app.use(express.json())
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({extended: true}));

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Open API for OxFord',
        version: '1.0.0',
    },
    servers: [
        {
            url: 'http://localhost:5000/api/v1/',
            description: 'Development server',
        },
    ],
};

const options = {
    swaggerDefinition,
    // Paths to files containing OpenAPI definitions
    apis: ['./app/routes/*.js'],
};

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerSpec = swaggerJSDoc(options);
const swaggerUi = require('swagger-ui-express');

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

async function startApp() {
    try {
        await MongoClient.connect(DB_URL, (err, database) => {
            if (err) return console.log("error", err);
            const myDB = database.db(DB_NAME)
            require('./app/routes')(app, myDB);
            app.listen(PORT, () => console.log('SERVER STARTED ON PORT ', PORT, process.env.NODE_ENV))
        });
    } catch (e) {
        console.log("error", e)
    }
}

startApp().then();