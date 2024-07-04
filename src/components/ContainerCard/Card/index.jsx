import styles from "./Card.module.css";
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({ imagen }) => {
    return (
        <div className={styles.container}>
            <img src={imagen} className={styles.imagen} />
            <div className={styles.container__buttons}>
                <Link className={styles.accion}>
                    <FaRegTrashAlt className={styles.icon} />
                    BORRAR
                </Link>
                <Link className={styles.accion}>
                    <FaRegEdit className={styles.icon} />
                    EDITAR
                </Link>
            </div>
        </div>
    );
};

export default Card;
