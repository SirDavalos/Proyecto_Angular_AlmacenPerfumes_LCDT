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

async function insertProveedores(IDproveedores, Nombre, correo, telefono) {
    const [result] = await pool.query(
        'INSERT INTO proveedores (IDproveedores, Nombre, Correo, Telefono) VALUES (?, ?, ?, ?)',
        [IDproveedores, Nombre, correo, telefono]
    );
    return result.affectedRows;
}

async function updateProveedores(IDproveedores, Nombre, correo, telefono) {
    const [result] = await pool.query(
        'UPDATE proveedores SET Nombre = ?, Correo = ?, Telefono = ? WHERE IDproveedores = ?',
        [Nombre, correo, telefono, IDproveedores]
    );
    return result.affectedRows;
}

async function deleteProveedores(IDproveedores) {
    const [result] = await pool.query('DELETE FROM proveedores WHERE IDproveedores = ?', [IDproveedores]);
    return result.affectedRows;
}

module.exports = {
    getAllProveedores,
    insertProveedores,
    updateProveedores,
    deleteProveedores
}