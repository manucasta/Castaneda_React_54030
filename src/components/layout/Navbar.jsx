
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import "./Navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div>
        <ul className="navbarFilters">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dgzuk3rhi/image/upload/v1709048402/independiente/Escudo_del_Club_Atl%C3%A9tico_Independiente.svg_bdvele.png"
              style={{ width: "30px" }}
            />
          </Link>
          <Link to={"/category/futbol"}>
            <li>Hombres</li>
          </Link>
          <Link to="/category/mujer">
            <li>Mujeres</li>
          </Link>
          <Link to="/category/kids">
            <li>Niños</li>
          </Link>
          <Link to="/category/urbano">
            <li>Urbano</li>
          </Link>
          <Link to="/cart">
            <li>
              Carrito <PiShoppingCartSimpleFill color="white" />
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Navbar