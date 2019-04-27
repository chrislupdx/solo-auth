const express = require('express');
const app = express();
const { bearerToken } = require('./middleware/ensureAuth');
const mongoConnection = require('./middleware/mongo-connection');

app.use(require('morgan')('tiny', {
  skip: () => process.env.NODE_ENV === 'test'
}));

app.use(express.json());
app.use(bearerToken);
app.use('/api/vi/auth/signup', mongoConnection, require('./routes/auth'));

module.exports = app;