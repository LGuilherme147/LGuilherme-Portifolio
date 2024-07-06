import  style from "./style.module.css"

 const Lorem = () =>{
    return(
        <div className={style['div-lorem']}>
          <div className={style['title-lorem']}>
          <h2 className="title1">Sobre Mim</h2>
          </div>
          <div className={style['div-plorem']}>
            <p className="paragrafTwo">
              Estudante de Full-stack em fase de conclusão, com forte conhecimento em HTML, CSS, JavaScript, Node.js e 
              React. Experiência em projetos acadêmicos, integrando frontend e backend para criar aplicações web 
              dinâmicas. Proativo, com rápida adaptação a novas tecnologias, e habilidades em trabalho em equipe e 
              resolução de problemas. Familiaridade com metodologias ágeis e melhores práticas de desenvolvimento. 
              Buscando iniciar a carreira em um ambiente colaborativo e inovador.
            </p>
            </div>
          </div>
    );
};

export default Lorem;