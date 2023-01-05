import { useState } from "react";
import Habilidades from "../../Habilidades.json";
import SkillCard from "./SkillCard";
import {Skills} from "./Skills.styled"

const skills = () => {
  const [skills, setProductos] = useState(Habilidades);

  return (
    <Skills id="skills" className="row container-fluid m-0 py-3">
      <h2 className="p-3 d-flex justify-content-center title">MIS HABILIDADES</h2>

      <div className="col-12 d-flex justify-content-around flex-wrap gap-2">
        {skills.map((card) => {
          return (
            <SkillCard
              key={card.id}
              img={card.img}
              alt={card.alt}
              clase={card.clase}
              skill={card.skill}
            />
          );
        })}
      </div>

      <div className="row d-flex justify-content-center align-items-center p-4 pb-1 gap-2">
        <p className="col-12 col-lg-5 pt-3">
          Me gusta conocer y aprender nuevas herramientas y habilidades
          continuamente. Siempre actualizo mis prácticas en mi repositorio, te
          invito a verlo!
        </p>
        <a href="https://github.com/ayelengarcia/" target="_blank" className="col-10 col-lg-3 col-xl-2">
          <button className=" btn-git p-1 px-2 mb-2">
            <i className="bi bi-github pe-2"></i>Github-Profile
          </button>
        </a>
      </div>
    </Skills>
  );
};

export default skills;
