import { skills } from "../../data/skills"
import  style from "./style.module.css"

const Skills = () =>{
    
  return (
    <div className={style['skills-container']}>
    
    {skills.map((category, index) => (
      
      <div key={index} className={style['category-container']}>
        <h2 className="title2">Competências</h2>
        <h3 className="title2">{category.category}</h3>
        <ul className={style['skills-list']}>
          {category.list.map((skill, idx) => (
            <li key={idx} className={style['skill-item']}>
              <img src={skill.img} alt={skill.name} className={style['skills-image']} />
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
  );
}

export default Skills;