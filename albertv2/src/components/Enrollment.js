import styles from "./Enrollment.module.css";
import Semester from "./Semester";

function Enrollment(props) {
    return (<div className={styles.main}>
        <div>
            <Semester name="Fall 2021" />
            <Semester name="Spring 2022" />
            <Semester name="Summer 2022" />
            <Semester name="Fall 2022" />
        </div>
    </div>);
}

export default Enrollment;