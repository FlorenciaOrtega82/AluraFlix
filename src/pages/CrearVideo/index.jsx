import Formulario from "../../components/Formulario";
import styles from "./CrearVideo.module.css";

const CrearVideo = () => {
    return (
        <>
            <div className={styles.container}>
                <h2 className={styles.titulo}>Crear nuevo video</h2>
                <h3 className={styles.descripcion}>
                    Completa el formulario para crear una nueva tarjeta de video
                </h3>
                <Formulario />
            </div>
        </>
    );
};

export default CrearVideo;
