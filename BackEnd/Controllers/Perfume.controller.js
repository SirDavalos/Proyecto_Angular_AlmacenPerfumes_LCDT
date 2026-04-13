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
    const { id, nombre, precio, cantidad, marca, proveedor, tipo, linea, aroma_salida, aroma_corazon, aroma_fondo } = req.body; 
    if (!id || !nombre || !precio || !cantidad || !marca || !proveedor || !tipo || !linea , aroma_salida, aroma_corazon, aroma_fondo) 
      return res.status(400).json({ mensaje: 'Faltan datos obligatorios' }); 
 
    console.log("1"); 
    const fila_insertada = await PerfumeModel.insertPerfume(id, nombre, precio, cantidad, marca, proveedor, tipo, linea, aroma_salida, aroma_corazon, aroma_fondo); 
    res.status(201).json({ mensaje: 'Perfume agregado', fila_insertada }); 
    console.log("2"); 
  } catch (error) { 
    console.error('Error al agregar perfume:', error); 
    res.status(500).json({ mensaje: 'Error al agregar perfume' }); 
  } 
}; 

// PUT /api/perfumes/actualizarPerfume/:id
const updatePerfume = async (req, res) => { 
  try { 
    const { id } = req.params; 
    const { nombre, precio, cantidad, marca, proveedor, tipo, linea, aroma_salida, aroma_corazon, aroma_fondo } = req.body; 
 
    const filas = await PerfumeModel.updatePerfume(id, nombre, precio, cantidad, marca, proveedor, tipo, linea, aroma_salida, aroma_corazon, aroma_fondo); 
    if (filas === 0) 
      return res.status(404).json({ mensaje: 'Perfume no encontrado' }); 
 
    res.json({ mensaje: 'Perfume actualizado correctamente' }); 
  } catch (error) { 
    console.error('Error al actualizar perfume:', error); 
    res.status(500).json({ mensaje: 'Error al actualizar perfume' }); 
  } 
}; 
 
// DELETE /api/perfumes/borrarPerfume/:id 
const deletePerfume = async (req, res) => { 
  try { 
    const { id } = req.params; 
    const filas = await PerfumeModel.deletePerfume(id); 
 
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