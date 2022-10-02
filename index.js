const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const route = require('./routes/index');
dotenv.config();
const dbURL = process.env.DB_URL;
const app = express();

app.use(
    express.urlencoded({
        extended: true,
        limit: '30mb',
    })
);
app.use(express.json());
route(app);
mongoose
    .connect(dbURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        app.listen(3000, () => {
            console.log('Success');
        });
    })
    .catch((er) => {
        console.log('Error: ' + er.message);
    });
