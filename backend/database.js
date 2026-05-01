const mongoose = require('mongoose');

// 🔌 CONEXIÓN A MONGODB ATLAS
const URI = "mongodb://admin:Octubre2194@ac-cdilptp-shard-00-00.ygpzihb.mongodb.net:27017,ac-cdilptp-shard-00-01.ygpzihb.mongodb.net:27017,ac-cdilptp-shard-00-02.ygpzihb.mongodb.net:27017/empresa?ssl=true&replicaSet=atlas-w4x1n6-shard-0&authSource=admin";

mongoose.connect(URI)
    .then(() => console.log('MongoDB conectado'))
    .catch(err => console.error('Error MongoDB:', err));

module.exports = mongoose;