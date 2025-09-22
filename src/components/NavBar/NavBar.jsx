
import CartWidget from "./CartWidget"
import './NavBar.css';

function NavBar() {
  return (
    <nav className="nav-menu">
      <span className="nav-logo">miTienda</span>
      <ul className="nav-links">
        <li>
          Accesorios
        </li>
        <li>
          Electrónica
        </li>
        <li>
          Redes
        </li>
        <li>
          Almacenamiento
        </li>
      </ul>
      <span><CartWidget /></span>
    </nav>
  )
}

export default NavBar