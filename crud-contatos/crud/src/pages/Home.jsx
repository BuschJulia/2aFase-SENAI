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
            <div className="intro">
                <div className="text-container">
                    <h1>Olá, eu sou</h1>
                    <h1>Júlia Busch</h1>
                </div>
                <img src={Julia} alt="mini julinha" className="profile-image" />
            </div>

            <div className="info">
                <div className="text-container">
                    <h1>Estudante de</h1>
                    <h1>Full Stack</h1>
                </div>
                <div className="text-container">
                    <h1>Resido no</h1>
                    <h1>Brasil</h1>
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
