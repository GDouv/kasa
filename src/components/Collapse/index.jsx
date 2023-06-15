import { useState } from "react";
import PropTypes from "prop-types";
import style from "../../utils/styles/Collapse.module.css";
import arrow from "../../assets/Vector.svg";

export default function Collapse({ title, text }) {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? (
        <div onClick={() => setIsOpen(false)} className={style.dropdown}>
            <div className={style.title}>{title}</div>
            <img
                src={arrow}
                alt="Flèche blanche vers le bas"
                className={`${style.arrow} ${style["no-rotate"]}`}
            />
        </div>
    ) : (
        <>
            <div onClick={() => setIsOpen(true)} className={style.dropdown}>
                <div className={style.title}>{title}</div>
                <img
                    src={arrow}
                    alt="Flèche blanche vers le haut"
                    className={`${style.arrow} ${style.rotate}`}
                />
            </div>
            <div className={style["text-container"]}>
                <p>{text}</p>
            </div>
        </>
    );
}

// export default function Collapse({ title, text }) {
//     const [isOpen, setIsOpen] = useState(true);
//     return (
//         <div>
//             <div onClick={() => setIsOpen(true)} className={style.dropdown}>
//                 <div className={style.title}>{title}</div>
//                 <img
//                     src={arrow}
//                     alt="Flèche blanche vers le haut"
//                     className={
//                         isOpen
//                             ? `${style.arrow} ${style.rotate}`
//                             : `${style.arrow} ${style["no-rotate"]}`
//                     }
//                 />
//             </div>
//             <div
//                 className={
//                     isOpen ? style["text-container"] : style["display-none"]
//                 }
//             >
//                 <p>{text}</p>
//             </div>
//         </div>
//     );
// }

Collapse.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
};
