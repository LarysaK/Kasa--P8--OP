
import { Link } from "react-router-dom";
import "../Footer/Footer.css";
import Logo from "../Logo/Logo";

function Footer() {
return (
    <footer className="footer">
        {/* Renvoie à l'accueil en cliquant dessus */}
        <Link className="logofooter" to="/">
        <Logo fill="#ffffff" className="logofooter" />
        </Link>
        <div className="textfooter">© 2020 Kasa. All rights reserved</div>
    </footer>
);
}

export default Footer;