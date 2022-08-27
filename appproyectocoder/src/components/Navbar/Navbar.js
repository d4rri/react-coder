import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='Navbar'>
            <Link to='/'>
                ECOMMERCE DE CURSOS
            </Link>
            <div className="Categories">
                <NavLink to='/category/curso amateur' className="Option">Cursos Amateurs</NavLink>
                <NavLink to='/category/curso inicial' className="Option">Cursos Iniciales</NavLink>
                <NavLink to='/category/curso profesional' className="Option">Cursos Profesionales</NavLink>
            </div>
            <CartWidget />
        </nav>
        
    )
}

export default Navbar