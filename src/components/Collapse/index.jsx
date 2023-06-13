import { useState } from "react";
import PropTypes from "prop-types";
import collapseStyle from "../../utils/styles/Collapse.module.css";

export default function Collapse({ title }) {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? (
        <div className={collapseStyle.dropdown}>
            <div>{title}</div>
            <button onClick={() => setIsOpen(false)}></button>
        </div>
    ) : (
        <div>
            <div className={collapseStyle.dropdown}>
                <div>{title}</div>
                <button onClick={() => setIsOpen(true)}></button>
            </div>
            <div>It&apos;s open</div>
        </div>
    );
}

Collapse.propTypes = {
    title: PropTypes.string,
};
