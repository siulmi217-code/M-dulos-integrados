const express = require('express');
const router = express.Router();

const empleadoCtrl = require('../controllers/empleado.controller');

/**
 * 🟢 PRUEBA API
 */
router.get('/', (req, res) => {
    res.json({ status: 'API REST funcionando' });
});

/**
 * ➕ CREAR EMPLEADO
 */
router.post('/', empleadoCtrl.createEmpleados);

/**
 * 📋 LISTAR EMPLEADOS
 */
router.get('/listar', empleadoCtrl.getEmpleados);

/**
 * 🔍 UN EMPLEADO
 */
router.get('/:id', empleadoCtrl.getUnicoEmpleado);

/**
 * ✏️ EDITAR
 */
router.put('/:id', empleadoCtrl.editarEmpleado);

/**
 * ❌ ELIMINAR
 */
router.delete('/:id', empleadoCtrl.eliminarEmpleado);

module.exports = router;