import "./NavbarLeft.css";

// Icons
import {AiFillGithub, AiOutlineLinkedin, AiOutlineWhatsApp, AiOutlineMail} from "react-icons/ai"


const NavbarLeft = () => {
  return (
    <nav className="navbar-left">
      <span className="pipe"></span>
      <ul className="ul-navbar-left">
        <li>
          <a href="#about"><AiFillGithub /></a>
        </li>
        <li>
          <a href="#about"><AiOutlineLinkedin /></a>
        </li>
        <li>
          <a href="#about"><AiOutlineWhatsApp /></a>
        </li>
        <li>
          <a href="#about"><AiOutlineMail /></a>
        </li>
      </ul>
      <span className="pipe"></span>
    </nav>
  );
};

export default NavbarLeft;
