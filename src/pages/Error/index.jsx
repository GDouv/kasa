import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import style from "../../utils/styles/Error.module.css";

export default function Error() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className={style.container}>
            <h1>404</h1>
            <div className={style["text-container"]}>
                <p>Oups! La page que&nbsp;</p>
                <p>vous demandez n&apos;existe pas.</p>
            </div>
            <Link to="/">Retourner sur la page d&apos;accueil</Link>
        </div>
    );
}
