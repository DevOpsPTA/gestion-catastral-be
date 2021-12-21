//rutas para crear predios
const express = require('express');
const router =express.Router();
const  predioController = require('../controller/predioController')

//crea un usuario
//api/usuario
router.post('/', 
    predioController.crearPredio
);
router.get('/', 
    predioController.obtenerPredio
);

router.put('/:codigo', 
    predioController.actualizarPredio
);


module.exports =router;