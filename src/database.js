const mongoose = require('mongoose')
//usa la base de datos especificada en .env con la variable MONGODB_URI, 
//si no la encuentra usa mongodb://localhost/Test
/* const URI = process.env.MONGODB_URI
   ? process.env.MONGODB_URILOCAL : 'mongodb://localhost/Test';
 */
const URI = "mongodb://manliot:123698745@cluster1-shard-00-00-mpo6p.mongodb.net:27017,cluster1-shard-00-01-mpo6p.mongodb.net:27017,cluster1-shard-00-02-mpo6p.mongodb.net:27017/test?ssl=true&replicaSet=Cluster1-shard-0&authSource=admin&retryWrites=true&w=majority"
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});//configuraciones del server por defecto

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB is connected')
})
