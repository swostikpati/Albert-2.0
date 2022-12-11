import styles from "./CoursesBlock.module.css";

function CoursesBlock() {
    return (
        <div className={styles.main}>
            <p>Course Code: Course Name</p>
            <p>Professor Name</p>
            <div>
                <p>ClassTime</p>
                <p>Class Days</p>
                <p>Class Location</p>
            </div>

            <div>
                <p>Prequisites Fullfilled!</p>
                <p>Class Filled</p>
            </div>
            <p>Class description + description</p>
            <button>Add to Cart</button>
        </div>
    )
}

export default CoursesBlock