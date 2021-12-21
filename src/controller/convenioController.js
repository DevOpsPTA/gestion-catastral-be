const convenios = require('../models/convenios');
const predios = require('../models/convenios');

exports.crearConvenio = async (req, res) => {
    try {
        let convenio;
        //crear el nuevo usuario
        convenio = new convenios();
        const { codigo_predio,codigo_pago,estado, cuotas, aconstruida, direccion,barrio} = req.body;
        

        
        convenio.codigo_predio = codigo_predio;
        convenio.codigo_pago = codigo_pago;
        convenio.estado = estado;
        convenio.cuotas = cuotas;
        convenio.aconstruida = aconstruida;
        convenio.direccion = direccion;
        convenio.barrio = barrio;
       //guardar usuaraios
        
        await convenio.save();
        
        res.send('convenio  creado correctamente');
            
    } catch (error) {
        console.log(error);
        res.status(400).send('hubo un error');
        
    }
}    
exports.obtenerConvenio = async (req, res) => {
    try {
        const convenio = await convenios.find({convenios});
        res.json({convenio});
        
    } catch (error) {
        console.log(error);
        res.status(400).send('hubo un error');  
    }
}