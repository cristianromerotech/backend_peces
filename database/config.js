import { Sequelize } from 'sequelize';

// Configurar la conexión a la base de datos
const sequelize = new Sequelize('peces', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
});

// Verificar la conexión
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida correctamente');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });

export default sequelize;
