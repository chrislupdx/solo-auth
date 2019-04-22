const jwt = require('jsonwebtoken');

const EXPIRES_IN = '1d';

const tokenize = payload => {
    return jwt.sign(
        { payload },
        process.env.AUTH_SECRET,
        { expiresIn: EXPIRES_IN });
};

module.exports = {
    tokenize
};