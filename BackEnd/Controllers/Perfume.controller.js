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

module.exports = {
    getPerfumes
}