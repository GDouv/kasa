import logements from "../../datas/logements.json";
import Card from "../Card";
import cardsListStyle from "../../utils/styles/CardsList.module.css";

export default function CardsList() {
    return (
        <div className={cardsListStyle.container}>
            {logements.map((logement) => (
                <div
                    key={logement.id}
                    className={cardsListStyle["card-container"]}
                >
                    <Card title={logement.title} cover={logement.cover} />
                </div>
            ))}
        </div>
    );
}
