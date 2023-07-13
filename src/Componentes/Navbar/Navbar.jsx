import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import puntero from "../../img/iconwhite.png"
function Navb() {
  const setActiveClass = ({ isActive }) =>
    isActive ? "active ms-3" : "text-white ms-3 text-decoration-none ";
  return (
    <Navbar className="navStyle" expand="sm">
      <div className="container">
        <div className="img">
          <img src={puntero}  alt=" error en la imagen " />
        </div>
        <div className="">
        <NavLink className={setActiveClass} to="/">
          Home
        </NavLink>
        <NavLink className={setActiveClass} to="/pokemones">
          Pokemones
        </NavLink>
        </div>
      </div>
    </Navbar>
  );
}

export default Navb;
