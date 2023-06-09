import "./Navbar.css";

// Components
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [hideMenu, setHideMenu] = useState(true);

  //Abre Menu
  const openMenuBar = () => {
    setHideMenu(true);
    document.getElementById("nav-top").classList.add("hide");
    document.getElementById("nav-top").classList.remove("appear");
    console.log("Clicado");
  };

  //Fecha Menu
  const closeMenuBar = () => {
    setHideMenu(false);
    document.getElementById("nav-top").classList.remove("hide");
    document.getElementById("nav-top").classList.add("appear");
    console.log("Clicado 2");
  };
  return (
    <div className="nav-top" id="nav-top">
      <div className="nav-top-icons">
        <h1 className="icon-top">JS</h1>
        <span className="pipe-top"></span>
        {hideMenu ? (
          <AiOutlineMenu className="icon-menu" onClick={closeMenuBar} />
        ) : (
          <AiOutlineClose className="icon-menu" onClick={openMenuBar} />
        )}
      </div>

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
