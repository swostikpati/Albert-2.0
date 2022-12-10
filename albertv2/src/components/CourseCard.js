import styles from "./CourseCard.module.css"

function CourseCard() {
    return (
        <div className={styles.main}>
            <div>Course Name</div>
            <div>Professor Name</div>
            <div>Course Time</div>
            <div>Days</div>
            <div>Location</div>
        </div>
    )
}

export default CourseCard