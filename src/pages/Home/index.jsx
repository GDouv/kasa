import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import homeStyle from "../../utils/styles/Home.module.css";
import CardsList from "../../components/CardsList";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <section>
                    <Banner />
                </section>
                <section className={homeStyle.cards}>
                    <CardsList />
                </section>
            </main>
            <Footer />
        </>
    );
}
