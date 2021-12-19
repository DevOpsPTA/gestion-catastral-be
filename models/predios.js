const mongoose = require('mongoose');

const predioSchema = mongoose.Schema({
    codigo:{
        type:String,
        required: true,
        trim: true
    },
   cedula:{
        type:String,
        required: true,
        trim: true
   },
   nombre:{
    type:String,
    required: true,
    trim: true
},
    atotal:{
        type:String,
        required: true,
        trim: true
}, 
    aconstruida:{
        type:String,
        required: true,
        trim: true
},
    direccion:{
        type:String,
        required: true,
        trim: true
},
    barrio:{
        type:String,
        required: true,
        trim: true
}
});
module.exports  = mongoose.model('predios', predioSchema);
