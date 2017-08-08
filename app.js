const express = require('express');
const nunjucks = require('nunjucks');
const morgan = require('morgan');
const router = require('./routes');

const app = express();

// Morgan for logging
app.use(morgan('short'));

// Register html-templating engine as nunjucks
const env = nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

// Register ./public as the static folder
app.use(express.static('./public'));


app.use('/', router);

app.listen(3000, () => {});

