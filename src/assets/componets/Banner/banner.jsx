import  fotoMinha1 from "../../../assets/user.png"
import  fotoMinha2 from "../../../assets/user2.png"
import  fotoMinha3 from "../../../assets/user3.png"
import  style from "./style.module.css"

const Banner = () => {
  return (
    <section className={style['banner-section']}>
      <div className={style['banner-content']}>
        <div className={style['banner-info']}>
          <h1 className="title2">Luis Guilherme Mendonça</h1>
          <h2 className="title3">DESENVOLVEDOR FRONT-END</h2>
          <p>
            <a href="https://drive.google.com/file/d/1KWYnTwfyBWp9WGP0Qx0oBjhTEHqHJaom/view" target="_blank" rel="noopener noreferrer" className="paragraf">Baixar CV</a> | 
            <a href="mailto:luisguilherme1288@gmail.com" className="paragraf"> Contato</a>
          </p>
        </div>
        <div className={style['banner-image-container']}>
          <img src={fotoMinha1} alt="Usuário" className={style['banner-image']} />
        </div>
      </div>
    </section>
  );
};

  export default Banner;