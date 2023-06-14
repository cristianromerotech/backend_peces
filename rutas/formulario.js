import express from 'express';
const router = express.Router();

import formularioController from './../controladores/formulario.js'; // Importar el controlador del formulario

// Ruta para recibir datos del formulario y guardar en la base de datos
router.post('/', formularioController.guardarDatos);

export default router;
