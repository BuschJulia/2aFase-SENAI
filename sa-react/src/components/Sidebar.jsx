import React from 'react'
import'./Sidebar.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Sidebar() {
    return (
        <nav className="menu-lateral">
            <div className="btn-expandir">
                <i className="bi bi-list" id="btn-exp"></i>
            </div>
            
            <ul>
                <li className="item-menu ativo">
                    <a href="/PAGINAS/homepageTeste.html">
                        <span className="icon"><i className="bi bi-house"></i></span>
                        <span className="text-link">Home</span>
                    </a>
                </li>

                <li className="item-menu">
                    <a href="/paginas/perfilUsuario.html">
                        <span className="icon"><i className="bi bi-person-circle"></i></span>
                        <span className="text-link">Perfil</span>
                    </a>
                </li>

                <li className="item-menu">
                    <a href="#">
                        <span className="icon"><i className="bi bi-cart-plus-fill"></i></span>
                        <span className="text-link">Minha Lista</span>
                    </a>
                </li>

                <li className="item-menu item-sair">
                    <a href="/PAGINAS/concluir_(finalizar).html">
                        <span className="icon"><i className="bi bi-door-closed"></i></span>
                        <span className="text-link">Sair</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar
