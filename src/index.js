import TaskRouter from './controllers/users';

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
const PORT = process.env.PORT || 3001;

//importar rutas


app.use('', TaskRouter);
app.use('/usuarios', require ('./routes/usuario'));
app.use('/predios', require ('./routes/predio'));
app.use('/convenios', require ('./routes/convenio'));
app.use('/pagos', require ('./routes/pago'));


app.use(cors());

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.json('hello world');
});

app.listen(PORT, () => {
    console.log(`escuchando puerto:.. ${PORT}`);
  });