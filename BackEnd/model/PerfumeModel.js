const pool = require("../db/conexion.js");

async function getAllPerfumes() {
    try {
        const [rows] = await pool.query("SELECT * FROM")
        return rows;
    } catch (error) {
        console.error("Error al conectarse con al base de datos", error);
        return null;
    }
}

module.exports = {
    getAllPerfumes
}