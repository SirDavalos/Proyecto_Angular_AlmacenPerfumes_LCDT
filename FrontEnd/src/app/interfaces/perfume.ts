export interface Perfume {
    id: number,
    nombre: string,
    precio: number,
    cantidad: number,
    marca: string,
    proveedor: string,
    tipo: string,
    linea: string,
    aroma: Array<{
        salida: string,
        corazon: string,
        fondo: string
    }>
}
