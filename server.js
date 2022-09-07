const app = require('./app');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/user-data');
mongoose.connection
  .once('open', () => {
    console.log('DB connected');
  })
  .on('error', (error) => {
    console.log('error is:', error);
  });

//4.START SERVER
const server = app.listen(3000, () => console.log('Listening on the PORT 3000'));
