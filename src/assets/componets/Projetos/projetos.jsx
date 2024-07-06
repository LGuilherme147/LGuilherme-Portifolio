import React, { useState } from 'react';
import { projects } from '../../data/projects';
import style from "./style.module.css";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    if (currentPage < projects.length - 1) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className={style['projects-container']}>
      <ul className={style['projects-list']}>
        <h2 className="title1">Meus Projetos</h2>
        <li key={currentPage} className="project-item">
          <h3 className="title2">{projects[currentPage].name}</h3>
          <p className="paragrafTwo">{projects[currentPage].description}</p>
          <a href={projects[currentPage].url} target="_blank" rel="noopener noreferrer" className="paragraf">
            Veja o Projeto
          </a>
        </li>
      </ul>
      <div className={style['pagination']}>
        {currentPage > 0 && (
          <button onClick={prevPage} className={style['page-link']}>
            &larr;
          </button>
        )}
        {currentPage < projects.length - 1 && (
          <button onClick={nextPage} className={style['page-link']}>
            &rarr; 
          </button>
        )}
      </div>
    </div>
  );
};

export default Projects;