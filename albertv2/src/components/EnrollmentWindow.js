import CoursesBlock from "./CoursesBlock";
import styles from "./EnrollmentWindow.module.css";

function EnrollmentWindow(props) {

    // Button click handlers
    function backButtonHandler() {
        props.stopEnroll();
    }
    function checkoutButtonHandler() {

        alert("The Enrollment functionality is under progress. It will be added soon!")
        props.checkOut()
    }

    // Renders the view of the actual enrollment window
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