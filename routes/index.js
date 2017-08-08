const express = require('express');
const models = require('../models');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index');
});

router.get('/users', (req, res, next) => {
    res.json(models.users);
})

router.get('/users/:username', (req, res, next) => {
    const username = req.params.username;
    const users = models.users;
    for (let i=0; i<users.length; i++) {
        if (users[i].username === username) {
            res.json(users[i]);
        }
    }
    res.send(404);
})

router.get('/offerings', (req, res, next) => {
    res.json(models.offerings);
})

module.exports = router;
