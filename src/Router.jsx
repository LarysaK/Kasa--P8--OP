import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import About from './pages/About/About'
import Notfound from './pages/Error/Error'
import LogementPage from './pages/LogementPage/LogementPage'

function Router() {
    return (
        // Le composant Route nous aide à établir le lien entre l'interface utilisateur du composant et l'URL
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/LogementPage/:id" element={<LogementPage />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Notfound />} /> 
            </Routes>
        </div>
    );
}

export default Router;