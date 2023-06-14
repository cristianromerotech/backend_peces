import Usuario from './../models/Usuario.js'; // Importar el modelo Usuario

const formularioController = {
  guardarDatos: async (req, res) => {
    try {
      // Obtener los datos del formulario de la solicitud
      const { nombre, telefono, cantidad_peces, opcion_contacto, ubicacion } = req.body;
  
      // Guardar los datos en la base de datos
      const usuario = await Usuario.create({
        nombre,
        telefono,
        cantidad_peces,
        opcion_contacto,
        ubicacion
      });
  
      // Enviar una respuesta con el usuario creado
      res.json(usuario);
    } catch (error) {
      console.error('Error al guardar los datos del formulario:', error);
      res.status(500).json({ mensaje: 'Error al guardar los datos del formulario' });
    }
  },

};

export default formularioController;
