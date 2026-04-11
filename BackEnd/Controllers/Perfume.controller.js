//Rutas
const PerfumeModel = require("../model/PerfumeModel.js");

// GET
const getPerfumes = async (req, res) => {
    try {
        const perfumes = await PerfumeModel.getAllPerfumes();
        res.json(perfumes);
    } catch (error) {
        console.error('Error al obtener perfumes:', error);
        res.status(500).json({ mensaje: 'Error al obtener perfumes' });
    }
}

// POST /api/books 
const postPerfumes = async (req, res) => { 
  try { 
    console.log(req.body); 
    const { codigo, nombre, precio, cantidad, marca, proveedor, tipo, linea } = req.body; 
    if (!codigo || !nombre || !precio || !cantidad || !marca || !proveedor || !tipo || !linea) 
      return res.status(400).json({ mensaje: 'Faltan datos obligatorios' }); 
 
    console.log("1"); 
    const fila_insertada = await PerfumeModel.insertPerfume(codigo, nombre, precio, cantidad, marca, proveedor, tipo, linea); 
    res.status(201).json({ mensaje: 'Perfume agregado', fila_insertada }); 
    console.log("2"); 
  } catch (error) { 
    console.error('Error al agregar perfume:', error); 
    res.status(500).json({ mensaje: 'Error al agregar perfume' }); 
  } 
}; 

// PUT /api/perfumes/actualizarPerfume/:codigo
const updatePerfume = async (req, res) => { 
  try { 
    const { codigo } = req.params; 
    const { nombre, precio, cantidad, marca, proveedor, tipo, linea } = req.body; 
 
    const filas = await PerfumeModel.updatePerfume(codigo, nombre, precio, cantidad, marca, proveedor, tipo, linea); 
    if (filas === 0) 
      return res.status(404).json({ mensaje: 'Perfume no encontrado' }); 
 
    res.json({ mensaje: 'Perfume actualizado correctamente' }); 
  } catch (error) { 
    console.error('Error al actualizar perfume:', error); 
    res.status(500).json({ mensaje: 'Error al actualizar perfume' }); 
  } 
}; 
 
// DELETE /api/perfumes/borrarPerfume/:codigo 
const deletePerfume = async (req, res) => { 
  try { 
    const { codigo } = req.params; 
    const filas = await PerfumeModel.deletePerfume(codigo); 
 
    if (filas === 0) 
      return res.status(404).json({ mensaje: 'Perfume no encontrado' }); 
 
    res.json({ mensaje: 'Perfume eliminado correctamente' }); 
  } catch (error) { 
    console.error('Error al eliminar perfume:', error); 
    res.status(500).json({ mensaje: 'Error al eliminar perfume' }); 
  } 
}; 

module.exports = {
    getPerfumes,
    postPerfumes,
    updatePerfume,
    deletePerfume
}