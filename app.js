const express = require('express');
const nunjucks = require('nunjucks');
const morgan = require('morgan');
const router = require('./routes');

const app = express();

app.use(morgan('short'));

app.use('/', router);

app.listen(3000, () => {
    console.log('Listening on Port 3000');
});

