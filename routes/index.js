const express = require('express');
const models = require('../models');
const router = express.Router();

const users = require('./users');

router.get('/', (req, res, next) => {
    res.render('index');
});

router.use('/users', users);

router.get('/offerings', (req, res, next) => {
    res.json(models.offerings);
})

router.get('/:offeringurltitle', (req, res, next) => {
    const url_title = req.params.offeringurltitle;
    const offerings = models.offerings;
    for (let i=0; i<offerings.length; i++) {
        if (offerings[i].url_title === url_title) {
            res.json(offerings[i]);
        }
    }
    res.send(404);
})

module.exports = router;
