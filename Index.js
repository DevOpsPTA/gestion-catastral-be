const express = require('express');
const cors = require('cors');
const conectarDB = require('./config/db');


//crear servidor
const app = express();

//conectar BD

conectarDB();
//habilitar express.json

app.use(express.json({ extended: true}));

//puerto de la app
const PORT = process.env.PORT || 3002;

//importar rutas

app.use('/api/usuarios', require ('./routes/usuarios'));
app.use('/api/predios', require ('./routes/predio'));
app.use('/api/convenios', require ('./routes/convenio'));
app.use('/api/pagos', require ('./routes/pago'));


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

app.listen(PORT, () => {
    console.log(`escuchando puerto:.. ${PORT}`);
//`escuchando puerto:.. ${PORT}`
  });