const mongoose = require('mongoose')
//usa la base de datos especificada en .env con la variable MONGODB_URI, 
//si no la encuentra usa mongodb://localhost/Test
const URI = process.env.MONGODB_URI
    ? process.env.MONGODB_URI : 'mongodb://localhost/Test';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false
});//configuraciones del server por defecto

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB is connected')
})
