const express = require('express');
const router = express.Router();

const {getPerfumes} = require("../Controllers/Perfume.controller.js");

router.get("/", getPerfumes);

module.exports = router;