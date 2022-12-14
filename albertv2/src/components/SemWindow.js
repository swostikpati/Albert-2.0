import styles from "./SemWindow.module.css";
import CourseCard from "./CourseCard";
import { studentSemesterData } from "../helpers/studentSemesterData.js";

function SemWindow(props) {
    // button on click handlers to move between views
    function backButtonHandler() {
        props.showSemesters();
    }

    function enrollButtonHandler() {
        props.enrollNow(props.name, props.num);
    }

    // renders the courses enrolled in a specifc semester and gives users the enroll into the courses in that semester
    return (
        <div className={styles.main}>

            <h2>{props.name}</h2>
            <h3>Enrolled Courses</h3>
            <div className={styles.courses}>
                {
                    studentSemesterData[props.num].courses.map((course) => {
                        return <CourseCard key={course.courseName} course={course} />

                    })
                }
                {/* <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard /> */}

            </div>
            <div className={styles.buttons}>
                <button onClick={enrollButtonHandler}>Enroll Now</button>
                <button onClick={backButtonHandler}>Back</button>
            </div>

        </div>
    )
}

export default SemWindow