import { useState } from "react";
import Modal from "../components/Modal";

const about = () => {

  const [statusModal, changeStatus] = useState(false);
  
  return (
    <div id="about" className='row container-fluid d-flex justify-content-center fondo-presentacion m-0'>
      <div className='col-12 col-lg-3 d-flex justify-content-center align-items-center mt-2'>
        <img src="src/assets/Brujula.png" alt="Avatar" className='w-50 d-lg-none floating' />
        <img src="src/assets/Brujula.png" alt="Ilustracion Brujula" className='avatar-bruju-lg d-none d-lg-flex floating'/>
      </div>
      <div className=" col-12 col-lg-6 presentacion d-flex flex-column align-items-center mt-4 px-1">  
        <h2>¡Hola!</h2>
        <h1>SOY <span className='nombre'>AYELEN GARCÍA,</span></h1>
        <h2 className='jr-front'>JR FRONTEND DEVELOPER</h2>
        <p className='p-4 pb-0'>
          Me dicen Aye o Bruju, <br /> Quienes me conocen saben que soy una persona muy <span>resolutiva y practica!.</span> Soy espontanea, intuitiva, creativa y me
          encanta el mundo del gaming, de donde viene mi <span>pasion por el mundo de
          la tecnología y el diseño de interfaz!</span> <br /> Actualmente me encuentro
          terminando la carrera de Fronted Dev en <span>CoderHouse.</span>
        </p>
      </div>
      <div className='col-lg-3 m-0 p-0'></div>
      <div className='cont-btn col-12 d-flex justify-content-center px-0' onClick={()=> changeStatus(!statusModal)}><button className='col-5 col-lg-2 btn-cv p-1 '><i className="bi bi-download pe-2"></i>Descargar CV</button></div>
      <Modal estado={statusModal} cambiarEstado={changeStatus} />
    </div>
  );
}

export default about