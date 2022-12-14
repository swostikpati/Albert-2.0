import styles from "./Fyp.module.css";
import { forYouPageData } from "../helpers/forYouPageData.js";


function Fyp() {
    // returns the For You Page with all the data
    return (
        <div className={styles.main}>
            {
                forYouPageData.map((alert) => {
                    return <div id={alert.id}>{alert.text}</div>
                })
            }
        </div>
    )
}

export default Fyp;