import { Link } from "react-router-dom";
import Logo from "../../assets/LOGO-white.svg";
import "../../utils/styles/Footer.css";

export default function Footer() {
    return (
        <header className="Footer">
            <Link to="/" className="logo-white-container">
                <img className="logo-white" src={Logo} />
            </Link>
            <div className="copyright-container">
                <p className="copyright">© 2020 Kasa. All rights reserved</p>
            </div>
        </header>
    );
}
