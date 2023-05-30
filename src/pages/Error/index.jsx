import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Error() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n&apos;existe pas.</p>
            <Link to="/">Retourner sur la page d&apos;accueil</Link>
        </div>
    );
}
