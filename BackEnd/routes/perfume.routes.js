const express = require('express');
const router = express.Router();

//Perfumes
const { getPerfumes, postPerfumes, updatePerfume, deletePerfume } = require("../Controllers/Perfume.controller.js");

router.get("/getPerfumes", getPerfumes);
router.post('/insertPerfume', postPerfumes);
router.put('/actualizarPerfume/:id', updatePerfume);
router.delete('/borrarPerfume/:id', deletePerfume);


module.exports = router;