import styles from "./SemWindow.module.css";
import CourseCard from "./CourseCard";

function SemWindow(props) {
    function backButtonHandler() {
        props.showSemesters();
    }

    function enrollButtonHandler() {
        props.enrollNow(props.name);
    }
    return (
        <div className={styles.main}>

            <h2>{props.name}</h2>
            <h3>Enrolled Courses</h3>
            <div className={styles.courses}>
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />

            </div>
            <div className={styles.buttons}>
                <button onClick={enrollButtonHandler}>Enroll Now</button>
                <button onClick={backButtonHandler}>Back</button>
            </div>

        </div>
    )
}

export default SemWindow