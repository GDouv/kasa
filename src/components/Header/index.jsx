import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/LOGO.svg";
import headerStyle from "../../utils/styles/Header.module.css";

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
        <header className={headerStyle.header}>
            <Link to="/">
                <img className={headerStyle.logo} src={Logo} />
            </Link>
            {/* {appendContent()} */}
            <nav className={headerStyle.nav}>
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? `${headerStyle["accueil-link"]} ${headerStyle.active}`
                            : headerStyle["accueil-link"]
                    }
                    to="/"
                    exact
                >
                    Accueil
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? `${headerStyle["apropos-link"]} ${headerStyle.active}`
                            : headerStyle["apropos-link"]
                    }
                    to="/a-propos"
                >
                    A Propos
                </NavLink>
            </nav>
        </header>
    );
}
