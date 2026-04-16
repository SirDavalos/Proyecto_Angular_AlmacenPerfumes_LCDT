const express = require('express');
const router = express.Router();

const { getPerfumes, postPerfumes, updatePerfume, deletePerfume, getPerfumeById } = require("../Controllers/Perfume.controller.js");

router.get("/getPerfumes", getPerfumes);
router.post('/insertPerfume', postPerfumes);
router.put('/actualizarPerfume/:id', updatePerfume);
router.delete('/borrarPerfume/:id', deletePerfume);
router.get("/obtenerPerfume/:id", getPerfumeById);


module.exports = router;