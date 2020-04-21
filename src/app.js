const express = require('express');
const cors = require('cors');// hace que los servidores interambien datos entre ellos
const app = express();

//settings configurar el servidor
app.set('port', process.env.PORT || 4000);

//middlewares funciones que se ejecutan antes que lleguen a las rutas
app.use(cors());
app.use(express.json());

//routes
app.use('/api/users', require('./routes/users'));// cuando accedemos a //localhost/api/notes usa el archivo users.js
app.use('/api/cars', require('./routes/cars'));
app.use('/api/reservas', require('./routes/reservas'));

module.exports = app;