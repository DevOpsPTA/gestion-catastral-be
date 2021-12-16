const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use('/login', (req, res) => {
  res.send({
    token: 'test123'
  });
});


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
});