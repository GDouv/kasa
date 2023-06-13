import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import cardStyle from "../../utils/styles/Card.module.css";

export default function Card({ title, cover }) {
    return (
        <Link to="/" className={cardStyle.link}>
            <div className={cardStyle.card}>
                <img src={cover} alt={`Photo de l'intérieur : ${title}`} />
                <h2 className={cardStyle.title}>{title}</h2>
            </div>
        </Link>
    );
}

Card.propTypes = {
    title: PropTypes.string,
    cover: PropTypes.string,
};
