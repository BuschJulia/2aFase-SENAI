import React from 'react'
import { useState } from 'react'

function Copo() {
    const [numero, setNumero] = useState('')
    const [resultado, setResultado] =  useState('')

    const verificador = () => {
        const num = parseInt(numero)

        if (numero > 0){
            setResultado('Número Positivo')
        }

        else if (numero < 0){
            setResultado('Número Negativo')
        }

        else{
            setResultado('Número Nulo')
        }
    }
  return (
    <div>
      <h1>Copo Meio Cheio</h1>
      <input type="number" 
      value={numero} 
      onChange={(e) => setNumero(e.target.value)} 
      placeholder='Digite um número' />
      <button onClick={verificador}>Verificar</button>
      <p>{resultado}</p>
    </div>
  )
}

export default Copo
