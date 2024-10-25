import React, { useState, useContext } from 'react'
import Navbar from '../components/Navbar'
import { GlobalContext } from '../contexts/GlobalContext'
import './Cadastro.css'

function Cadastro() {
    const { contato, setContato, contatos, setContatos } = useContext(GlobalContext)
    const [inputNome, setInputNome] = useState('')

    function cadastrarContato() {
        // setContato(inputNome)    
        setContatos([...contatos, inputNome])
        console.log(contatos);
    }

    return (
        <div>
            <Navbar />
            <h1>Cadastre seu contato</h1>
            <div className='input-container'>
                <label>Nome</label>
                <input type="text"
                    value={inputNome}
                    onChange={(event) => setInputNome(event.target.value)}
                    placeholder='Digite seu nome completo' />
            </div>
            {contato}
            <button className='cadastro'onClick={cadastrarContato}>Cadastrar contato</button>
            <div className="contatos">
                {contatos.map((c, index) => (
                    <div className='card-contato' key={index}>
                        <p>{c}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cadastro
