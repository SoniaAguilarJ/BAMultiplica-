// Función para mostrar el mensaje de compra
function comprarProducto(nombre, precio) {
// Muestra el mensaje de compra
const mensajeCompra = document.getElementById('mensaje-compra');
const productoComprado = document.getElementById('producto-comprado');

// Actualiza el contenido del mensaje
productoComprado.textContent = `${nombre} por $${precio}`;
mensajeCompra.style.display = 'block';
}
 
