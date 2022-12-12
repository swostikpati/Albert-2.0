import styles from "./CoursesBlock.module.css";

function CoursesBlock(props) {
    return (
        <div className={styles.main}>
            <p>{props.course.courseCode}: {props.course.courseName}</p>
            <p>{props.course.professorName}</p>
            <div>
                <p>{props.course.classTime}</p>
                <p>{props.course.days}</p>
                <p>{props.course.location}</p>
            </div>

            <div>
                <p>{props.course.preReqs ? "Prequisites Fullfilled!" : "Prequisites not met"}</p>
                <p>Remaining Vacancies: {props.classFilled}/{props.classSize}</p>
            </div>
            <p>{props.classDescription}</p>
            <button>Add to Cart</button>
        </div>
    )
}

export default CoursesBlock