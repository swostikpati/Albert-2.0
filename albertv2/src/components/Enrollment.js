import styles from "./Enrollment.module.css";
import Semester from "./Semester";
import { semDataArr } from "../helpers/semesterData.js";
import { useState } from "react";
import SemWindow from "./SemWindow";

function Enrollment(props) {
    const [semDisp, setSemDisp] = useState(true);
    const [semName, setSemName] = useState({});


    function selectSemester(name) {
        console.log("Yes it works")
        setSemDisp(false);
        setSemName(name);
    }
    function showSemesters() {
        setSemDisp(true);
    }
    if (semDisp) {
        return (<div className={styles.main}>
            <div>

                {
                    semDataArr.map((event) => {
                        return <Semester key={event.name} name={event.name} url={event.imgUrl} selectSemester={selectSemester} />
                    })
                }
            </div>
        </div>);
    }
    else {
        return (<div className={styles.main2}>
            <SemWindow name={semName} showSemesters={showSemesters} enrollNow={props.enrollNow} />
        </div>)
    }

}

export default Enrollment;