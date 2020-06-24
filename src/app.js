const express = require('express');
const http = require('http');
const morgan = require('morgan');

const app = express();
const server = http.createServer(app);
const dotenv = require('dotenv');

dotenv.config();

app.set('view engine', 'ejs');

app.use(morgan('dev'));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE,PATCH');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

server.listen(5000, () => console.log('Server has been started on port 5000'));
