const convenios = require('../models/convenios');
const pagos = require('../models/pagos');

exports.crearPago = async (req, res) => {
    try {
        let pago;
        //crear el nuevo usuario
        pago = new pagos();
        const { id,tipo,codigo_predio,valor_pagar,estado,fecha_creacion,fecha_pago,titular} = req.body;
                
        pago.id = id;
        pago.tipo = tipo;
        pago.codigo_predio =codigo_predio;
        pago.valor_pagar =valor_pagar;
        pago.estado = estado;
        pago.fecha_creacion =fecha_creacion;
        pago.fecha_pago =fecha_pago;
        pago.titular = titular;
                
        //guardar usuaraios
        
        await pago.save();
        
        res.send('pago  creado correctamente');
            
    } catch (error) {
        console.log(error);
        res.status(400).send('hubo un error');
   }
}    
exports.obtenerPago = async (req, res) => {
    try {
        const pago = await pagos.find({pagos});
        res.json({pago});
        
    } catch (error) {
        console.log(error);
        res.status(400).send('hubo un error');  
    }
}