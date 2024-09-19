import { useState } from 'react';
import Home from './pages/Home';
import Contato from './pages/Contato';
import Render from './pages/Render';
import Portfolio from './pages/Portfolio';

import './App.css';

function App() {
  const [pagina, setPagina] = useState(<Home />); 

  return (
    <>
      <nav>
        <button onClick={() => setPagina(<Home />)}>Home</button>
        <button onClick={() => setPagina(<Contato />)}>Contato</button>
        <button onClick={() => setPagina(<Portfolio/>)}>Portfólio</button>
        <button onClick={() => setPagina(<Render />)}>Render</button>
      </nav>
      {pagina}
    </>
  );
}

export default App;
