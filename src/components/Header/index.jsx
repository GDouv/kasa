import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { CurrentPageContext } from "../../utils/context";
import Logo from "../../assets/LOGO.svg";
import style from "../../utils/styles/Header.module.css";

export default function Header() {
    const { handlePageChange, currentPage } = useContext(CurrentPageContext);

    return (
        <header className={style.header}>
            <Link
                to="/"
                onClick={() =>
                    currentPage !== "home" ? handlePageChange("home") : null
                }
            >
                <img className={style.logo} src={Logo} />
            </Link>
            <nav className={style.nav}>
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? `${style["accueil-link"]} ${style.active}`
                            : style["accueil-link"]
                    }
                    to="/"
                    exact="true"
                    onClick={() => handlePageChange("home")}
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
                    onClick={() => handlePageChange("a-propos")}
                >
                    A Propos
                </NavLink>
            </nav>
        </header>
    );
}

Header.propTypes = {
    onPageChange: PropTypes.func,
};
