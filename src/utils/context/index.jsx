import PropTypes from "prop-types";
import { useState, createContext } from "react";
import { useLocation } from "react-router-dom";

export const CurrentPageContext = createContext();

export const CurrentPageProvider = ({ children }) => {
    const location = useLocation();

    const [currentPage, setCurrentPage] = useState(
        location.pathname.includes("a-propos") ? "a-propos" : "home"
    );

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <CurrentPageContext.Provider value={{ currentPage, handlePageChange }}>
            {children}
        </CurrentPageContext.Provider>
    );
};

CurrentPageProvider.propTypes = {
    children: PropTypes.any,
};
