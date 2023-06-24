import { useState } from "react";
import PropTypes from "prop-types";
import arrow from "../../assets/Arrow.svg";
import style from "../../utils/styles/Slideshow.module.css";

export default function Slideshow({ imgsUrls, imgsNumber }) {
    const [imgIndex, setImgIndex] = useState(0);

    function handleClickR() {
        if (imgIndex < imgsUrls.length - 1) {
            setImgIndex(imgIndex + 1);
        } else {
            setImgIndex(0);
        }
    }

    function handleClickL() {
        if (imgIndex > 0) {
            setImgIndex(imgIndex - 1);
        } else {
            setImgIndex(imgsUrls.length - 1);
        }
    }

    function DisplayImgIndex() {
        if (imgsNumber > 1) {
            return (
                <div className={style["img-index-display-container"]}>
                    <div className={style["img-index-display"]}>{`${
                        imgIndex + 1
                    }/${imgsNumber}`}</div>
                </div>
            );
        } else return null;
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
                src={imgsUrls[imgIndex]}
                alt="Photographie de l'intérieur du logement"
            />
            <DisplayImgIndex />
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
    imgsUrls: PropTypes.array,
    imgsNumber: PropTypes.number,
};
