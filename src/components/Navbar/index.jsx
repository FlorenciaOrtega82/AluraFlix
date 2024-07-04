import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "./Logo.png";
import LinkInicio from "./LinkInicio";

const Navbar = () => {
    return (
        <header className={styles.container}>
            <Link to="/">
                <div className={styles.logo__container}>
                    <img src={logo} alt="Logo AluraFlix" />
                </div>
            </Link>
            <nav>
                <LinkInicio url="./">Home</LinkInicio>
                <LinkInicio url="/nuevoVideo">Nuevo Video</LinkInicio>
            </nav>
        </header>
    );
};

export default Navbar;
