import './ItemDetail.css'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import CartContext from '../../context/CartContext'
import NotificationContext from '../../notification/Notification'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

    const [quantityToAdd, setQuantityToAdd] = useState(0)
    const { addItem, getProductQuantity } = useContext(CartContext)
    const { setNotification } = useContext(NotificationContext)

    const handleOnAdd = (quantity) => {
        
        setQuantityToAdd(quantity)

        const productToAdd = {
            id, name, price, quantity
        }

        addItem(productToAdd)
        setNotification('success', `Se agregaron ${quantity} ${name}`)
    }

    const productQuantity = getProductQuantity(id)

    return (
        <article className="CardItem ContainerItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: {price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                {
                    quantityToAdd === 0 ? (
                        <ItemCount onAdd={handleOnAdd} stock={stock} initial={productQuantity}/>
                    ) : (
                        <Link to='/Cart'>Finalizar compra</Link>
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail