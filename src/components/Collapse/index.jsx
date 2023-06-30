import { useState } from "react";
import PropTypes from "prop-types";
import style from "../../utils/styles/Collapse.module.css";
import arrow from "../../assets/Vector.svg";
import { CurrentPageContext } from "../../utils/context";
import { useContext } from "react";
export default function Collapse({ title, text }) {
    const [isOpen, setIsOpen] = useState(false);

    const { currentPage } = useContext(CurrentPageContext);

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
                        currentPage === "a-propos"
                            ? null
                            : style["title-font-size"]
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
                    <div className={style["text"]}>{text}</div>
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
