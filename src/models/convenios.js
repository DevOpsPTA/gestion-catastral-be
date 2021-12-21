const mongoose = require('mongoose');
const predios = require('./predios');

const convenioSchema = mongoose.Schema({
    codigo_predio:{
        type:String,
        required: true,
        trim: true
      
    },
    codigo_pago:{
        type:String,
        required: true,
        trim: true
    },
    estado:{
        type:String,
        required: true,
        trim: true
    },
    cuotas:{
        type:String,
        required: true,
        trim: true
    }

});

module.exports  = mongoose.model('convenios', convenioSchema);

