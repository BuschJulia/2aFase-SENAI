import React, { useState } from 'react';

function StarUber() {
    const [distancia, setDistancia] = useState('');
    const [resultado, setResultado] = useState('');

    function calcularCorrida() {
        const distanciaDigitada = parseInt(distancia);

        // Verifica se a distância é um número válido
        if (isNaN(distanciaDigitada) || distanciaDigitada <= 0) {
            setResultado('Por favor, insira uma distância válida.');
            return;
        }

        // Calcular o tempo em segundos
        const velocidadeMedia = 60; // km/h
        const tempoViagemEmSegundos = (distanciaDigitada / velocidadeMedia) * 3600; // Convertendo horas para segundos

        // Converter o tempo em um objeto
        const tempoFormatado = formatarTempo(tempoViagemEmSegundos);

        setResultado(tempoFormatado);
    }

    function formatarTempo(segundos) {
        const unidades = [
            { nome: 'anos', valor: 31536000 }, // 60 * 60 * 24 * 365
            { nome: 'meses', valor: 2592000 },  // 60 * 60 * 24 * 30
            { nome: 'dias', valor: 86400 },     // 60 * 60 * 24
            { nome: 'horas', valor: 3600 },     // 60 * 60
            { nome: 'minutos', valor: 60 },     // 60
            { nome: 'segundos', valor: 1 }       // 1
        ];

        let resultado = '';

        for (const unidade of unidades) {
            if (segundos >= unidade.valor) {
                const quantidade = Math.floor(segundos / unidade.valor);
                resultado += `${quantidade} ${unidade.nome} `;
                segundos %= unidade.valor; // Resto da divisão
            }
        }

        return resultado.trim() || '0 segundos';
    }

    return (
        <div>
            <h2>Calculadora de Corrida</h2>
            <label htmlFor="inpDistancia">Distância (em km):</label>
            <input
                type="text"
                id="inpDistancia"
                value={distancia}
                onChange={(event) => setDistancia(event.target.value)}
            />
            <button onClick={calcularCorrida}>Calcular Tempo de Viagem</button>
            {resultado && <div>{resultado}</div>}
        </div>
    );
}

export default StarUber;
