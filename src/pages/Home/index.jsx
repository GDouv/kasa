import Header from "../../components/Header";
import Banner from "../../components/Banner";
import "../../utils/styles/Home.css";

export default function Home() {
    return (
        <>
            <Header />
            <main className="Home">
                <section>
                    <Banner />
                </section>
                <section>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </section>
            </main>
        </>
    );
}
