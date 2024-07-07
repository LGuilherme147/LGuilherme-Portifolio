import linkedin from "../../../assets/linkedin-icon.png";
import gmail from "../../../assets/gmail.png"
import instagram from "../../../assets/icons8-instagram-24.png";
import style from "./style.module.css"

const Footer = () =>{

    return(
        <footer className={style['footer-container']}>
        <section className={style['section-container']}>
            <h2 className="title2">Contato</h2>
            <div>
                <a href="https://www.linkedin.com/in/lu%C3%ADs-guilherme-333564288/" target="_blank">
                    <img src={linkedin} alt="LinkedIn" className="social-icon" />
                </a>
            </div>
            <div>
                <a href="https://www.instagram.com/luisguilherme1.1/" target="_blank">
                    <img src={instagram} alt="Instagram" className="social-icon" />
                </a>
            </div>
            <div>
                <a href="mailto:luisguilherme1288@gmail.com" target="_blank">
                    <img src={gmail} alt="Gmail" className="social-icon" />
                </a>
            </div>
        </section>
    </footer>
    )
}

export default Footer;