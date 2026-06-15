const express = require('express');
const router = express.Router();

//Proveedores
const {getProveedores, postProveedores, updateProveedores, deleteProveedor, getProveedorById } = require("../Controllers/Proveedor.controller.js");

router.get("/getProveedores", getProveedores);
router.post("/insertProveedor", postProveedores);
router.put("/updateProveedores/:id", updateProveedores);
router.delete("/borrarProveedor/:id", deleteProveedor);
router.get("/obtenerProveedor/:id", getProveedorById);

module.exports = router;