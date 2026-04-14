const express = require('express');
const router = express.Router();

//Proveedores
const {getProveedor, postProveedores, updateProveedores, deleteProveedor } = require("../Controllers/Proveedor.controller.js");

router.get("/getProveedor", getProveedor);
router.post("/insertProovedor", postProveedores);
router.put("/updateProveedores/:id", updateProveedores);
router.delete("borrarProveedor/:id", deleteProveedor);

module.exports = router;