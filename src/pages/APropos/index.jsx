// import { useState } from "react";
// import Header from "../../components/Header";
// import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import CollapsesList from "../../components/CollapsesList";

export default function APropos() {
    // const [currentPage, setCurrentPage] = useState("a-propos");

    // const handlePageChange = (newPage) => {
    //     setCurrentPage(newPage);
    // };

    return (
        <div>
            {/* <Header onPageChange={handlePageChange} /> */}
            <Banner currentPage={""} />
            <CollapsesList currentPage={""} />
            {/* <Footer /> */}
        </div>
    );
}
