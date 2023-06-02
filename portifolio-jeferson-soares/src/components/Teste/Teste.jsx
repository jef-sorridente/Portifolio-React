import "./Teste.css";

import { useState } from "react";

const Teste = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const arrayData = [
      { id: 1, title: 'Item 1', content: 'Conteúdo do item 1' },
      { id: 2, title: 'Item 2', content: 'Conteúdo do item 2' },
      { id: 3, title: 'Item 3', content: 'Conteúdo do item 3' },
      { id: 4, title: 'Item 4', content: 'Conteúdo do item 4' }
    ];
  
    const handleExpand = (index) => {
      setExpandedIndex(index === expandedIndex ? null : index);
    };
  return (
    <div className="teste">
    {arrayData.map((item, index) => (
      <div
        key={item.id}
        className={`item ${expandedIndex === index ? 'expanded' : 'no-expanded'}`}
      >
        <button onClick={() => handleExpand(index)}>Expandir</button>
        <div>{item.title}</div>
        {expandedIndex === index && <div>{item.content}</div>}
      </div>
    ))}
  </div>
  );
};

export default Teste;
