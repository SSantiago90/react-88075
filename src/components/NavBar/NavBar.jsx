import { Link } from 'react-router'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
export default function NavBar(){
  return (
    <nav className="nav-menu">
      <Link to="/">
        <span className="nav-logo">miTienda</span>
      </Link>
      <ul className="nav-links">
        <Link to="/category/clothing">
          <li>Ropa</li>
        </Link>
        <Link to="/category/electronics">
          <li>Electrónica</li>
        </Link>
        <Link to="/category/home">
          <li>Hogar</li>
        </Link>
      </ul>
      <CartWidget/>
    </nav>
  )
}