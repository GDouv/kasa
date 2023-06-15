import { useState } from "react";
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import style from "../../utils/styles/Error.module.css";

export default function Error() {
    const error = useRouteError();
    console.error(error);

    const [currentPage, setCurrentPage] = useState("error");

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <>
            <Header onPageChange={handlePageChange} currentPage={currentPage} />
            <div className={style.container}>
                <h1>404</h1>
                <div className={style["text-container"]}>
                    <p>Oups! La page que&nbsp;</p>
                    <p>vous demandez n&apos;existe pas.</p>
                </div>
                <Link to="/">Retourner sur la page d&apos;accueil</Link>
            </div>
            <Footer />
        </>
    );
}
