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

async function insertPerfume(nombre, precio, cantidad, marca, proveedor, tipo, linea, aroma_salida, aroma_corazon, aroma_fondo) {
    const [result] = await pool.query(
        'INSERT INTO perfumes (nombre, precio, cantidad, marca, proveedor, tipo, linea, aroma_salida, aroma_corazon, aroma_fondo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [nombre, precio, cantidad, marca, proveedor, tipo, linea, aroma_salida, aroma_corazon, aroma_fondo]
    );
    return result.insertId;
}

async function updatePerfume(id, nombre, precio, cantidad, marca, proveedor, tipo, linea, aroma_salida, aroma_corazon, aroma_fondo) {
    const [result] = await pool.query(
        'UPDATE perfumes SET nombre = ?, precio = ?, cantidad = ?, marca = ?, proveedor = ?, tipo = ?, linea = ?, aroma_salida = ?, aroma_corazon = ?, aroma_fondo = ? WHERE id = ?',
        [nombre, precio, cantidad, marca, proveedor, tipo, linea, aroma_salida, aroma_corazon, aroma_fondo, id]
    );
    return result.affectedRows;
}

async function deletePerfume(id) {
    const [result] = await pool.query('DELETE FROM perfumes WHERE id = ?', [id]);
    return result.affectedRows;
}

async function getPerfumeById(id) {
    const [rows] = await pool.query('SELECT * FROM perfumes WHERE id = ?', [id]);
    return rows[0];
}

module.exports = {
    getAllPerfumes,
    insertPerfume,
    updatePerfume,
    deletePerfume,
    getPerfumeById
}