import { Link } from "react-router-dom";
import Logo from "../../assets/LOGO-white.svg";
import style from "../../utils/styles/Footer.module.css";

export default function Footer() {
    return (
        <footer className={style.footer}>
            <Link to="/" className={style["logo-container"]}>
                <img className={style.logo} src={Logo} />
            </Link>
            <div className={style["copyright-container"]}>
                <p className={style.copyright}>
                    © 2020 Kasa. All rights reserved
                </p>
            </div>
        </footer>
    );
}
