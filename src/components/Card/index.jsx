import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import style from "../../utils/styles/Card.module.css";

export default function Card({ title, cover, id }) {
    return (
        <Link to={`/fiche-logement/${id}`} className={style.link}>
            <div className={style.card}>
                <img src={cover} alt={`Photo de l'intérieur : ${title}`} />
                <h2 className={style.title}>{title}</h2>
            </div>
        </Link>
    );
}

Card.propTypes = {
    title: PropTypes.string,
    cover: PropTypes.string,
    id: PropTypes.string,
};
