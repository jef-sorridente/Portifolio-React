import "./Projects.css";

// Icons
import { AiOutlineArrowsAlt } from "react-icons/ai";

//Hooks
import { useState } from "react";

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const arrayProjects = [
    { id: 1, title: "MiniBlog React", content: "Conteúdo do item 1" },
    { id: 2, title: "Item 2", content: "Conteúdo do item 2" },
    { id: 3, title: "Item 3", content: "Conteúdo do item 3" },
    { id: 4, title: "Item 4", content: "Conteúdo do item 4" },
  ];

  const handleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };
  return (
    <div className="projects" id="project">
      <div className="projects-item">
        <div className="projects-container">
          <div className="projects-title">
            <h3>MiniBlog React</h3>
            <AiOutlineArrowsAlt />
          </div>
          <div className="project-img">Imagem</div>
        </div>
      </div>
      {arrayProjects.map((item, index) => (
        <div
          key={item.id}
          className={`item ${
            expandedIndex === index ? "projects-item" : "projects-item"
          }`}
        >
          <div className="projects-container">
            <div className="projects-title">
              <h3>{item.title}</h3>
              <AiOutlineArrowsAlt onClick={() => handleExpand(index)} />
            </div>
            {expandedIndex === index && <div>{item.content}</div>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
