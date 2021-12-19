import TaskRouter from './controllers/users';
require("./config/database").connect();

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/users', TaskRouter);



// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.json('hello world');
});
app.get('/predial', function(req, res) {
    res.json('pago predial')
  });  

app.post('/predial', function(req, res) {
    res.json('pago predial')
  });  

app.listen(3001, () => {
    console.log("escuchando puert:..", 3001);
    //console.log("valor", DB_URL);
});