import styles from "./LinkInicio.module.css";
import { Link } from "react-router-dom";

const LinkInicio = ({ url, children }) => {
    return <Link to={url}  className={styles.button} >
        {children}
        </Link>;
};

export default LinkInicio;
