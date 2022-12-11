import styles from "./CourseCard.module.css"

function CourseCard(props) {
    return (
        <div className={styles.main}>
            <div>{props.course.courseName}</div>
            <div>{props.course.professorName}</div>
            <div>{props.course.courseTime}</div>
            <div>{props.course.days}</div>
            <div>{props.course.location}</div>
        </div>
    )
}

export default CourseCard