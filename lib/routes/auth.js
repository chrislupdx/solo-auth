const { Router } = require('express');
const { ensureAuth } = require('../../lib/middleware/ensureAuth');
const User = require('../models/user');

module.exports = Router()
    .post('/signup', (req, res, next) => {
        const {
            email,
            password
        } = req.body;
        User
            .create({ email, password })
            .then(user => {
                const token = user.authToken();
                res.send({ user, token });
            })
            .catch(next);
    });