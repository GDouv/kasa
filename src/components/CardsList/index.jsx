import logements from "../../datas/logements.json";
import Card from "../Card";
import style from "../../utils/styles/CardsList.module.css";

export default function CardsList() {
    return (
        <div className={style.container}>
            {logements.map((logement) => (
                <div key={logement.id} className={style["card-container"]}>
                    <Card
                        title={logement.title}
                        cover={logement.cover}
                        id={logement.id}
                    />
                </div>
            ))}
        </div>
    );
}
