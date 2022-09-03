import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getProductsId } from '../../services/firebase/firestore'
import { useAsync } from '../../hooks/useAsync'

const ItemDetailContainer = () => {

    const { productId } = useParams()

    const getProductsFromFirestore = () => getProductsId(productId)

    const { data, error, isLoading } = useAsync(getProductsFromFirestore, [productId])

    if(isLoading) {
        return <h1>Cargando...</h1>
    }

    if(error) {
        return <h1>Hubo un error</h1>
    }

    return(
        <div className='ItemDetailContainer' >
            {isLoading ? <h1>Cargando...</h1> : <ItemDetail {...data} />}
        </div>
    )
}

export default ItemDetailContainer