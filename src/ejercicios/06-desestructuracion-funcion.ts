/*
    ===== Código de TypeScript =====
*/
/*Destructuración de Argumentos*/
//Al exportar una interfaz el aplicativo no necesita ejecutar el archivo por esta razón las siguientes líneas no 
//se ejecutan.
export interface Producto {
    descripcion: string;
    precio: number;
}

const telefono: Producto = {
    descripcion: 'Nokia A1',
    precio: 150
}

const tableta: Producto = {
    descripcion: 'Ipad Air',
    precio: 350,
}

//Al exportar una funcion o cualquier otra función o método para crearla debe ejecutar el archivo por esta razón
//es que se ejecutan los console, solo debemos comentar la ejecución de dicho método y los console correspondientes
export function calculaImpuestoSobreVenta( productos: Producto[] ): [number, number]{
    let total: number = 0;
    let isv: number = 0;

    //Forma Normal
    /*
    productos.forEach((producto, indice, arreglo) => {
        total += producto.precio;
    });
    */

    //Destructuración de Argumentos
    productos.forEach(({precio}, indice, arreglo) => {
        total += precio;
        console.log(indice);
    });

    isv = total * 0.15;

    return [total, isv];
}

//PRIMERA FORMA
//const impuestoSobreVenta = calculaImpuestoSobreVenta([telefono, tableta]);

/*
const articulos = [telefono, tableta];
*/
//Destructuración de Argumentos
/*
const [isv, total] = calculaImpuestoSobreVenta(articulos);

console.log(`Impuesto sobre venta: ${isv}`);
console.log(`Total: ${total}`);
*/