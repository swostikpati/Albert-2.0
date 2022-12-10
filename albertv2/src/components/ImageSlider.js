import { useState } from "react";
import styles from "./ImageSlider.module.css";
// import { announcementArr } from "../helpers/announcementData.js";


function ImageSlider(props) {
    const [currentI, setCurrentI] = useState(0);
    setInterval(() => {
        if (currentI < props.arr.length - 1) {
            setCurrentI(currentI + 1);
        }
        else {
            setCurrentI(0);
        }
    }, 10000)

    return (
        <div className={styles.main}>
            <div className={styles.bgImg} style={{ backgroundImage: `url(${props.arr[currentI].imageURL})` }}></div>
        </div>
    )
}

export default ImageSlider;