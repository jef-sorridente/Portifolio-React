import "./Projects.css";

// Icons
import { AiOutlineArrowsAlt, AiOutlineClose } from "react-icons/ai";

//Hooks
import { useState } from "react";

const Projects = () => {
  const arrayProjects = [
    {
      id: 1,
      title: "MiniBlog React",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec arcu eu elit venenatis suscipit feugiat nec neque." +
        "Nam nec urna dui. Phasellus id sagittis velit. Curabitur diam elit, sagittis placerat ultrices in, volutpat id dolor.",
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

  const handleExpand = (item) => {
    if (expandedItemId === item.id) {
      // Se o item já estiver expandido, clique novamente para fechá-lo
      setExpandedItemId(null);
    } else {
      // Se o item estiver fechado, clique para expandi-lo
      setExpandedItemId(item.id);
    }
  };

  return (
    <div className="projects" id="project">
      {arrayProjects.map((item) => (
        <div key={item.id} className={"projects-item"}>
          <div className="projects-container">
            <div className="projects-title">
              <h3>{item.title}</h3>
              <AiOutlineArrowsAlt onClick={() => handleExpand(item)} />
            </div>
            <div className="project-img">Imagem</div>
          </div>
          {expandedItemId === item.id && (
            <div className="background">
              <div className="project-details">
                <div className="project-details-title">
                  <h3>{item.title}</h3>
                  <AiOutlineClose onClick={() => handleExpand(item)} />
                </div>
                <div className="project-details-content">
                  <div className="project-image">
                    <p>IMG 1</p>
                    <p>IMG 2</p>
                    <p>IMG 3</p>
                  </div>
                  <div className="project-about">
                    <h3>Sobre o Projeto</h3>
                    <div className="project-about-text">
                      <p>{item.content}</p>
                    </div>
                    <h3>Linguagens Utilizadas</h3>
                    <div className="project-about-language">
                      <p>ICON</p>
                      <p>ICON</p>
                      <p>ICON</p>
                      <p>ICON</p>
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
