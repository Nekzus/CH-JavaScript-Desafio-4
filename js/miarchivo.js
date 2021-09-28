/*** En este desafio numero 4, genere una calculadora de pagos (cuotas), con intereses variables dependientes del plan de pago a elegir. El usuario ingresa el monto del producto 
y el numero de pagos que desea realizar, la calculadora muestra mediante un mensaje de alert el precio final, numero de pagos, valor de cada pago y los intereses, dependiendo
del plan seleccionado. En caso de ingresar un numero de pagos no contemplado, se le avisa al usuario de la falta de disponibilidad. ***/

//** Se solicitan los datos de ingreso para realizar los calculos */
let precioCompra = Number (prompt('Ingresar Monto Producto en $'));
let cantidadCuotas = parseInt(prompt('Seleccionar Cantidad de Pago/s \n( 1, 2, 3, 6, 9 y 12 pagos)'));
let precioFinal = 0;

//** Se verifica mediante while que el precio de compra sea un numero para mantener la ejecucion, de lo contrario sale del programa */
while (parseInt(precioCompra)) {
    switch (cantidadCuotas) {
        case 1: // 1 pago
            precioFinal = precioCompra;
            mensaje(precioFinal, precioCompra, cantidadCuotas);
            break;
        case 2: // 2 pagos
            precioFinal = precioCompra * 1.0993; // se aplica un interes de 9,93% al precio de compra correspondiente al numero de pagos
            mensaje(precioFinal, precioCompra, cantidadCuotas); // se ejecuta funcion mensaje la cual muestra mensaje con precio final, numero de pagos, valor de cada pago e intereses
            break;
        case 3: // 3 pagos
            precioFinal = precioCompra * 1.1481; // se aplica un interes de 14,81% al precio de compra correspondiente al numero de pagos
            mensaje(precioFinal, precioCompra, cantidadCuotas); // se ejecuta funcion mensaje la cual muestra mensaje con precio final, numero de pagos, valor de cada pago e intereses
            break;
        case 6: // 6 pagos
            precioFinal = precioCompra * 1.3024; // se aplica un interes de 30,24% al precio de compra correspondiente al numero de pagos
            mensaje(precioFinal, precioCompra, cantidadCuotas); // se ejecuta funcion mensaje la cual muestra mensaje con precio final, numero de pagos, valor de cada pago e intereses
            break;
        case 9: // 9 pagos
            precioFinal = precioCompra * 1.5654 // se aplica un interes de 56,54% al precio de compra correspondiente al numero de pagos
            mensaje(precioFinal, precioCompra, cantidadCuotas); // se ejecuta funcion mensaje la cual muestra mensaje con precio final, numero de pagos, valor de cada pago e intereses
            break;
        case 12: // 12 pagos
            precioFinal = precioCompra * 1.7413 // se aplica un interes de 74,13% al precio de compra correspondiente al numero de pagos
            mensaje(precioFinal, precioCompra, cantidadCuotas); // se ejecuta funcion mensaje la cual muestra mensaje con precio final, numero de pagos, valor de cada pago e intereses
            break;
        default:
            alert(`El pago en ${cantidadCuotas} cuotas no esta disponible`);
    }
        //** Se vuelven a solicitar los datos de ingreso para el calculo */
        precioCompra = Number(prompt('Ingresar Monto Producto en $'));
        cantidadCuotas = parseInt(prompt('Seleccionar Cantidad de Pago/s \n( 1, 2, 3, 6, 9 y 12 pagos)'));
        precioFinal = 0;
}

//** Declaracion funcion calculo valor de pago */
function valorPagos(precio, cuotas ) {
    let precioCuota = 0;
    precioCuota = precio / cuotas;
    return precioCuota.toFixed(2);
}

//** Declaracion funcion calculo de intereses */
function intereses(precioFinal, precioCompra) {
    let interes = 0;
    interes = precioFinal - precioCompra;
    return interes;
}

//** Declaracion funcion mensaje con datos de pago */
function mensaje(precioFinal, precioCompra, cantidadCuotas) {
    let mensaje = alert(`El precio final a pagar es de $${(precioFinal).toFixed(2)} en ${cantidadCuotas} pago/s de $${valorPagos(precioFinal, cantidadCuotas)} \n+$${(intereses(precioFinal, precioCompra)).toFixed(2)} de interes`); //dentro del mensaje se ejecutan las funciones de calculo de intereses y valor de pagos
    return mensaje;

}

