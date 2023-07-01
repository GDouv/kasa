import PropTypes from "prop-types";
import { useContext } from "react";
import { CurrentPageContext } from "../../utils/context";
import AProposBannerImg from "../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.jpg";
import HomeBannerImg from "../../assets/IMG.jpg";
import style from "../../utils/styles/Banner.module.css";

export default function Banner() {
    const { currentPage } = useContext(CurrentPageContext);

    return (
        <div className={style.banner}>
            <div
                className={`${style["img-container"]} ${
                    currentPage === "a-propos" ? style["big-banner"] : null
                }`}
            >
                {currentPage === "a-propos" ? (
                    <img
                        src={AProposBannerImg}
                        alt="Bannière: photographie d'un zone montagneuse avec une forêt verte au premier plan et des montagnes enneigées au second plan."
                        className={style.img}
                    />
                ) : (
                    <img
                        src={HomeBannerImg}
                        alt="Bannière: photographie d'une falaise rocheuse peuplée de quelques arbres, avec une mer agitée, par temps gris."
                        className={style.img}
                    />
                )}
            </div>
            <div
                className={
                    currentPage !== "home"
                        ? style["display-none"]
                        : style["title-container"]
                }
            >
                <h1 className={style.title}>Chez vous, partout et ailleurs</h1>
            </div>
        </div>
    );
}

Banner.propTypes = {
    currentPage: PropTypes.string,
};
