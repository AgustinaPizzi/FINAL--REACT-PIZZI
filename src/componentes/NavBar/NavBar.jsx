import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src="../media/img/logo.png" width={100} height={100}></img>
      </Link>
      <ul className="menu">
        <li>
          <Link className="menu-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/envio">
            Envios
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos/Bienestar">Bienestar</Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos/Fantasia">Fantasía</Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos/Clasicos">Clásicos</Link>
        </li>
        <Link className="menu-link" to="/cart">
          <CartWidget />
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
