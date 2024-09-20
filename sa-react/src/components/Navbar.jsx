import React from 'react';
import './Navbar.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Navbar() {
    return (
        <nav id="icons">
            <ul>
                <div className="box-logo">
                    <img src="../images/Logo.png" alt="Logo" />
                </div>

                <div className="box-links">
                    <li><a className="inicio" href="/PAGINAS/homepageTeste.html">Início</a></li>
                    
                    <form id="search-form" action="resultados.html" method="GET">
                        <div className="caixa-pesquisa">
                            <input className="texto-pesquisa" type="text" name="query" placeholder="Busque por um produto aqui" />
                            <button type="submit" className="botao-pesquisa">
                                <i className="bi bi-search"></i>
                            </button>
                        </div>
                    </form>
                    
                    <li><a className="login" href="#">Login</a></li>
                    <li><a className="cadastre-se" href="#">Cadastre-se</a></li>
                </div>

                <div className="box-carrinho">
                    <li><a href="#"><i className="bi bi-cart"></i></a></li>
                    <a href="#"><i className="bi bi-person-circle"></i></a>
                </div>
            </ul>
        </nav>
    );
};

export default Navbar
