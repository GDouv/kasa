import Collapse from "../Collapse";

const collapseTitles = ["Fiabilité", "Respect", "Service", "Sécurité"];

export default function CollapsesList() {
    return (
        <div>
            {collapseTitles.map((title) => (
                <div key={`${collapseTitles.index}-${collapseTitles.title}`}>
                    <Collapse title={title} />
                </div>
            ))}
        </div>
    );
}
