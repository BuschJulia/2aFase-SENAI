import React from 'react';
import Julia2 from '/src/assets/images/julinha2.png';
import './Sobre.css';

function Sobre() {
    return (
        <div>
            <div className='container-about'>  
                <div className="content">
                    <img src={Julia2} alt="Mini Juju" className="profile-image" />
                    <div className="container-texts">
                        <div className="sobre-title">
                            <h1 className='sobre-text'>Sobre</h1>
                            <h1 className='sobreText-bold'>Mim</h1>
                        </div>
                        <p>Olá! Sou a Júlia, tenho 17 anos e sou de Florianópolis, Santa Catarina. Minha jornada no mundo da programação começou aos 12 anos, quando me envolvi em um projeto de robótica e aprendi a programar com blocos usando Arduino. Desde então, essa paixão só cresceu, e hoje sou estudante de um curso técnico em Desenvolvimento de Sistemas no SENAI, onde tenho a sorte de estudar com uma bolsa 100%.</p>
                        <p>Viver em uma ilha como Floripa me presenteia com a beleza das praias e trilhas, que são minhas grandes paixões. Além da programação, também gosto de me aventurar na área de design, onde exploro minha criatividade e busco unir tecnologia e estética.</p>
                        <p>Estou animada para compartilhar meus projetos e experiências com você!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sobre;
