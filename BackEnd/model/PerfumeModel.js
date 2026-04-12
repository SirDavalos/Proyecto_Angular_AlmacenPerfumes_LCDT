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

async function insertPerfume(codigo, nombre, precio, cantidad, marca, proveedor, tipo, linea) {
    const [result] = await pool.query(
        'INSERT INTO perfumes (Codigo, Nombre, Precio, Cantidad, Marca, Proveedor, Tipo, Linea) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [codigo, nombre, precio, cantidad, marca, proveedor, tipo, linea]
    );
    return result.affectedRows;
}

async function updatePerfume(codigo, nombre, precio, cantidad, marca, proveedor, tipo, linea) {
    const [result] = await pool.query(
        'UPDATE perfumes SET Nombre = ?, Precio = ?, Cantidad = ?, Marca = ?, Proveedor = ?, Tipo = ?, Linea = ? WHERE Codigo = ?',
        [nombre, precio, cantidad, marca, proveedor, tipo, linea, codigo]
    );
    return result.affectedRows;
}

async function deletePerfume(codigo) {
    const [result] = await pool.query('DELETE FROM perfumes WHERE codigo = ?', [codigo]);
    return result.affectedRows;
}

module.exports = {
    getAllPerfumes,
    insertPerfume,
    updatePerfume,
    deletePerfume
}