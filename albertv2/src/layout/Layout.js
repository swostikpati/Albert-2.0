import Navbar from "./Navbar";
import styles from "./Layout.module.css";

function Layout(props) {
    // Renders the overall layout of the page
    return (
        <div>
            <Navbar />
            <main className={styles.main}>
                {props.children}
            </main>
        </div>
    );
}

export default Layout;