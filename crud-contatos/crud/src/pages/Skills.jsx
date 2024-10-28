import React from 'react'
import Figma from '/src/assets/images/julinha.png';
import JS from '/src/assets/images/figma.png';
import Git from '/src/assets/images/js.png';
import ReactJs from '/src/assets/images/git.png';

function Skills() {
    return (
      <div>
        <h1 className='skills-text'>Minhas</h1>
        <h1 className='skillsText-bold'>Skills</h1>
        <div>
          <img src={Figma} alt="Skills representation" />
          <img src={JS} alt="Skills representation" />
          <img src={Git} alt="Skills representation" />
          <img src={ReactJs} alt="Skills representation" />
        </div>
      </div>
    );
  }

export default Skills
