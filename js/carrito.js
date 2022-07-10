let btnAgregar1 = document.querySelector("#carrito1")
let btnAgregar2 = document.querySelector("#carrito2")
let btnAgregar3 = document.querySelector("#carrito3")
let btnAgregar4 = document.querySelector("#carrito4")
let btnAgregar5 = document.querySelector("#carrito5")
let btnAgregar6 = document.querySelector("#carrito6")


    
btnAgregar1.addEventListener("click", () => {
    llenarCarrito.push(new Producto("Curso de auto-maquillaje", 4000, iva,))
    localStorage.setItem("carrito", JSON.stringify(llenarCarrito))
    alertar("Se agrego el producto al carrito.")
    })


btnAgregar2.addEventListener("click", () => {
    llenarCarrito.push(new Producto("Curso de pieles", 6000, iva,))
    localStorage.setItem("carrito", JSON.stringify(llenarCarrito))
    alertar("Se agrego el producto al carrito.")
    })
        
btnAgregar3.addEventListener("click", () => {
    llenarCarrito.push(new Producto("Curso de ojos", 4000, iva,))
    localStorage.setItem("carrito", JSON.stringify(llenarCarrito))
    alertar("Se agrego el producto al carrito.")
    })
    
btnAgregar4.addEventListener("click", () => {
    llenarCarrito.push(new Producto("Curso de delineados", 5000, iva))
    localStorage.setItem("carrito", JSON.stringify(llenarCarrito))
    alertar("Se agrego el producto al carrito.")
    })
    
btnAgregar5.addEventListener("click", () => {
    llenarCarrito.push(new Producto("Curso pieles glow", 4000, iva))
    localStorage.setItem("carrito", JSON.stringify(llenarCarrito))
    alertar("Se agrego el producto al carrito.")
    })
    
btnAgregar6.addEventListener("click", () => {
    llenarCarrito.push(new Producto("Curso maquillaje profesional", 10000, iva))
    localStorage.setItem("carrito", JSON.stringify(llenarCarrito))
    alertar("Se agrego el producto al carrito.")
    })

btnVer.addEventListener("click", () => {
    location.href = "../pages/totalproductos.html"
})

function alertar(mensaje) {
    Swal.fire({
        title: 'Producto agregado!',
        text: mensaje,
        icon: 'success',
        confirmButtonText: 'Aceptar'
    })
}


