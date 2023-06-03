import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

export default function Error() {
    const error = useRouteError();
    console.error(error);

    return (
        <>
            <Header />
            <div id="error">
                <h1>404</h1>
                <p>Oups! La page que vous demandez n&apos;existe pas.</p>
                <Link to="/">Retourner sur la page d&apos;accueil</Link>
            </div>
        </>
    );
}
