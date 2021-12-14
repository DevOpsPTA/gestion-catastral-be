const express = require('express');
const app = express();

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