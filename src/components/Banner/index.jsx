import PropTypes from "prop-types";
import HomeBannerImg from "../../assets/IMG.jpg";
import style from "../../utils/styles/Banner.module.css";

export default function Banner(props) {
    const { currentPage } = props;

    return (
        <div className={style.banner}>
            <div className={style["img-container"]}>
                <img
                    src={HomeBannerImg}
                    alt="Image de fond: photographie d'une falaise rocheuse peuplée de quelques arbres, avec une mer agitée, par temps gris."
                    className={style.img}
                />
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
