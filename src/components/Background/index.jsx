import HomeBackgroundImg from "../../assets/IMG.jpg";
import "../../utils/styles/Background.css";

export default function Background() {
    return (
        <div className="bg-banner">
            <div className="bg-img-container">
                <img
                    src={HomeBackgroundImg}
                    alt="Image de fond: photographie d'une falaise rocheuse peuplée de quelques arbres, avec une mer agitée, par temps gris."
                    className="bg-img"
                />
            </div>
            <div className="bg-title-container">
                <h1 className="home-title">Chez vous, partout et ailleurs</h1>
            </div>
        </div>
    );
}
