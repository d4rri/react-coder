import './CartWidget.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'

const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)

    const quantity = getQuantity()

    return (
        <Link to='/Cart' className='CartWidget numero gap-3'>
            <img src='../images/carrito.png' className='img-fluid justify-content-start foto1' alt='CartWidget'/>
            { quantity }
            
        </Link>
    )
}

export default CartWidget