import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/LOGO.svg";
import style from "../../utils/styles/Header.module.css";

export default function Header(props) {
    const { onPageChange } = props;

    const setPageHome = () => {
        onPageChange("home");
    };

    const setPageAPropos = () => {
        onPageChange("a-propos");
    };

    return (
        <header className={style.header}>
            <Link to="/">
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
                    onClick={setPageHome}
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
                    onClick={setPageAPropos}
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
