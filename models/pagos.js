const mongoose = require('mongoose');
const pagoSchema = mongoose.Schema({
    
    id:{
        type:String,
        required: true,
        trim: true
    },
    tipo:{
        type:String,
        required: true,
        trim: true
   },
   codigo_predio:{
    type:String,
    required: true,
    trim: true
    
},
    valor_pagar:{
        type:String,
        required: true,
        trim: true
}, 
    estado:{
        type:String,
        required: true,
        trim: true
},
    fecha_creacion:{
        type:String,
        required: true,
        trim: true
},
    fecha_pago:{
        type:String,
        required: true,
        trim: true
},
titular:{
    type:String,
    required: true,
    trim: true
}
});
module.exports  = mongoose.model('pagos', pagoSchema);
