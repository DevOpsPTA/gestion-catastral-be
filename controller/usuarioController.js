const Usuario =require('../models/Usuarios')
exports.crearUsuario = async (req,res) => {
 
    try {
      let usuario;
    //crear el nuevo usuario
    usuario = new Usuario();
    const {id,username,password,rol} = req.body;

    usuario.id =id;
    usuario.username= username;
    usuario.password =password;
    usuario.rol = rol;

    //guardar usuaraios
    
    await usuario.save();
    res.send('usuario creado correctamente');
  } catch (error) {
      console.log(error);
      res.status(400).send('hubo un error');
      
  }

}
exports.obtenerUsuario = async (req, res) => {
  try {
      const usuario = await Usuario.find({Usuario});
      res.json({usuario});
      
  } catch (error) {
      console.log(error);
      res.status(400).send('hubo un error');  
  }
}