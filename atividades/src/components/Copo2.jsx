import React from 'react'

function Copo2() {
    const [numero, setNumero] = useState('');
    const [resultado, setResultado] = useState('');

    const verificar = () => {
        const num = parseInt(numero, 10);

        if (num > 0 && num % 2 === 0) {
            setResultado('O número é par e positivo.');
        }

        else {
            setResultado('O número não é par e positivo ao mesmo tempo.');
        }
    };

  return (
    <div>
       <h1>Verificar Par e Positivo</h1>
       <button onClick={verificar}>Verificar</button>
       <p>{resultado}</p><button onClick={verificar}>Verificar</button>
    </div>
  )
}

export default Copo2;
