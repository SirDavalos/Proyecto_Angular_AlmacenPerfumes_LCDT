const pool = require("../db/conexion.js");

async function getAllPerfumes() {
    try {
        const [rows] = await pool.query("SELECT * FROM perfumes")
        return rows;
    } catch (error) {
        console.error("Error al conectarse con al base de datos", error);
        return null;
    }
}

async function insertPerfume(id, nombre, precio, cantidad, marca, proveedor, tipo, linea, aroma_salida, aroma_corazon, aroma_fondo) {
    const [result] = await pool.query(
        'INSERT INTO perfumes (id, Nombre, Precio, Cantidad, Marca, Proveedor, Tipo, Linea, Aroma_Salida, Aroma_Corazon, Aroma_Fondo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [id, nombre, precio, cantidad, marca, proveedor, tipo, linea, aroma_salida, aroma_corazon, aroma_fondo]
    );
    return result.affectedRows;
}

async function updatePerfume(id, nombre, precio, cantidad, marca, proveedor, tipo, linea, aroma_salida, aroma_corazon, aroma_fondo) {
    const [result] = await pool.query(
        'UPDATE perfumes SET Nombre = ?, Precio = ?, Cantidad = ?, Marca = ?, Proveedor = ?, Tipo = ?, Linea = ?, Aroma_Salida = ?, Aroma_Corazon = ?, Aroma_Fondo = ? WHERE id = ?',
        [nombre, precio, cantidad, marca, proveedor, tipo, linea, aroma_salida, aroma_corazon, aroma_fondo, id]
    );
    return result.affectedRows;
}

async function deletePerfume(id) {
    const [result] = await pool.query('DELETE FROM perfumes WHERE id = ?', [id]);
    return result.affectedRows;
}

module.exports = {
    getAllPerfumes,
    insertPerfume,
    updatePerfume,
    deletePerfume
}