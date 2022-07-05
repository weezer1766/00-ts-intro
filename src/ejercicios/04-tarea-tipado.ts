/*
    ===== Código de TypeScript =====
*/
//PRIMERA FORMA SE PUEDE ANIDAR UNA INTERFAZ DENTRO DE OTRA PERO NO ES RECOMENDABLE HACERLO DE ESTA FORMA.
/*
interface SuperHeroe{
    nombre: string;
    edad: number;
    direccion: {
        calle: string;
        pais: string;
        ciudad: string;
    };
    mostrarDireccion: () => string;
}
*/

interface SuperHeroe{
    nombre: string;
    edad: number;
    direccion: Direccion;
    mostrarDireccion: () => string;
}

interface Direccion{
    calle: string;
    pais: string;
    ciudad: string;
}

const superHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main ST.',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion(): string{
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);