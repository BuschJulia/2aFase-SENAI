import React from 'react'
import Figma from '/src/assets/images/figma.png';
import JS from '/src/assets/images/js.png';
import Git from '/src/assets/images/git.png';
import ReactJs from '/src/assets/images/react.png';
import './Skills.css'

function Skills() {
  return (
    <div>
      <div className='container-skills'>
        <div className='cabecalho-skills'>
          <h1 className='skills-text'>Minhas</h1>
          <h1 className='skillsText-bold'>Skills</h1>
        </div>
        <div className='skills'>
          <img src={Figma} alt="Skills representation" />
          <img src={JS} alt="Skills representation" />
          <img src={Git} alt="Skills representation" />
          <img src={ReactJs} alt="Skills representation" />
        </div>
      </div>
    </div>
  );
}

export default Skills
