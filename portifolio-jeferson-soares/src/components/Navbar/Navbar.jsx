import "./Navbar.css";

// Components
//import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <h1 className="icon">JS</h1>
      <ul className="ul-about">
        <div>
          <li>Sobre Mim</li>
          <span className="pipe"></span>
        </div>
        <div>
          <li>Projetos</li>
          <span className="pipe"></span>
        </div>
        <div>
          <li>Conexões</li>
          <span className="pipe"></span>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
