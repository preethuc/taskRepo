const express = require('express');
const app = express();
const morgan = require('morgan');
const userRoute = require('./Route/userRoute')
const bookRoute = require('./Route/bookRoute')

//1.MIDDLEWARE
app.use(express.json());
app.use(morgan('dev'));
app.use((req, res, next) => {
  console.log('Middleware is Working..!');
  next();
});

app.use('/api/user', userRoute);
app.use('/api/book', bookRoute);


module.exports = app;
