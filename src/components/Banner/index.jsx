import HomeBannerImg from "../../assets/IMG.jpg";
import bannerStyle from "../../utils/styles/Banner.module.css";

export default function Banner() {
    return (
        <div className={bannerStyle.banner}>
            <div className={bannerStyle["img-container"]}>
                <img
                    src={HomeBannerImg}
                    alt="Image de fond: photographie d'une falaise rocheuse peuplée de quelques arbres, avec une mer agitée, par temps gris."
                    className={bannerStyle.img}
                />
            </div>
            <div className={bannerStyle["title-container"]}>
                <h1 className={bannerStyle.title}>
                    Chez vous, partout et ailleurs
                </h1>
            </div>
        </div>
    );
}
