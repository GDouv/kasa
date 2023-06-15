import { useState } from "react";
import PropTypes from "prop-types";
import style from "../../utils/styles/Collapse.module.css";
import arrow from "../../assets/Vector.svg";

export default function Collapse({ title, text }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={style["dropdown-container"]}>
            <div className={style.dropdown} onClick={() => setIsOpen(!isOpen)}>
                <div className={style.title}>{title}</div>
                <img
                    src={arrow}
                    alt={
                        isOpen
                            ? "Flèche blanche vers le haut"
                            : "Flèche blanche vers le bas"
                    }
                    className={`${style.arrow} ${
                        isOpen ? style.rotate : style["no-rotate"]
                    }`}
                />
            </div>
            {isOpen && (
                <div className={style["text-container"]}>
                    <p>{text}</p>
                </div>
            )}
        </div>
    );
}

Collapse.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
};
