/* 
Calcular costo total de productos y/o servicios seleccionados por el usuario.

1. Ingresar cantidad de productos
2. Asignarle un precio a cada producto
3. El usuario debe elegir uno de los productos
4. si no elegi el correcto esperar a que lo elija
5. Mostrar en pantalla el valor de el producto

*/
let edad = prompt("Por favor ingrese su edad")

while( edad >= 18){
    alert("Sos mayor de edad, podes comprar bebidas alcoholicas")
    break;
}

let Cerveza = 300;
let Fernet = 800;
let Vino = 400;

const resultado = (a,b) => a*b

const bebidas = prompt(`Seleccione una bebida:
                    1. Cerveza
                    2. Fernet
                    3. Vino`);
const cantidad = prompt("Ingrese la cantidad de que quiere comprar. 1, 2, 3, 4, 5 o 6")

mostrarMonto = (a,b) => {
    if(bebidas == "Cerveza") {
        alert("El valor de la bebida es: " +resultado(Number(Cerveza),cantidad))
    } else if (bebidas == "Fernet"){
        alert("El valor de la bebida es: " +resultado(Number(Fernet),cantidad))
    } else if (bebidas == "Vino"){
        alert ("El valor de la bebida es: " +resultado(Number(Vino),cantidad))
    } else {
        alert("Ingrese por favor una bebida")
    }
}
mostrarMonto();