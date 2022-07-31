import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='Navbar'>
            <Link to='/'>
                ECOMMERCE
            </Link>
            <div className="Categories">
                <Link to='/category/curso amateur' className="Option">Cursos Amateurs</Link>
                <Link to='/category/curso inicial' className="Option">Cursos Iniciales</Link>
                <Link to='/category/curso profesional' className="Option">Cursos Profesionales</Link>
            </div>
            <CartWidget />
        </nav>
        
    )
}

export default Navbar