// 5.23 – Um comerciante comprou um produto e quer vendê-lo com lucro de 
// 45% se o valor da compra for menor que R$20,00; caso contrário, o lucro 
// será de 30%. Faça um programa que entre com o valor do produto e mostre 
// o valor de venda.

import React, { useState } from 'react';

function Comerciante() {
    const [compra, setCompra] = useState('');
    const [venda, setVenda] = useState('');

    function calcularLucro() {
        const valorCompra = parseFloat(compra);
        let lucro;
        if (valorCompra <= 20) {
            lucro = valorCompra * 0.45; 
        } else {
            lucro = valorCompra * 0.30;
        }

        const valorVenda = lucro + valorCompra;
        setVenda(`Valor de Venda: R$ ${valorVenda.toFixed(2)} (Lucro: R$ ${lucro.toFixed(2)})`);
    }

    return (
        <div>
            <h1>Lucro da Compra</h1>
            <input
                type="number"
                value={compra}
                onChange={(e) => setCompra(e.target.value)}
                placeholder="Valor da Compra"
            />
            <button onClick={calcularLucro}>Calcular Lucro</button>
            {venda && <div>{venda}</div>}
        </div>
    );
}

export default Comerciante;