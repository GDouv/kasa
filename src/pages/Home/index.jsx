import Header from "../../components/Header";
import Background from "../../components/Background";
import "../../utils/styles/Home.css";

function Home() {
    return (
        <>
            <Header />
            <main className="Home">
                <section>
                    <Background />
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

export default Home;
