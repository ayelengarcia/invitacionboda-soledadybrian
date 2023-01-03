import { useState } from "react";
import proyectos from "../../proyectos.json"
import ProjectCard from "../components/ProjectCard";

const Projects = () => {

  const [productos, setProductos] = useState(proyectos);
  
  return (
    <div id="projects" className="projects row container-fluid m-0 py-3 pb-5">
      <h2 className="p-3 d-flex justify-content-center">MIS PROYECTOS</h2>
      <div className="d-flex justify-content-around flex-wrap gap-3 div-projects">
        {productos.map((producto) => {
          return (
            <ProjectCard
              key={producto.id}
              image={producto.image}
              title={producto.title}
              subtitle={producto.subtitle}
              description={producto.description}
              repo={producto.repo}
              web={producto.web}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;


{/* <div className="col-12 col-lg-5 project-container d-flex flex-column align-items-center py-5">
          <img
            src="src/assets/FineGames.png"
            alt="Vista Fine Games"
            className="w-75 floating"
          />
          <div className="col-9 d-flex flex-column">
            <h2 className="title-project">FINE GAMES</h2>
            <p className="subtitulo">
              HTML, CSS, JS, SASS, BOOSTRAP, TOASTYFY, ALERTSWEEET.
            </p>
            <p>
              Se trata de un simulador Ecomerce de una Store de juegos inspirada
              en algunas de las más conocidas. Se desarrolló con JavaScript
              vanilla, se utilizo tecnologia ajax, fetch y json para simular el
              intercambio backend y el consumo de appi. Se utilizó boostrap como
              framework para darle estilos, sin embargo la mayoria de modales y
              eventos fueron creadas con css puro y js.
            </p>
          </div>
          <div className="d-flex gap-5">
            <button className="btn-git p-2">
              <i className="bi bi-github pe-2"></i>Repositorio
            </button>
            <button className="btn-cv p-2">
              <i className="bi bi-globe2 pe-2"></i>Sitio Web
            </button>
          </div>
        </div>
        <div className="col-12 col-lg-5 project-container d-flex flex-column align-items-center py-5">
          <img
            src="src/assets/BrujuVG.png"
            alt="Vista Brujula Vegan"
            className="w-75 floating"
          />
          <div className="col-9 d-flex flex-column">
            <h2 className="title-project">BRUJULA VEGAN</h2>
            <p className="subtitulo">HTML, CSS, SASS, BOOSTRAP, SEO.</p>
            <p>
              Brujula Vegan es un Sitio Web de recetas veganas inspirado en un
              emprendimiento personal. Con el inicio de mi nuevo camino en el
              mundo del desarrollo surge la idea de usar este proyecto personal
              para darle vida a la creatividad y la dedicación que requería el
              de mi primer desarrollo web.
            </p>
          </div>
          <div className="d-flex gap-5">
            <button className="btn-git p-2">
              {" "}
              <i className="bi bi-github pe-2"></i>Repositorio
            </button>
            <button className="btn-cv p-2">
              <i className="bi bi-globe2 pe-2"></i>Sitio Web
            </button>
          </div>
        </div>
        <div className="col-12 col-lg-5 project-container d-flex flex-column align-items-center py-5">
          <img
            src="src/assets/PortfolioBrujula.png"
            alt="Vista Portafolio"
            className="w-75 floating"
          />
          <div className="col-9 d-flex flex-column">
            <h2 className="title-project">PORTFOLIO BRUJULA</h2>
            <p className="subtitulo">
              HTML, CSS, REACT JS, NODE JS, BOOSTRAP, ANIMACIONES
            </p>
            <p>
              Portafolio personal realizado con el entorno de Reacts JS. Se
              trabajó cada sección por componentes. Instalacion y utilización de
              boostrap como framwork . Más esilos y animaciones con css.
            </p>
          </div>
          <div className="d-flex gap-5">
            <button className="btn-git p-2">
              {" "}
              <i className="bi bi-github pe-2"></i>Repositorio
            </button>
            <button className="btn-cv p-2">
              <i className="bi bi-globe2 pe-2"></i>Sitio Web
            </button>
          </div>
        </div>
        <div className="col-12 col-lg-5 project-container d-flex flex-column align-items-center py-5">
          <img
            src="src/assets/Form-Validator.png"
            alt="Vista Form validator"
            className="w-75 floating pb-4"
          />
          <div className="col-9 d-flex flex-column">
            <h2 className="title-project">FORM VALIDATOR</h2>
            <p className="subtitulo">JAVA SCRIPT, HTML, CSS, BOOSTRAP.</p>
            <p>
              Mini challenge: Validación simple de formulario. Requiere
              completado de todos los campos, nombre de usuario, correo
              electrónico, contraseña y confirmación.
            </p>
          </div>
          <div className="d-flex gap-5">
            <button className="btn-git p-2">
              {" "}
              <i className="bi bi-github pe-2"></i>Repositorio
            </button>
            <button className="btn-cv p-2">
              <i className="bi bi-globe2 pe-2"></i>Sitio Web
            </button>
          </div>
        </div>
        <div className="col-12 col-lg-5 project-container d-flex flex-column align-items-center py-5">
          <img
            src="src/assets/Shoply.png"
            alt="Vista Shoply"
            className="w-75 floating"
          />
          <div className="col-9 d-flex flex-column">
            <h2 className="title-project">SHOPLY</h2>
            <p className="subtitulo">REACT JS, HTML, CSS, SASS, CHAKRA UI.</p>
            <p>
              Practica/challenge con React js. Creanción de components, brand,
              landing y styles con la libreria ChakraUI para preentrega React Js
              de CoderHouse. Uso de estados, JSON con API fake y recorrido de
              productos. Sitio responsivo
            </p>
          </div>
          <div className="d-flex gap-5">
            <button className="btn-git p-2">
              {" "}
              <i className="bi bi-github pe-2"></i>Repositorio
            </button>
            <button className="btn-cv p-2">
              <i className="bi bi-globe2 pe-2"></i>Sitio Web
            </button>
          </div>
        </div> */}
