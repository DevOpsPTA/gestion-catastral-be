const mongoose = require('mongoose');
const UsuariosSchema = mongoose.Schema({
    id:{
        type:String,
        required: true,
        trim: true
    },
   username:{
        type:String,
        required: true,
        trim: true

    },
    password:{
        type:String,
        required: true,
        trim: true
    },
    rol:{
        type:String,
        required: true,
        trim: true,
    },
    
});

module.exports  = mongoose.model('usuario', UsuariosSchema);