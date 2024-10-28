import { Link } from "react-router-dom"
import Julia from '/src/assets/images/julinha.png';
import './Navbar.css'

function Navbar() {
  return (
    <nav className="container-navbar">
        <Link to="/sobre">Sobre</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projetos">Projetos</Link>
        <Link to="/contato">Contato</Link>
        <button className="button-navbar">Resume</button>
    </nav>
  )
}

export default Navbar