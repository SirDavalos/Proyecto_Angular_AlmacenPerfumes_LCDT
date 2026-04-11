const express = require('express');
const router = express.Router();

const { getPerfumes, postPerfumes, updatePerfume, deletePerfume } = require("../Controllers/Perfume.controller.js");

router.get("/getPerfumes", getPerfumes);
router.post('/insertPerfume', postPerfumes);
router.put('/actualizarPerfume/:codigo', updatePerfume);
router.delete('/borrarPerfume/:codigo', deletePerfume);

module.exports = router;