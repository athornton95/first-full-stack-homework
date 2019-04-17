require('./db/db');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const router = require('./controllers/dogs')

const methodOverride = require('method-override');
const bodyParser = require('body-parser');

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('short'));
app.use('/dogs', router);














app.listen(3000, () => {
    console.log('app is listening on port 3000');
})