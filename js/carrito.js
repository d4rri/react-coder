let btnAgregar1 = document.querySelector("#carrito1")
let btnAgregar2 = document.querySelector("#carrito2")
let btnAgregar3 = document.querySelector("#carrito3")
let btnAgregar4 = document.querySelector("#carrito4")
let btnAgregar5 = document.querySelector("#carrito5")
let btnAgregar6 = document.querySelector("#carrito6")

const recuperarJSON = (URL) => {   
    let filas = "";
    let prod="";
    let total = "";
    let preciof = "";
    let texto =`<p class="btn form3 text-light" type="button">Precio final de mi compra:`
    debugger
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            contenidoJSON = data
            contenidoJSON.forEach(prod => {; 
                total=new Producto(prod.producto,prod.precio,prod.iva);
                filas += `<ul class="list-group mb-3">
                        <li class="list-group-item d-flex justify-content-between lh-sm">
                        <div>
                            <h6 class="my-0">${prod.producto || "el producto no existe"}</h6>
                            <small class="">${prod.iva || "el iva no existe"}</small>
                        </div>
                            <span class="">${prod.precio || "el precio no existe"}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between">
                        <p>Total del producto (Pesos Argentinos):</p>
                    <strong>${total.precioFinal() || "el precio final no existe"}</strong>
                    </li>
                    </ul>`
                    preciof = (parseInt(preciof + total.precioFinal()));
                    document.getElementById('verCompra').innerHTML = filas;
                    document.getElementById('verPrecioFinal').innerHTML = texto + preciof;                                                       
            })
        })
    }
    
btnAgregar1.addEventListener("click", () => {
    recuperarJSON(URL)
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


