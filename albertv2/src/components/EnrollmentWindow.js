import CoursesBlock from "./CoursesBlock";
import styles from "./EnrollmentWindow.module.css";

function EnrollmentWindow(props) {
    function backButtonHandler() {
        props.stopEnroll();
    }
    function checkoutButtonHandler() {

        alert("Successfully Enrolled!")
        props.checkOut()
    }
    console.log(props.backendData);
    return (
        <div className={styles.main}>
            <h1>
                {props.name} Enrollment
            </h1>
            <div className={styles.courseList}>
                {props.backendData[props.num].Courses.map((course) => {
                    return <CoursesBlock id={course.courseCode} course={course} />
                })}

                {/* <CoursesBlock />
                <CoursesBlock /> */}
            </div>
            <div className={styles.buttons}>
                <button onClick={checkoutButtonHandler}>Checkout</button>
                <button onClick={backButtonHandler}>Back</button>
            </div>
        </div>
    )
}

export default EnrollmentWindow