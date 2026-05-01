const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

// 🔵 Conexión a MongoDB (desde database.js)
require('./database');

// ⚙️ Configuración
app.set('port', process.env.PORT || 3000);

// 🔵 Middlewares
app.use(morgan('dev'));
app.use(express.json());

// 🔵 CORS para Angular
app.use(cors({ origin: 'http://localhost:4200' }));

// 🔵 Rutas
app.use('/api/empleados', require('./routes/empleado.routes'));

// 🚀 Servidor
app.listen(app.get('port'), () => {
    console.log('Servidor activo en puerto', app.get('port'));
});