import './Cart.css'
import {useContext } from 'react'
import CartContext from '../../context/CartContext'

const CartCarrito = ({ id, name, img, category, description, price, stock }) => {

    const {addItem, getQuantity} = useContext(CartContext)

    const quantity = getQuantity()

    const cart = addItem()

    return (
        <ul className="list-group mb-3 p-3">
        <li className="list-group-item d-flex justify-content-between lh-sm">
        <div>
            <h6 className="my-0">${cart.name || "Ingrese un producto"}</h6> 
            <small className="">Iva:${cart.category || "Ingrese un producto"}</small>  
        </div>
            <span className="">Precio del producto: $${cart.price || "Ingrese un producto"}</span> 
        </li>
        <li className="list-group-item d-flex justify-content-between">
            <p>Total: $${quantity || "Ingrese un producto"}</p>
        </li>          
        </ul>                            
        )}




export default CartCarrito