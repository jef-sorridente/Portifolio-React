import "./Main.css";

import { AiOutlineArrowDown } from "react-icons/ai";

const Main = () => {
  return (
    <main className="main">
      <div>
        <h2 className="title">Olá, sou Jeferson Soares!</h2>

        <div className="btn-portfolio">
          <p>VEJA MEU PORTIFÓLIO</p>
          <span>
            <AiOutlineArrowDown />
          </span>
        </div>
      </div>
    </main>
  );
};

export default Main;
