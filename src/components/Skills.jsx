import { useState } from "react";
import Habilidades from "../../Habilidades.json";
import SkillCard from "./SkillCard";

const Skills = () => {
  const [skills, setProductos] = useState(Habilidades);

  return (
    <div id="skills" className="skills row container-fluid m-0 py-3">
      <h2 className="p-3 d-flex justify-content-center">MIS HABILIDADES</h2>

      <div className="d-flex justify-content-around flex-wrap gap-1">
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
    </div>
  );
};

export default Skills;

{
  /* <div className="cont-skill p-3 px-4 d-flex flex-column align-items-center justify-content-center my-2">
          <img src="src/assets/Html.png" alt="Html" className="w-100" />
          <span className="name-skill pt-2">HTML</span>
        </div>
        
        <div className="cont-skill p-3 px-4 d-flex flex-column align-items-center justify-content-center my-2">
          <img src="src/assets/Css3.png" alt="Css" className="w-100" />
          <span className="name-skill pt-2">CSS</span>
        </div>
        <div className="cont-skill p-3 d-flex flex-column align-items-center justify-content-center my-2">
          <img src="src/assets/Js.png" alt="JavaScript" className="w-50 pt-1" />
          <span className="name-skill pt-3">JavaScript</span>
        </div>
        <div className="cont-skill p-3 px-4 d-flex flex-column align-items-center my-2">
          <img src="src/assets/Github.png" alt="Github" className="w-100" />
          <span className="name-skill pt-2">Github</span>
        </div>
        <div className="cont-skill p-3 px-4 d-flex flex-column align-items-center my-2">
          <img src="src/assets/Git.png" alt="Git" className="w-100" />
          <span className="name-skill pt-2">GIT</span>
        </div>
        <div className="cont-skill p-3 px-4 d-flex flex-column align-items-center my-2">
          <img src="src/assets/Atom.png" alt="React" className="w-100" />
          <span className="name-skill pt-2">React</span>
        </div>
        <div className="cont-skill p-3 px-4 d-flex flex-column align-items-center my-2">
          <img src="src/assets/Sass.png" alt="SASS" className="w-100" />
          <span className="name-skill pt-2">SASS</span>
        </div>
        <div className="cont-skill p-3 px-4 d-flex flex-column align-items-center my-2">
          <img src="src/assets/Nodejs.png" alt="Node Js" className="w-100" />
          <span className="name-skill pt-2">Node Js</span>
        </div>
        <div className="cont-skill p-3 px-4 d-flex flex-column align-items-center my-2">
          <img src="src/assets/Figma.png" alt="Figma" className="w-100" />
          <span className="name-skill pt-2">Figma</span>
        </div>
        <div className="cont-skill p-3 px-4 d-flex flex-column align-items-center my-2">
          <img src="src/assets/Boost.png" alt="Boostrap" className="w-100" />
          <span className="name-skill pt-2">Boostrap</span>
        </div>
        <div className="cont-skill p-3 px-4 d-flex flex-column align-items-center my-2">
          <img src="src/assets/Chakra.png" alt="Chakra UI" className="w-75" />
          <span className="name-skill pt-2">ChakraUI</span>
        </div> */
}
