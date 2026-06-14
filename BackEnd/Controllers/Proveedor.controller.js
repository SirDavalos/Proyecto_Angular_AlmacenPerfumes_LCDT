const ProveedorModel = require('../model/ProveedorModel.js');
// GET
const getProveedores = async (req, res) => {
    try {
        const Proveedores = await ProveedorModel.getAllProveedores();
        res.json(Proveedores);
    } catch (error) {
        console.error('Error al obtener proveedores:', error);
        res.status(500).json({ mensaje: 'Error al obtener proveedores' });
    }
}

// POST /api/Proovedor 
const postProveedores = async (req, res) => { 
  try { 
    console.log(req.body); 
    const { IDproveedores, Nombre, correo, telefono } = req.body; 
    if (!IDproveedores || !Nombre || !correo || !telefono) 
      return res.status(400).json({ mensaje: 'Faltan datos obligatorios' }); 

    console.log("1"); 
    const fila_insertada = await ProveedorModel.insertProveedores(IDproveedores, Nombre, correo, telefono); 
    res.status(201).json({ mensaje: 'Proveedor agregado', fila_insertada }); 
    console.log("2"); 
  } catch (error) { 
    console.error('Error al agregar proveedor:', error); 
    res.status(500).json({ mensaje: 'Error al agregar proveedor' }); 
  } 
}; 

// PUT /api/proveedores/actualizarProveedor/:id
const updateProveedores = async (req, res) => { 
  try { 
    const { IDproveedores } = req.params; 
    const {Nombre, correo, telefono } = req.body; 
 
    const filas = await ProveedorModel.updateProveedores(IDproveedores, Nombre, correo, telefono); 
    if (filas === 0) 
      return res.status(404).json({ mensaje: 'Proveedor no encontrado' }); 
 
    res.json({ mensaje: 'Proveedor actualizado correctamente' }); 
  } catch (error) { 
    console.error('Error al actualizar proveedor:', error); 
    res.status(500).json({ mensaje: 'Error al actualizar proveedor' }); 
  } 
}; 
 
// DELETE /api/proveedores/borrarProveedor/:id 
const deleteProveedor = async (req, res) => { 
  try { 
    const { IDproveedores } = req.params; 
    const filas = await ProveedorModel.deleteProveedores(IDproveedores); 
 
    if (filas === 0) 
      return res.status(404).json({ mensaje: 'Proveedor no encontrado' }); 
 
    res.json({ mensaje: 'Proveedor eliminado correctamente' }); 
  } catch (error) { 
    console.error('Error al eliminar proveedor:', error); 
    res.status(500).json({ mensaje: 'Error al eliminar proveedor' }); 
  } 
};

const getProveedorById = async (req, res) => { 
  try { 
    const { id } = req.params; 
    const proveedor = await ProveedorModel.getProveedorById(id); 
 
    if (!proveedor) 
      return res.status(404).json({ mensaje: 'Proveedor no encontrado' }); 
 
    res.json(proveedor); 
  } catch (error) { 
    console.error('Error al obtener perfume:', error); 
    res.status(500).json({ mensaje: 'Error al obtener perfume' }); 
  } 
};

module.exports = {
    getProveedores,
    postProveedores,
    updateProveedores,
    deleteProveedor,
    getProveedorById
}