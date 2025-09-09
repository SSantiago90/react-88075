import CartWidget from './CartWidget'
import './NavBar.css'
export default function NavBar(){
  return (
    <nav className="nav-menu">
      <span className="nav-logo">miTienda</span>
      <ul className="nav-links">
        <li>Remeras</li>
        <li>Gorros</li>
        <li>Blablabla</li>
      </ul>
      <CartWidget/>
    </nav>
  )
}