/*
    ===== Código de TypeScript =====
*/
//Importación por desestructuración de la interfaz del archivo "./ejercicios/05-desestructuracion-funcion"
//import { calculaImpuestoSobreVenta, Producto } from "./ejercicios/06-desestructuracion-funcion";
import { calculaImpuestoSobreVenta, Producto } from './06-desestructuracion-funcion';

const carritoCompras: Producto[] = [
    {
        descripcion: 'Telefono 1',
        precio: 150
    },
    {
        descripcion: 'Telefono 2',
        precio: 200
    },
];

const [total, isv] = calculaImpuestoSobreVenta(carritoCompras);

console.log(`Impuesto sobre venta: ${isv}`);
console.log(`Total: ${total}`);