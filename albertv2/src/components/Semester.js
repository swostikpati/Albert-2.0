import styles from "./Semester.module.css";

function Semester(props) {

    // function to control which semester is being selected 
    function semesterDisplayHandler() {
        console.log(`${props.name} clicked!`);
        props.selectSemester(props.name, props.num);
    }

    // renders the semester cards for each semester in the home screen
    return (
        <div className={styles.main} style={{ backgroundImage: `url(${props.url})` }} onClick={semesterDisplayHandler}>
            <div className={styles.text}>
                {props.name}
            </div>
        </div>
    )
}

export default Semester;