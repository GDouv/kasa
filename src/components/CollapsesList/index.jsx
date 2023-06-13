import Collapse from "../Collapse";

const collapseTitles = ["Fiabilité", "Respect", "Service", "Sécurité"];

// const collapseText = [];

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
