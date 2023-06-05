import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/LOGO.svg";
import "../../utils/styles/Header.css";

// const header = document.getElementsByClassName("Header");

// function appendContent() {
//     const createLink = document.createElement("Link");
//     const createImg = document.createElement("img");

//     header.appendChild(createLink);
//     createLink.setAttribute("to", "/");

//     createLink.appendChild(createImg);

//     createImg.setAttribute("className", "logo");
//     createImg.setAttribute("src", { Logo });
// }

export default function Header() {
    return (
        <header className="Header">
            <Link to="/">
                <img className="logo" src={Logo} />
            </Link>
            {/* {appendContent()} */}
            <nav className="header-nav">
                <NavLink className="accueil-link" to="/" exact>
                    Accueil
                </NavLink>
                <NavLink className="apropos-link" to="/a-propos">
                    A Propos
                </NavLink>
            </nav>
        </header>
    );
}
