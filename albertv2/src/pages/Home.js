import Card from "../components/Card";
import Enrollment from "../components/Enrollment";
import ImageSlider from "../components/ImageSlider";
import styles from "./Home.module.css";
import { announcementArr } from "../helpers/announcementData.js";



function Home() {
    return (
        <section className={styles.main}>
            <Enrollment />
            <div>
                <Card >
                    <ImageSlider arr={announcementArr} />
                </Card>
                <Card />
            </div>
        </section>
    );
}

export default Home;