import activeStar from "../../assets/star-active.svg";
import inactiveStar from "../../assets/star-inactive.svg";
import style from "../../utils/styles/Rating.module.css";

export default function Rating({ rating }) {
    let stars = [];

    for (let i = 0; i < rating; i++) {
        stars.push(
            <img
                className={style.star}
                key={`star-${i}`}
                src={activeStar}
                alt="Etoile pleine"
            />
        );
    }

    for (let i = 5; i > rating; i--) {
        stars.push(
            <img
                className={style.star}
                key={`star-${i}`}
                src={inactiveStar}
                alt="Etoile vide"
            />
        );
    }

    return stars;
}
