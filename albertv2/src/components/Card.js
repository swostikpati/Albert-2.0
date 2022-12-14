import styles from "./Card.module.css"
function Card(props) {
    // Card to be used for overall layout in the home page
    return (
        <div className={styles.main}>
            {props.children}
        </div>
    );
}

export default Card;