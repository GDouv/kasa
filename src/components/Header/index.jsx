import Logo from "../../assets/LOGO.svg";
import { Link } from "react-router-dom";
import "../../utils/styles/Header.css";

export default function Header() {
    return (
        <header className="Header">
            <Link to="/">
                <img src={Logo} />
            </Link>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/">A Propos</Link>
            </nav>
        </header>
    );
}
