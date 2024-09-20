import React, { useState } from 'react';
import './Garcom.css'
import SituacaoEmprestimo from './SituacaoEmprestimo'

function Garcom() {
    const [salario, setSalario] = useState('');
    const [emprestimo, setEmprestimo] = useState('');
    const [parcelas, setParcelas] = useState('');
    const [situacao, setSituacao] = useState('');

    function analisarEmprestimo() {
        const salarioNum = parseFloat(salario);
        const emprestimoNum = parseFloat(emprestimo);
        const parcelasNum = parseInt(parcelas, 10);

        if (salarioNum <= 0 || emprestimoNum <= 0 || parcelasNum <= 0) {
            setSituacao('Valores devem ser positivos e diferentes de zero.');
            return;
        }

        const valorParcela = emprestimoNum / parcelasNum;
        const maximoParcelas = salarioNum * 0.3;

        if (valorParcela <= maximoParcelas) {
            setSituacao('Empréstimo Aprovado!');
        } else {
            setSituacao('Empréstimo Negado!');
        }
    }

    return (
        <div className='garcom-container'>
            <label htmlFor="inpSalario">Salário</label>
            <input
                type="text"
                id='inpSalario'
                value={salario}
                onChange={(event) => setSalario(event.target.value)}
            />
            <label htmlFor="inpEmprestimo">Valor do empréstimo:</label>
            <input
                type="text"
                id='inpEmprestimo'
                value={emprestimo}
                onChange={(event) => setEmprestimo(event.target.value)}
            />
            <label htmlFor="inpPrestacoes">Qtd de prestações:</label>
            <input
                type="text"
                id='inpPrestacoes'
                value={parcelas}
                onChange={(event) => setParcelas(event.target.value)}
            />

            <button onClick={analisarEmprestimo}>Analisar empréstimo</button>

            {situacao && <div>{situacao}</div>}
        </div>
    );
}

export default Garcom;
