// import { useState } from "react";
// import Header from "../../components/Header";
// import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import style from "../../utils/styles/Home.module.css";
import CardsList from "../../components/CardsList";

export default function Home() {
    // const [currentPage, setCurrentPage] = useState("home");

    // const handlePageChange = (newPage) => {
    //     setCurrentPage(newPage);
    // };

    return (
        <>
            {/* <Header onPageChange={handlePageChange} /> */}
            <main>
                <section>
                    <Banner currentPage={""} />
                </section>
                <section className={style.cards}>
                    <CardsList />
                </section>
            </main>
            {/* <Footer /> */}
        </>
    );
}
