import React, { useState, useEffect } from 'react';
import { projects } from '../../data/projects';
import style from "./style.module.css";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    if (currentPage < projects.length - 1) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  const handleKeyDown = event => {
    if (event.key === 'ArrowRight') {
      nextPage();
    } else if (event.key === 'ArrowLeft') {
      prevPage();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentPage]);

  return (
    <div className={style['projects-container']}>
      <h2 className='title1'>Meus Projetos</h2>
      <div className={style['projects-list']}>
        <div className={style['project-item']}>
          <h3 className= 'title2'>{projects[currentPage].name}</h3>
          <p className= 'paragrafTwo'>{projects[currentPage].description}</p>
          <div className={style['gapgap']}>
          <a
            href={projects[currentPage].url}
            target="_blank"
            rel="noopener noreferrer"
            className='paragraf'
          >
            Veja o Projeto
          </a>
          <a
              href={projects[currentPage].repo}
              target="_blank"
              rel="noopener noreferrer"
              className='paragraf'
            >
              Repositório GitHub
            </a>
            </div>
        </div>
      </div>
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