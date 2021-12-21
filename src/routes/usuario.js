//rutas para crear usuarios
const express = require('express');
const router =express.Router();
const  usuarioController = require('../controller/usuarioController')

//crea un usuario
//api/usuario
router.post('/', 
    usuarioController.crearUsuario
);
router.get('/', 
    usuarioController.obtenerUsuario
);




module.exports =router;