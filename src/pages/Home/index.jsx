import Banner from "../../components/Banner";
import CardsList from "../../components/CardsList";
import style from "../../utils/styles/Home.module.css";

export default function Home() {
    return (
        <main>
            <section>
                <Banner />
            </section>
            <section className={style.cards}>
                <CardsList />
            </section>
        </main>
    );
}
