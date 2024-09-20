// 5.24 – Faça um programa que leia duas notas parciais obtidas por um 
// aluno qualquer numa disciplina qualquer ao longo de um semestre 
// qualquer, e calcule a sua média. De posse da média, esta deve ser 
// convertida em conceito que é o novo hype do momento na educação!
// A conversão deve seguir a regra descrita abaixo:
// Nota Conceito
// Entre ]9.0[ e [10.0] A
// Entre ]7.5[ e [9.0] B
// Entre ]6.0[ e [7.5] C
// Entre ]4.0[ e [6.0] D
// Entre [0.0] e [4.0] E
// O resultado deste programa deve ser um relatório contendo as notas do 
// aluno, sua média e o conceito atingido.

import React from 'react'
import { useState } from 'react'

function Media() {
    const [nota1, setNota1] = useState('')
    const [nota2, setNota2] = useState('')
    const [resultado, setResultado] = useState('')

    function verificarMedia(){
        let notaDigitada = parseFloat(nota1)
        let nota2Digitada = parseFloat(nota2)

        const media = (notaDigitada + nota2Digitada) / 2

        let conceito;
        if (media > 9 && media <= 10) {
            conceito = 'A';
        } else if (media > 7.5 && media <= 9) {
            conceito = 'B';
        } else if (media > 6 && media <= 7.5) {
            conceito = 'C';
        } else if (media >= 4 && media <= 6) {
            conceito = 'D';
        } else {
            conceito = 'E';
        }

        setResultado(`Notas: ${notaDigitada}, ${nota2Digitada} | Média: ${media.toFixed(2)} | Conceito: ${conceito}`)
    }

  return (
    <div>
      <h1>Cálculo de Média</h1>
            <input 
                type="number" 
                value={nota1}
                onChange={(e) => setNota1(e.target.value)}
                placeholder="Nota 1"
                step="0.1"
            />
            <input 
                type="number" 
                value={nota2}
                onChange={(e) => setNota2(e.target.value)}
                placeholder="Nota 2"
                step="0.1"
            />
            <button onClick={verificarMedia}>Calcular Média</button>
            {resultado && <div>{resultado}</div>}
    </div>
  )
}

export default Media
