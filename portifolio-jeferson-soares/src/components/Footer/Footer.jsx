import "./Footer.css";

// Icons
import {
  AiFillGithub,
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
  AiOutlineMail,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer" id="conections">
      <div className="conections">
        <h2>Conexões</h2>
        <div className="conections-item">
          <div>
            <p>Linkedin</p>
            <AiOutlineLinkedin />
          </div>
          <div>
            <p>Whats</p>
            <AiOutlineWhatsApp />
          </div>
          <div>
            <p>GitJub</p>
            <AiFillGithub />
          </div>
          <div>
            <p>E-mail</p>
            <AiOutlineMail />
          </div>
        </div>
      </div>
      <div className="thanks">
        <h2>Obrigado pela Visita!</h2>
      </div>
    </div>
  );
};

export default Footer;
