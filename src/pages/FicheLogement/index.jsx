import { useParams } from "react-router-dom";
import logements from "../../datas/logements.json";
import Header from "../../components/Header";
import Slideshow from "../../components/Slideshow";
import Collapse from "../../components/Collapse";
import Rating from "../../components/Rating";
import style from "../../utils/styles/FicheLogement.module.css";

export default function FicheLogement() {
    const { id } = useParams();
    const logement = logements.find((logement) => logement.id === id);

    return (
        <div>
            <Header />
            <Slideshow
                imgsUrls={logement.pictures}
                imgsNumber={logement.pictures.length}
            />
            <div className={style["content-container"]}>
                <div className={style["infos-container"]}>
                    <div className={style["title-location-tags-container"]}>
                        <h1 className={style.title}>{logement.title}</h1>
                        <h2 className={style.location}>{logement.location}</h2>
                        <div className={style["tags-container"]}>
                            {logement.tags.map((tag) => (
                                <div
                                    key={`${logement.title}-tag-${tag}`}
                                    className={style.tag}
                                >
                                    {tag}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={style["rating-host-container"]}>
                        <div className={style["rating-container"]}>
                            <Rating rating={parseInt(logement.rating)} />
                        </div>
                        <div className={style["host-container"]}>
                            <p className={style["host-name"]}>
                                {logement.host.name}
                            </p>
                            <img
                                className={style["host-picture"]}
                                src={logement.host.picture}
                            />
                        </div>
                    </div>
                </div>
                <div className={style["collapses-container"]}>
                    <div className={style.description}>
                        <Collapse
                            title={"Description"}
                            text={logement.description}
                        />
                    </div>
                    <div className={style["margin-collapse"]}></div>
                    <div className={style.equipments}>
                        <Collapse
                            title={"Équipements"}
                            text={logement.equipments.map((equipment) => (
                                <p
                                    className={style["equipments-text"]}
                                    key={`${logement.title}-${equipment}`}
                                >
                                    {equipment}
                                </p>
                            ))}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
