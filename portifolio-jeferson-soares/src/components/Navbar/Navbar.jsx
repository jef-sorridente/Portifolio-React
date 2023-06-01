import "./Navbar.css";

// Components
//import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <h1 className="icon">JS</h1>
      <ul className="ul-about">
        <li>
          <p>Sobre Mim</p>
          <span className="line"></span>
        </li>
        <li>
          <p>Projetos</p>
          <span className="line"></span>
        </li>
        <li>
          <p>Conexões</p>
          <span className="line"></span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
