import styles from "./NotFound.module.css";

const NotFound = () => {
    return (
        <section>
            <h2 className={styles.error}>404 </h2>
            <p className={styles.text_error}>Página no encontrada</p>
        </section>
    );
};

export default NotFound;
