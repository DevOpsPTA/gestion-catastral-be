const express = require('express');
const router =express.Router();
const  convenioController = require('../controller/convenioController')

//crea un usuario
//api/usuario
router.post('/', 
    convenioController.crearConvenio
);

router.get('/', 
    convenioController.obtenerConvenio
);


module.exports =router;