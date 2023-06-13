import { Link } from "react-router-dom";
import Logo from "../../assets/LOGO-white.svg";
import footerStyle from "../../utils/styles/Footer.module.css";

export default function Footer() {
    return (
        <footer className={footerStyle.footer}>
            <Link to="/" className={footerStyle["logo-container"]}>
                <img className={footerStyle.logo} src={Logo} />
            </Link>
            <div className={footerStyle["copyright-container"]}>
                <p className={footerStyle.copyright}>
                    © 2020 Kasa. All rights reserved
                </p>
            </div>
        </footer>
    );
}
