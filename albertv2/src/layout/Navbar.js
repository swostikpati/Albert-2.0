import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../assets/nyu_logo.png";
import user_icon from "../assets/user_icon.png";
//styles (can be any name) is a JS object where everything that we define in CSS will be properties

function Navbar() {
    // Navbar with links one one side and profile icon on the other
    return (
        <header className={styles.header} id={styles["#heading1"]}>
            <div>
                <nav>
                    <ul className={styles.nav_links}>
                        <li>
                            <img className={styles.logo} src={logo} alt="logo"></img>
                        </li>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/academics">Academics</Link>
                        </li>
                        <li>
                            <Link to="/finances">Finances</Link>
                        </li>
                        <li>
                            <Link to="/resources">Resources</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div><img className={styles.user_icon} src={user_icon} alt="user"></img></div>

        </header >


    )
}

export default Navbar;

//Comments:
//Link prevents making requests to the server and instead loads the required component into the screen

