// 5.25 - O porco: Faça um programa que leia o valor de um produto X e leia 
// a quantidade de moedas de um cofrinho que contenha: 
//  N moedas de 1 real; 
//  N moedas de 50 centavos; 
//  N moedas de 25 centavos; 
//  N moedas de 10 centavos; 
//  N moedas de 5 centavos; 
// O programa deverá verificar se o total de reais que contem no cofrinho é 
// o bastante para compra o produto X. 
// <Muleta da compreensão: Tem que ler o preço da coisa; tem que ler a 
// quantidade de cada moeda que tem no porco; calcular quantos pila tem no 
// porco; ver se cabe no “orçamento”>

import React from 'react'
import { useState } from 'react'

function Cofrinho() {
    const [produto, setProduto] = useState('')
    const [cofrinho, setCofrinho] = useState('')
    const [ativo, setAtivo] = useState('')
    const [resultado, setResultado] = useState('')

    const moedas = [
        {valor: 0.05, quantidade: 0, nome: '5 centavos'},
        {valor: 0.10, quantidade: 0, nome: '10 centavos'},
        {valor: 0.25, quantidade: 0, nome: '25 centavos'},
        {valor: 0.50, quantidade: 0, nome: '50 centavos'},
        {valor: 1.00, quantidade: 0, nome: '1 real'}]

        let valorTotal = 0

        function valorCofrinho(){
            let valorProduto = Number(prompt('Qual o valor do produto?'))

            moedas.forEach(moeda=>{
                
            })
        }
    ]
  return (
    <div>
      
    </div>
  )
}

export default Cofrinho
