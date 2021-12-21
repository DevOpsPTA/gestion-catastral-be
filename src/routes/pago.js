const express = require('express');
const router =express.Router();
const  pagoController = require('../controller/pagoController')

//crea un usuario
//api/usuario
router.post('/', 
    pagoController.crearPago
);
router.get('/', 
    pagoController.obtenerPago
);




module.exports =router;