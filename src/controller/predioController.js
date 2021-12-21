const predios = require('../models/predios');

exports.crearPredio = async (req, res) => {
    try {
        let predio;
    //crear el nuevo usuario
    predio = new predios();
    const { codigo,cedula,nombre, atotal, aconstruida, direccion,barrio} = req.body;

    predio.codigo = codigo;
    predio.cedula = cedula;
    predio.nombre = nombre;
    predio.atotal =atotal;
    predio.aconstruida = aconstruida;
    predio.direccion= direccion;
    predio.barrio=barrio;
     //guardar usuaraios
    await predio.save();
    res.send('Predio  creado correctamente');
    } catch (error) {
        console.log(error);
        res.status(400).send('hubo un error');
   }
}
exports.obtenerPredio = async (req, res) => {
    try {
        const predio = await predios.find({predios});
        res.json(predio);
        
    } catch (error) {
        console.log(error);
        res.status(400).send('hubo un error');  
    }
}
exports.actualizarPredio = async (req, res) => {
    const{ codigo } = req.body
    const nuevoPredio ={};
    if (codigo) {
        nuevoPredio.nombre = nombre;
     }
    
    try {
        
        let predio = await predios.findById(req.params.codigo)
        if(!predio){

            return res.status(404).json({msg: 'Predio no encontrado'})
        }
        
        predio = await predios.findByIdAndUpdate({codigo: req.params.codigo},{ $set:nuevoPredio},{new:true});
        res.json({predio});
        //res.json({predio});
        
    } catch (error) {
        console.log(error);
        res.status(400).send('hubo un error');  
    }
}