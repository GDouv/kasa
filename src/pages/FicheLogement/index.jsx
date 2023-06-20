import { useParams } from "react-router-dom";
import logements from "../../datas/logements.json";
import Header from "../../components/Header";
import Slideshow from "../../components/Slideshow";
import Collapse from "../../components/Collapse";

export default function FicheLogement() {
    const { id } = useParams();
    const logement = logements.find((logement) => logement.id === id);

    console.log(logement);

    return (
        <div>
            <Header />
            <Slideshow imgUrl={logement.pictures} />
            <h1>{logement.title}</h1>
            <h2>{logement.location}</h2>
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} />
            <p>{logement.rating}</p>
            <div></div>
            <div></div>
            <div></div>
            <Collapse />
            <Collapse />
            <div>Page fiche logement: {id}</div>
        </div>
    );
}
