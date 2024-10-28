import { createBrowserRouter } from "react-router-dom"; 
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import Skills from "../pages/Skills";
import Projetos from "../pages/Projetos";
import Contato from "../pages/Contato";

const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/sobre", element: <Sobre />},
    {path: "/skills", element: <Skills />},
    {path: "/projetos", element: <Projetos />},
    {path: "/contato", element: <Contato />},
])

export default router;
