// Variables con let
let nombreCliente = "Katherine"; 
let apellidoCliente = "Gómez";
let edadCliente = 19;
let esClienteFiel = true; 
let totalCompra = 520000;
let cantidadProductos = 5;
let direccionEntrega = "Calle 63 #99-34, Robledo";
let metodoPago = "Tarjeta de crédito";
let descuentoAdicional = esClienteFiel ? 0.05 : 0; 

// Productos y precios 
let producto1 = "Labial"; 
let precioProducto1 = 50000;
let producto2 = "Sombras";
let precioProducto2 = 60000;
let producto3 = "Polvo";
let precioProducto3 = 40000;
let producto4 = "Base";
let precioProducto4 = 70000;
let producto5 = "Rubor";
let precioProducto5 = 30000;

// Variables con const
const precioMaximoSinDescuento = 500000;
const porcentajeDescuento = 0.15;
const limiteSinDescuento = 200000;
const mensajeDescuento = "¡Felicidades! Obtienes un 15% de descuento.";
const mensajeSinDescuento = "No hay descuento disponible.";

// Operaciones con las variables
let sumaProductos = precioProducto1 + precioProducto2 + precioProducto3 + precioProducto4 + precioProducto5;

let descuento = totalCompra > precioMaximoSinDescuento ? porcentajeDescuento : 0;
let totalConDescuento = totalCompra - (totalCompra * (descuento + descuentoAdicional));

let mensaje = totalCompra > precioMaximoSinDescuento 
    ? mensajeDescuento 
    : (totalCompra > limiteSinDescuento ? "No hay descuento, pero tu compra es considerable." : mensajeSinDescuento);

// Imprimir resultados
console.log(`Cliente: ${nombreCliente} ${apellidoCliente}`);
console.log(`Edad: ${edadCliente}`);
console.log(`Cliente fiel: ${esClienteFiel ? "Sí" : "No"}`);
console.log(`Dirección de entrega: ${direccionEntrega}`);
console.log(`Método de pago: ${metodoPago}`);
console.log(`Cantidad de productos: ${cantidadProductos}`);
console.log(`Suma de los productos: $${sumaProductos}`);
console.log(`Total de la compra con descuento: $${totalConDescuento}`);
console.log(mensaje);
