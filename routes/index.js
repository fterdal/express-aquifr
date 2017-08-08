const express = require('express');
const models = require('../models');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index');
});

router.get('/users', (req, res, next) => {
    res.json(models.users);
})

router.get('/offerings', (req, res, next) => {
    res.json(models.offerings);
})

module.exports = router;
