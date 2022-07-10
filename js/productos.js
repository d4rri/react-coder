class Producto {
    constructor(nombre, precio, iva) {
        this.nombre = nombre
        this.precio = precio
        this.iva = iva
    }
        precioFinal(){
            return parseFloat((this.precio * iva).toFixed(2))
        }
}

function creoID() {
    return parseInt(Math.random() * 10000)
}

function agregarProducto() {
    let nombre = prompt("ingrese el nombre del producto a agregar:")
    let precio = prompt("ingrese el precio del producto a agregar:")
    productos.push(new Producto(nombre, precio, iva))
    cargarProductos() 
}



function generadorAutomatico() {
    productos.push(new Producto("Curso auto-maquillaje", 8000, iva))
     productos.push(new Producto("Curso de pieles", 6000, iva))
     productos.push(new Producto("Curso de ojos", 4000, iva))
     productos.push(new Producto("Curso de delineados", 5000, iva))
     productos.push(new Producto("Curso pieles glow", 4000, iva))
     productos.push(new Producto("Curso maquillaje profesional", 10000, iva)) 
 }

function buscarProducto() {        
            let resultado = productos.find( p => p.nombre == prod)               
            console.log(resultado);

}

function calcularPrecioCuotas(precio, cuotas) {
    return (parseInt(precio / cuotas).toFixed(2));
}

function cargarProductos() {
    for (producto of productos) {
        const fila =`<tr>
                        <td>${producto.nombre}</td>
                        <td>${producto.precio}</td>
                        <td>${producto.precioFinal()}</td>
                    <tr>`
    }
}




