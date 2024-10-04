import React from 'react';

function Copo() {
  const [numero, setNumero] = useState('');
  const [resultado, setResultado] = ('');

  const positivoNegativo = () => {
    const numeroDigitado = parseFloat(numero);

    if (numeroDigitado > 0) {
      setResultado('O número é positivo');
  }

  else if (numeroDigitado < 0 ){
    setResultado('O número é negativo');
  }

  else{
    setResultado('O número é zero');
  }

  return (
    <div className='Copo1'>
     <h1>Verificador de Números</h1> 
     <button onClick={positivoNegativo}>Verificar</button>     {resultado}
     <p>{resultado}</p>
    </div>
    )
  }
}

export default Copo;
