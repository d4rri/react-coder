import './Checkout.css'
import { useState, useContext } from "react"
import CartContext from "../../context/CartContext"
import { db } from "../../services/firebase"
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from "firebase/firestore"
import { useNavigate } from 'react-router-dom'

const Checkout = () => {    

    const [isLoading, setIsLoading] = useState(false)
    const [orderCreated, setOrderCreated] = useState(false)
    const { cart, getQuantity, getTotal, clearCart } = useContext(CartContext) 

    const navigate = useNavigate()
    const totalQuantity = getQuantity()
    const total = getTotal()

    
    const [form, setForm] = useState()

    const handleInputChange = (event) => {
        setForm({
            ...form,
            [event.target.name] : event.target.value
        })
    }

    const createOrder = async () => {
        setIsLoading(true)
        try {
            const objOrder = {
                buyer: {
                    firstName: form.firstName,
                    lastName: form.lastName,
                    phone: form.phone,
                    address: form.address
                },
                items: cart,
                totalQuantity,
                total,
                date: new Date()
            }
    
            const ids = cart.map(prod => prod.id)
    
            const productsRef = collection(db, 'products')
    
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
            
            const { docs } = productsAddedFromFirestore
    
            const outOfStock = []
    
            const batch = writeBatch(db)
    
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity
    
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
    
            if(outOfStock.length === 0) {
                await batch.commit()
    
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)
    
                console.log(`El id de su orden es: ${orderAdded.id}`)
                clearCart()
                setOrderCreated(true)
                setTimeout(() => {
                    navigate('/')
                }, 3000)
            } else {
                console.log('Hay productos que estan fuera de stock')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    if(isLoading) {
        return <h1>Se esta generando tu orden...</h1>
    }

    if(orderCreated) {
        return <h1>La orden fue creada correctamente, sera redirigido al listado de productos en 3 segundos</h1>
    }

    return (
        <>  
        {
                <div className="container col-xxl-10 col-xxl-8 px-4 py-5 galeria2 carrusel">
                    <div className="row align-items-center g-lg-5 py-5">
                        <div className="col-lg-7 text-center text-lg-start">
                            <h1 className="display-4 fw-bold lh-1 mb-3 foto2">Regístrate en nuestra plataforma</h1>
                            <p className="col-lg-10 fs-4 foto2">Por favor rellena los siguientes campos para finalizar su compra. </p>
                        </div>
                    <div className="col-md-10 mx-auto col-lg-5 form2 foto6">
                        <form className="p-4 p-md-5 rounded-3">
                            <div className="form-floating mb-3">
                                <input type="text" name="firstName" onChange={handleInputChange} placeholder="Ingresar nombre"></input>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" name="lastName" onChange={handleInputChange} placeholder="Ingresar apellido"></input>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" name="phone" onChange={handleInputChange} placeholder="Ingresar teléfono"></input>
                            </div>
                                <div className="form-floating mb-3">
                                    <input type="text" name="address" onChange={handleInputChange} placeholder="Ingresar dirección"></input>
                                </div>
                        </form>
                    </div>
                    <button className="form3" onClick={createOrder}>Generar Orden</button>
                    </div>
                </div>
                }
        </>
    )
}

export default Checkout