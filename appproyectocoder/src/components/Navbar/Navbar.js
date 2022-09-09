import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { getNavbar } from '../../services/firebase/firestore'
import { useAsync } from '../../hooks/useAsync'



const Navbar = () => {

    const {categories} = getNavbar()

    const getProductsFromFirestore = () => getNavbar(categories)

    const {data, error, isLoading} = useAsync(getProductsFromFirestore, [categories])

    if(isLoading) {
        return <h1>Cargando...</h1>
    }

    if(error) {
        return <h1>Hubo un error</h1>
    }

    return (
        <nav className='Navbar'>
            <Link style={{fontSize: '30px'}} to='/'>
                ECOMMERCE DE CURSOS
            </Link>
            <div className="Categories">
                {data.map((category)=> (
                    <Link style={{margin: '0px 50px'}} key={category.id} to={category.path}>{category.name}</Link>
                ))}
            </div>
            <CartWidget />
        </nav>
        
    )
}

export default Navbar