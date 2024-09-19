import React from 'react';

function Contato() {
    const GithubClick = () => {
        window.open('https://github.com/BuschJulia', '_blank');
    }

    const InstagramClick = () => {
        window.open('https://www.instagram.com/busch.juliaa/', '_blank');
    }

    return (
        <div>
            <h1>Contato</h1>
            <p>Para falar conosco, entre em contato:</p>
            <button onClick={GithubClick}>Github</button>
            <button onClick={InstagramClick}>Instagram</button>
        </div>
    );
}

export default Contato;
