import './nav.css'
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {

    const text = 'hice click'

    const handleClick = () => {
        console.log(text)
    }

    return (
        <nav className="container text-center ">
            <div>
                <h1>Cursos</h1>
            </div>
            <div className="d-flex justify-content-center nav gap-3">
                <Button handleClick={handleClick} color='blue' className="p-2">Curso auto-maquillaje</Button>
                <Button handleClick={handleClick} color='blue' className="p-2">Curso de pieles</Button>
                <Button handleClick={handleClick} color='blue' className="p-2">Curso profesional</Button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar