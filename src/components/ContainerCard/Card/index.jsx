import styles from "./Card.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";
import Modal from "../../Modal";
import Formulario from "../../Formulario";

const Card = ({ id, imagen, onDelete, onUpdate }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [videoToEdit, setVideoToEdit] = useState(null);

    const handleEditClick = () => {
        const video = {id, imagen};
        setVideoToEdit(video);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSave = (updatedVideo) => {
        onUpdate(updatedVideo);
        setIsModalOpen(false);
    };

    const handleDelete = () => {
        onDelete(id);
    };

    return (
        <div className={styles.container}>
            <img src={imagen} className={styles.imagen} alt="Video thumbnail" />
            <div className={styles.container__buttons}>
                <Link to="#" className={styles.accion} onClick={handleDelete}>
                    <FaRegTrashAlt className={styles.icon} />
                    BORRAR
                </Link>
                <Link
                    to="#"
                    className={styles.accion}
                    onClick={handleEditClick}
                >
                    <FaRegEdit className={styles.icon} />
                    EDITAR
                </Link>
            </div>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <h2>Editar Video</h2>
                <Formulario 
                    videoData={videoToEdit}
                    onSave={handleSave}
                    closeModal={handleCloseModal}
                />
            </Modal>
        </div>
    );
};

export default Card;
