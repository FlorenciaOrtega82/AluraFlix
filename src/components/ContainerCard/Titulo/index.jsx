import styles from "./Titulo.module.css";

const Titulo = ({ children, color }) => {
    return (
        <div className={styles.container} style={{ backgroundColor: color }}>
            {children}
        </div>
    );
};

export default Titulo;
