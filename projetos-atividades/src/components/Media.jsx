import React from 'react'
import { useState } from 'react'
import './Media.css'

function Media() {
    
    const [resultado, setResultado] = useState()

    function calcularMedia(){
        let nota1 = Number(prompt('Digite o 1° Número: '))
        let nota2 = Number(prompt('Digite o 2° Número: '))
        let media = (nota1 + nota2)/2
        setResultado(media)

    }

  return (

    <div className='Media'>
      <h2>Exercício para calcular média de 2 números</h2>
      <button onClick={calcularMedia}>Calcular</button>
      {resultado}
    
    <div>
        Média: {resultado}
        </div>
    </div>
  )
}

export default Media
