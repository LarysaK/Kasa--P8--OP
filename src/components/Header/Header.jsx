import { NavLink } from "react-router-dom"
import Logo from "../Images/logo.svg" 
import "../Header/Header.css"

function Header() {
    let activeStyle = {textDecoration: "underline"}
    return (
        <header className={"header"}>
        <img src={Logo} alt="Logo de Kasa" className={"logo"} />
        <nav className={"nav"}>
            <NavLink to="/" className={"homeNav"} style={({ isActive }) =>
            isActive ? activeStyle : undefined } end>
                Accueil
                </NavLink>
                <NavLink to="/about" className={"aboutNav"} style={({ isActive }) =>
                isActive ? activeStyle : undefined } end>
                    A Propos
                    </NavLink>
        </nav>
        </header>
    )
}

export default Header