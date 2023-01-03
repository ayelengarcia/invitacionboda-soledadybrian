import React from 'react'

const SkillCard = ({img, alt, clase, skill}) => {
  return (
    <div className="cont-skill p-3 px-4 d-flex flex-column align-items-center justify-content-center my-2">
      <img src={img} alt={alt} className={clase} />
      <span className="name-skill pt-2">{skill}</span>
    </div>
  );
}

export default SkillCard

