import "./Projects.css";

import { DiReact } from "react-icons/di";
// Icons
import { AiOutlineArrowsAlt, AiOutlineClose } from "react-icons/ai";

//Hooks
import { useState } from "react";

// Imagens
import miniblog_1 from "../../Images/MiniBlog-1.jpg";
import miniblog_3 from "../../Images/MiniBlog-2.jpg";
import miniblog_2 from "../../Images/MiniBlog-3.jpg";

const Projects = () => {
  const arrayProjects = [
    {
      id: 1,
      title: "MiniBlog React",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec arcu eu elit venenatis suscipit feugiat nec neque." +
        "Nam nec urna dui. Phasellus id sagittis velit. Curabitur diam elit, sagittis placerat ultrices in, volutpat id dolor.",
      imagem1: miniblog_1,
      imagem2: miniblog_2,
      imagem3: miniblog_3,
    },
    {
      id: 2,
      title: "Projeto 2",

      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec arcu eu elit venenatis suscipit feugiat nec neque." +
        "Nam nec urna dui. Phasellus id sagittis velit. Curabitur diam elit, sagittis placerat ultrices in, volutpat id dolor.",
    },
    {
      id: 3,
      title: "Projeto 3",

      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec arcu eu elit venenatis suscipit feugiat nec neque." +
        "Nam nec urna dui. Phasellus id sagittis velit. Curabitur diam elit, sagittis placerat ultrices in, volutpat id dolor.",
    },
    {
      id: 4,
      title: "Projeto 4",

      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec arcu eu elit venenatis suscipit feugiat nec neque." +
        "Nam nec urna dui. Phasellus id sagittis velit. Curabitur diam elit, sagittis placerat ultrices in, volutpat id dolor.",
    },
    {
      id: 5,
      title: "Projeto 5",

      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec arcu eu elit venenatis suscipit feugiat nec neque." +
        "Nam nec urna dui. Phasellus id sagittis velit. Curabitur diam elit, sagittis placerat ultrices in, volutpat id dolor.",
    },
    {
      id: 6,
      title: "Projeto 6",

      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec arcu eu elit venenatis suscipit feugiat nec neque." +
        "Nam nec urna dui. Phasellus id sagittis velit. Curabitur diam elit, sagittis placerat ultrices in, volutpat id dolor.",
    },
  ];

  const [expandedItemId, setExpandedItemId] = useState(null);
  const [isBackgroundTeste, setIsBackgroundTeste] = useState(false);

  const handleOpenModal = (item) => {
    setExpandedItemId(item.id);
    document.body.classList.add("modal-open");
    setIsBackgroundTeste(true);
  };

  const handleCloseModal = () => {
    setIsBackgroundTeste(false);
    document.body.classList.remove("modal-open");
  };

  return (
    <div className="projects" id="project">
      {arrayProjects.map((item) => (
        <div key={item.id} className={"projects-item"}>
          <div className="projects-container">
            <div className="projects-title">
              <h3>{item.title}</h3>
              <AiOutlineArrowsAlt onClick={() => handleOpenModal(item)} />
            </div>
            <img src={item.imagem1} className="project-image-title"></img>
          </div>
          {expandedItemId === item.id && (
            <div
              className={isBackgroundTeste ? "background" : "background-close"}
            >
              <div className="project-details">
                <div className="project-details-title">
                  <h3>{item.title}</h3>
                  <AiOutlineClose onClick={() => handleCloseModal()} />
                </div>
                <div className="project-details-content">
                  <div className="project-image">
                    <img src={item.imagem1} alt="" />
                    <img src={item.imagem2} alt="" />
                    <img src={item.imagem3} alt="" />
                  </div>
                  <div className="project-about">
                    <h3>Sobre o Projeto</h3>
                    <div className="project-about-text">
                      <p>{item.content}</p>
                    </div>
                    <h3>Linguagens Utilizadas</h3>
                    <div className="project-about-language">
                      <span>
                        <svg
                          width="66"
                          height="55"
                          viewBox="0 0 66 55"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M56 55C56.5523 55 57 54.5523 57 54C57 53.4477 56.5523 53 56 53L56 55ZM56 53L1.96827e-10 53L-1.96827e-10 55L56 55L56 53Z"
                            fill="#FFEE32"
                          />
                          <path
                            d="M2 18C2 17.4477 1.55228 17 1 17C0.447715 17 0 17.4477 0 18H2ZM0 18L0 53H2L2 18H0Z"
                            fill="#FFEE32"
                          />
                          <DiReact />
                          <path
                            d="M10 0C9.44772 -1.08705e-10 9 0.447715 9 1C9 1.55228 9.44772 2 10 2L10 0ZM10 2L66 2L66 1.10224e-08L10 0L10 2Z"
                            fill="#FFEE32"
                          />
                          <path
                            d="M64 37C64 37.5523 64.4477 38 65 38C65.5523 38 66 37.5523 66 37H64ZM66 37V2H64L64 37H66Z"
                            fill="#FFEE32"
                          />
                        </svg>
                      </span>
                      <span>
                        <svg
                          width="66"
                          height="55"
                          viewBox="0 0 66 55"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M56 55C56.5523 55 57 54.5523 57 54C57 53.4477 56.5523 53 56 53L56 55ZM56 53L1.96827e-10 53L-1.96827e-10 55L56 55L56 53Z"
                            fill="#FFEE32"
                          />
                          <path
                            d="M2 18C2 17.4477 1.55228 17 1 17C0.447715 17 0 17.4477 0 18H2ZM0 18L0 53H2L2 18H0Z"
                            fill="#FFEE32"
                          />

                          <path
                            d="M10 0C9.44772 -1.08705e-10 9 0.447715 9 1C9 1.55228 9.44772 2 10 2L10 0ZM10 2L66 2L66 1.10224e-08L10 0L10 2Z"
                            fill="#FFEE32"
                          />
                          <path
                            d="M64 37C64 37.5523 64.4477 38 65 38C65.5523 38 66 37.5523 66 37H64ZM66 37V2H64L64 37H66Z"
                            fill="#FFEE32"
                          />
                        </svg>
                      </span>
                      <span>
                        <svg
                          width="66"
                          height="55"
                          viewBox="0 0 66 55"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M56 55C56.5523 55 57 54.5523 57 54C57 53.4477 56.5523 53 56 53L56 55ZM56 53L1.96827e-10 53L-1.96827e-10 55L56 55L56 53Z"
                            fill="#FFEE32"
                          />
                          <path
                            d="M2 18C2 17.4477 1.55228 17 1 17C0.447715 17 0 17.4477 0 18H2ZM0 18L0 53H2L2 18H0Z"
                            fill="#FFEE32"
                          />
                          <path
                            d="M10 0C9.44772 -1.08705e-10 9 0.447715 9 1C9 1.55228 9.44772 2 10 2L10 0ZM10 2L66 2L66 1.10224e-08L10 0L10 2Z"
                            fill="#FFEE32"
                          />
                          <path
                            d="M64 37C64 37.5523 64.4477 38 65 38C65.5523 38 66 37.5523 66 37H64ZM66 37V2H64L64 37H66Z"
                            fill="#FFEE32"
                          />
                        </svg>
                      </span>
                      <span>
                        <svg
                          width="66"
                          height="55"
                          viewBox="0 0 66 55"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M56 55C56.5523 55 57 54.5523 57 54C57 53.4477 56.5523 53 56 53L56 55ZM56 53L1.96827e-10 53L-1.96827e-10 55L56 55L56 53Z"
                            fill="#FFEE32"
                          />
                          <path
                            d="M2 18C2 17.4477 1.55228 17 1 17C0.447715 17 0 17.4477 0 18H2ZM0 18L0 53H2L2 18H0Z"
                            fill="#FFEE32"
                          />
                          <path
                            d="M10 0C9.44772 -1.08705e-10 9 0.447715 9 1C9 1.55228 9.44772 2 10 2L10 0ZM10 2L66 2L66 1.10224e-08L10 0L10 2Z"
                            fill="#FFEE32"
                          />
                          <path
                            d="M64 37C64 37.5523 64.4477 38 65 38C65.5523 38 66 37.5523 66 37H64ZM66 37V2H64L64 37H66Z"
                            fill="#FFEE32"
                          />
                        </svg>
                      </span>
                    </div>
                    <h3>Acesse esse projeto!</h3>
                    <div className="project-about-link">
                      <a href="">link-do-projeto</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Projects;
