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
    return (
        <div className={styles.main}>
            <h1>
                {props.name} Enrollment
            </h1>
            <div className={styles.courseList}>
                <CoursesBlock />
                <CoursesBlock />
            </div>
            <div className={styles.buttons}>
                <button onClick={checkoutButtonHandler}>Checkout</button>
                <button onClick={backButtonHandler}>Back</button>
            </div>
        </div>
    )
}

export default EnrollmentWindow