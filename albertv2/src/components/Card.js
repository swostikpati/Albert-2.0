import styles from "./Card.module.css"
function Card(props) {
    return (
        <div className={styles.main}>
            {props.children}
        </div>
    );
}

export default Card;