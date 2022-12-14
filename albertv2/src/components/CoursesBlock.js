import styles from "./CoursesBlock.module.css";
import { useState } from "react";

function CoursesBlock(props) {
    // State variables to check whether the course is added to card or not
    const [toggleAddToCart, setToggleAddToCart] = useState(true);

    function toggleAddToCartHandler() {
        if (toggleAddToCart) {
            setToggleAddToCart(false);
        }
        else {
            setToggleAddToCart(true);
        }
    }

    // Displaying all the information about courses that are available in the course enrollment page
    return (
        <div className={styles.main}>
            <p><strong>{props.course.courseCode}: {props.course.courseName}</strong></p>
            <p>{props.course.professorName}</p>
            <div>
                <p>Time: {props.course.classTime}</p>
                <p>Day: {props.course.days}</p>
                <p>Location: {props.course.location}</p>
            </div>

            <div>
                <p>{props.course.preReqs ? "Prequisites Fullfilled!" : "Prequisites not met!"}</p>
                <p>Remaining Vacancies: {props.course.classFilled}/{props.course.classSize}</p>
            </div>
            <p>Description: {props.course.classDescription}</p>
            <button onClick={toggleAddToCartHandler}>{toggleAddToCart ? "Add to Cart" : "Remove from Cart"}</button>
        </div>
    )
}

export default CoursesBlock