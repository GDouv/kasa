import { useState } from "react";
import PropTypes from "prop-types";
import style from "../../utils/styles/Collapse.module.css";
import arrow from "../../assets/Vector.svg";
export default function Collapse({ title, text, currentPage }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={style["dropdown-container"]}>
            <div
                className={`${style.dropdown} ${
                    currentPage === "a-propos" ? null : style.radius
                }`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div
                    className={`${style.title} ${
                        currentPage === "a-propos" ? null : style["font-size"]
                    }`}
                >
                    {title}
                </div>
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
                    <p
                        className={`${
                            currentPage === "a-propos"
                                ? style["text"]
                                : style["text-font-size"]
                        }`}
                    >
                        {text}
                    </p>
                </div>
            )}
        </div>
    );
}

Collapse.propTypes = {
    title: PropTypes.string,
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    currentPage: PropTypes.string,
};
