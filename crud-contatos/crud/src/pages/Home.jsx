import Navbar from "../components/Navbar";
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import Julia from '../assets/images/julinha.png';
import LinkedIn from '../assets/images/linkedin.svg';
import Instagram from '../assets/images/instagram.svg';
import './Home.css'; // Importando o CSS

function Home() {
    const { usuarioLogado } = useContext(GlobalContext);

    return (
        <div>
            <Navbar />
            <div className="container-home">
                <div className="container-home-left">
                    <div className="ola">
                        <h1 className="home-text">Olá, eu sou</h1>
                        <h1 className="homeText-bold">Júlia Busch</h1>
                    </div>

                    <div className="estudante">
                        <h1 className="homeText-bold">Estudante de</h1>
                        <h1 className="full-stack">Full Stack</h1>
                    </div>

                    <div className="resido">
                        <h1 className="home-text">Resido no</h1>
                        <h1 className="homeText-bold">Brasil</h1>
                    </div>
                </div>

                <div className="container-home-right">
                    <img src={Julia} alt="mini julinha" className="imagem-julia" />
                </div>
            </div>

            <div className="social-media">
                <img src={LinkedIn} alt="Logo LinkedIn" />
                <img src={Instagram} alt="Logo Instagram" />
            </div>
        </div>
    );
}

export default Home;
