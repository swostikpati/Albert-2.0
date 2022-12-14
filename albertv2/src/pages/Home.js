import Card from "../components/Card";
import Enrollment from "../components/Enrollment";
import ImageSlider from "../components/ImageSlider";
import styles from "./Home.module.css";
import { announcementArr } from "../helpers/announcementData.js";
import Fyp from "../components/Fyp.js";
import { useState } from "react";
import EnrollmentWindow from "../components/EnrollmentWindow";



function Home(props) {
    // Declaring state variables
    const [enroll, setEnroll] = useState(false);
    const [semName, setSemName] = useState({});
    const [semNum, setSemNum] = useState({});

    // Declaring functions to be passed as props for shifting between views
    function enrollNow(name, num) {
        setEnroll(true);
        setSemName(name);
        setSemNum(num);

    }

    function stopEnroll() {
        setEnroll(false);
    }

    function checkOut() {
        setEnroll(false);
    }

    // Returning the home page

    if (!enroll) {
        return (
            <div> <h1 className={styles.heading}>Albert Home</h1>
                <section className={styles.main}>
                    <Enrollment enrollNow={enrollNow} />
                    <div>
                        <Card >
                            <ImageSlider arr={announcementArr} />
                        </Card>
                        <Card>
                            <Fyp />
                        </Card>
                    </div>
                </section>
            </div>
        );
    }
    else {
        return (
            <div> <h1 className={styles.heading}>Albert Home</h1>
                <section className={styles.main}>
                    <EnrollmentWindow name={semName} num={semNum} stopEnroll={stopEnroll} checkOut={checkOut} backendData={props.backendData} />
                </section>
            </div>
        )
    }

}

export default Home;