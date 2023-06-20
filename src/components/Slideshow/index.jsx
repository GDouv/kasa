import { useState } from "react";
import PropTypes from "prop-types";
import arrow from "../../assets/Arrow.svg";
import style from "../../utils/styles/Slideshow.module.css";

export default function Slideshow({ imgUrl }) {
    const [imgIndex, setImgIndex] = useState(0);

    function handleClickR() {
        if (imgIndex < imgUrl.length - 1) {
            setImgIndex(imgIndex + 1);
        } else {
            setImgIndex(0);
        }
    }

    function handleClickL() {
        if (imgIndex > 0) {
            setImgIndex(imgIndex - 1);
        } else {
            setImgIndex(imgUrl.length - 1);
        }
    }

    return (
        <div className={style.slideshow}>
            <div
                className={`${style["left-arrow-container"]} ${style["arrow-container"]}`}
                onClick={handleClickL}
            >
                <img
                    className={`${style["left-arrow"]} ${style.arrow}`}
                    src={arrow}
                    alt="Flèche vers la gauche"
                />
            </div>
            <img
                className={style.picture}
                src={imgUrl[imgIndex]}
                alt="Photographie de l'intérieur du logement"
            />
            <div
                className={`${style["right-arrow-container"]} ${style["arrow-container"]}`}
                onClick={handleClickR}
            >
                <img
                    className={`${style["right-arrow"]} ${style.arrow}`}
                    src={arrow}
                    alt="Flèche vers la droite"
                />
            </div>
        </div>
    );
}

Slideshow.propTypes = {
    imgUrl: PropTypes.array,
};
