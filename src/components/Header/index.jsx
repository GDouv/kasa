import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/LOGO.svg";
import style from "../../utils/styles/Header.module.css";

export default function Header() {
    return (
        <header className={style.header}>
            <Link to="/">
                <img className={style.logo} src={Logo} />
            </Link>
            {/* {appendContent()} */}
            <nav className={style.nav}>
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? `${style["accueil-link"]} ${style.active}`
                            : style["accueil-link"]
                    }
                    to="/"
                    exact="true"
                >
                    Accueil
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? `${style["apropos-link"]} ${style.active}`
                            : style["apropos-link"]
                    }
                    to="/a-propos"
                >
                    A Propos
                </NavLink>
            </nav>
        </header>
    );
}
