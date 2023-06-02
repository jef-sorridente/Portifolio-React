import "./Navbar.css";

// Components
//import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="ul-about">
        <li>
          <p><a href="#about">Sobre Mim</a></p>
          <span className="line"></span>
        </li>
        <li>
          <p><a href="#project">Projetos</a></p>
          <span className="line"></span>
        </li>
        <li>
          <p><a href="#conections">Conexões</a></p>
          <span className="line"></span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
