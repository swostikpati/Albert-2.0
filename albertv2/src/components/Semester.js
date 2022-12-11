import styles from "./Semester.module.css";

function Semester(props) {
    function semesterDisplayHandler() {
        console.log(`${props.name} clicked!`);
        props.selectSemester(props.name, props.num);
    }
    // if (props.active) {

    // }
    // else {
    //     return (<h2>Hello</h2>)
    // }

    return (
        <div className={styles.main} style={{ backgroundImage: `url(${props.url})` }} onClick={semesterDisplayHandler}>
            <div className={styles.text}>
                {props.name}
            </div>
        </div>
    )
}

export default Semester;