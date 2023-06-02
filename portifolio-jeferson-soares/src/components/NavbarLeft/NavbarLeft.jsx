import "./NavbarLeft.css";

// Icons
import {
  AiFillGithub,
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
  AiOutlineMail,
} from "react-icons/ai";

const NavbarLeft = () => {
  return (
    <nav className="navbar-left">
      <span className="pipe"></span>
      <ul className="ul-navbar-left">
        <li>
          <a href="https://github.com/jef-sorridente">
            <AiFillGithub />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jeferson-padilha-2735ab190/">
            <AiOutlineLinkedin />
          </a>
        </li>
        <li>
          <a href="https://api.whatsapp.com/send?phone=5551997675656&text=Ol%C3%A1,%20meu%20nome%20%C3%A9%20Jeferson%20Soares!%0AMe%20envie%20uma%20mensagem.">
            <AiOutlineWhatsApp />
          </a>
        </li>
        <li>
          <a href="#about">
            <AiOutlineMail />
          </a>
        </li>
      </ul>
      <span className="pipe"></span>
    </nav>
  );
};

export default NavbarLeft;
