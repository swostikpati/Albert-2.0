import styles from "./Enrollment.module.css";
import Semester from "./Semester";
import { semDataArr } from "../helpers/semesterData.js";
import { useState } from "react";
import SemWindow from "./SemWindow";

function Enrollment(props) {
    const [semDisp, setSemDisp] = useState(true);
    const [semName, setSemName] = useState({});
    const [semNum, setSemNum] = useState({});


    function selectSemester(name, num) {
        console.log("Yes it works")
        setSemDisp(false);
        setSemName(name);
        setSemNum(num);
    }
    function showSemesters() {
        setSemDisp(true);
    }
    if (semDisp) {
        return (<div className={styles.main}>
            <div>

                {
                    semDataArr.map((event) => {
                        return <Semester key={event.name} name={event.name} url={event.imgUrl} num={event.num} selectSemester={selectSemester} />
                    })
                }
            </div>
        </div>);
    }
    else {
        return (<div className={styles.main2}>
            <SemWindow name={semName} showSemesters={showSemesters} enrollNow={props.enrollNow} num={semNum} />
        </div>)
    }

}

export default Enrollment;