debugger;


import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import sequelize from './database/config.js';
import {} from './database/database.js';
import formularioRouter from './rutas/formulario.js';

const app = express();

// Configuración de middlewares
app.use(bodyParser.json());
app.use(cors());

// Configuración de las rutas
app.use('/api/formulario', formularioRouter);

// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
