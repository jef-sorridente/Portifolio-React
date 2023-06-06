import "./Navbar.css";

// Components
//import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="nav-top">
      <h1 className="icon-top">JS</h1>
      <span class="pipe-top"></span>
      <AiOutlineMenu className="icon-menu" />
      <nav className="nav">
        <ul className="ul-about">
          <li>
            <p>
              <a href="#about">Sobre Mim</a>
            </p>
            <span className="line"></span>
          </li>
          <li>
            <p>
              <a href="#project">Projetos</a>
            </p>
            <span className="line"></span>
          </li>
          <li>
            <p>
              <a href="#conections">Conexões</a>
            </p>
            <span className="line"></span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
