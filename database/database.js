import sequelize from './config.js';
import Usuario from './../models/Usuario.js';

sequelize.sync({ alter: true })
  .then(() => {
    console.log('Sincronización de la base de datos completada');
  })
  .catch((error) => {
    console.error('Error al sincronizar la base de datos:', error);
  });
