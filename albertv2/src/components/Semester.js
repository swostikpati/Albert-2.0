import styles from "./Semester.module.css";

function Semester(props) {
    return (
        <div className={styles.main}>{props.name}</div>
    )
}

export default Semester;