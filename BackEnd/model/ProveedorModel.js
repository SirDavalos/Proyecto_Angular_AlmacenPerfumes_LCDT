const pool = require("../db/conexion.js");

// GET
async function getAllProveedores() {
    try {
        const [rows] = await pool.query("SELECT * FROM proveedores")
        return rows;
    } catch (error) {
        console.error("Error al conectarse con al base de datos", error);
        return null;
    }
}

async function insertProveedores(nombre, correo, telefono) {
    const [result] = await pool.query(
        'INSERT INTO proveedores (nombre, correo, telefono) VALUES (?, ?, ?)',
        [nombre, correo, telefono]
    );
    return result.affectedRows;
}

async function updateProveedores(id, nombre, correo, telefono) {
    const [result] = await pool.query(
        'UPDATE proveedores SET nombre = ?, correo = ?, telefono = ? WHERE id = ?',
        [nombre, correo, telefono, id]
    );
    return result.affectedRows;
}

async function deleteProveedores(id) {
    const [result] = await pool.query('DELETE FROM proveedores WHERE id = ?', [id]);
    return result.affectedRows;
}

async function getProveedorById(id) {
    const [rows] = await pool.query('SELECT * FROM proveedores WHERE id = ?', [id]);
    return rows[0];
}

module.exports = {
    getAllProveedores,
    insertProveedores,
    updateProveedores,
    deleteProveedores,
    getProveedorById
}