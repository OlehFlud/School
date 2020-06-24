const { MONGODB_URL } = require('./config/config');
const express = require('express');
const http = require('http');
const morgan = require('morgan');

const app = express();
const server = http.createServer(app);
const dotenv = require('dotenv');
const mongoose = require('mongoose');

mongoose.connect(MONGODB_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.once('open', () => console.log('Connected'));
db.once('error', (error) => console.log('Error', error));

dotenv.config();

app.set('view engine', 'ejs');

app.use(morgan('dev'));

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE,PATCH');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});
const { lessonRouter } = require('./routes');

app.use('/lesson', lessonRouter);

server.listen(5000, () => console.log('Server has been started on port 5000'));
