btnSubmit.addEventListener("mousemove", () => {
    btnSubmit.title = "Haga clic para enviar sus datos"
})

btnSubmit.addEventListener("mouseover", () => {
    btnSubmit.className = "w-100 btn-lg bg-dark"
})

btnSubmit.addEventListener("mouseout", () => {
    btnSubmit.className = "w-100 btn btn-lg btn-primary"
})

inputEmail.addEventListener("keydown", (e) => {
    console.log(e.key)
    })
inputPassword.addEventListener("keydown", (e) => {
    console.log(e.key)
})

inputEmail.addEventListener("email", () => {
    console.clear()
    console.log(inputEmail.value)
 })

inputPassword.addEventListener("password", () => {
    console.clear()
    console.log(inputPassword.value)
 })

function alertar(mensaje) {
    Swal.fire({
        title: 'Has iniciado sesion!',
        text: mensaje,
        icon: 'success',
        confirmButtonText: 'Aceptar'
    })
}
     
document.addEventListener("submit", (e) => {
    e.preventDefault()
    guardarDatosDeUsr()
    alertar("Formulario enviado.")
})
    
function guardarDatosDeUsr() {    
    const datosDeUsr = {email: inputEmail.value,
                        password: inputPassword.value, 
    }
    let str = JSON.stringify(datosDeUsr)
    localStorage.setItem("datosDeUsr", str)
}

function recuperoDatosDeUsr() {
     if (localStorage.getItem("datosDeUsr")) {
         const datosDeUsr = JSON.parse(localStorage.getItem("datosDeUsr"))
         inputEmail.value = datosDeUsr.email
         inputPassword.value = datosDeUsr.password         
     } else {
       alertar2("Por favor rellena el formulario")
     }
}

function alertar2(mensaje) {
    Swal.fire({
        title: 'Atención!',
        text: mensaje,
        icon: 'info',
        confirmButtonText: 'Aceptar'
    })
}

// const d = document;

// d.addEventListener('submit', async e => {
//     e.preventDefault();
//     const email = d.querySelector("#floatingInput").value;
//     const pass = d.querySelector("#floatingPassword").value;
//     console.log(email,pass);
//     try {
//         let resp = await fetch ('URL', {
//             method:'POST',
//             headers: {
//                 'Content-Type':'application/json'
//             },
//             body:JSON.stringify ({
//                 email,
//                 pass
//             })
//         });
//         let  json = await resp.json();
//         console.log(json);

//         if(!resp.ok){
//             throw new error(resp.statusText);
//             }

//     }catch(error){
//         let mensaje = error.statusText || 'Error'
//         console.log(mensaje)
//     }
// })


recuperoDatosDeUsr()





 


