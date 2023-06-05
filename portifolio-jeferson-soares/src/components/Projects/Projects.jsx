import "./Projects.css";

// Icons
import { AiOutlineArrowsAlt } from "react-icons/ai";

//Hooks
import { useState } from "react";

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

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

  const handleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };
  return (
    <div className="projects" id="project">
      {arrayProjects.map((item, index) => (
        <div
          key={item.id}
          className={`item ${
            expandedIndex === index ? "projects-item-expanded" : "projects-item"
          }`}
        >
          <div className="projects-container">
            <div className="projects-title">
              <h3>{item.title}</h3>
              <AiOutlineArrowsAlt onClick={() => handleExpand(index)} />
            </div>
            <div className="project-img">Imagem</div>
            {expandedIndex === index && (
              <>
                <div className="teste">{item.subtitle}</div>
                <h3>Sobre o Projeto</h3>
                <div>
                  <p>{item.content}</p>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
