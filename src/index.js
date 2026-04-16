const express = require('express');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/api', userRoutes);

const errorMiddleware = require('./middlewares/errorMiddleware');
app.use(errorMiddleware); 
sequelize.sync().then(() => {
  app.listen(3000, () => console.log('Servidor en puerto 3000 y MySQL conectado'));
}).catch(err => console.log('Error al conectar:', err));