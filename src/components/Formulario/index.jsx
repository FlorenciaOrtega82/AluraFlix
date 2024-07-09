import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import styles from "./Formulario.module.css";
import ListaOpciones from "./ListaOpciones";
import { useNavigate } from "react-router-dom";

const Formulario = ({ videoData, onSave, closeModal }) => {
    const [titulo, setTitulo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [link, setLink] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [id, setId] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        if (videoData) {
            setTitulo(videoData.titulo || "");
            setCategoria(videoData.categoria || "");
            setLink(videoData.video || "");
            setDescripcion(videoData.descripcion || "");
            setId(videoData.id || null);
        }
    }, [videoData]);

    const manejarSubmit = async (event) => {
        event.preventDefault();

        const video = {
            id: id || uuid(),
            titulo,
            categoria,
            descripcion,
            video: link,
            imagen: link,
        };

        // Verificar si estamos actualizando o creando un nuevo video
        const method = id ? "PUT" : "POST";
        const endpoint = id
            ? `https://my-json-server.typicode.com/FlorenciaOrtega82/AluraFlix-api/videos/${id}`
            : "https://my-json-server.typicode.com/FlorenciaOrtega82/AluraFlix-api/videos";

        try {
            const response = await fetch(endpoint, {
                method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(video),
            });

            if (response.ok) {
                onSave(video);
                manejarLimpiar();
                closeModal();
                // navigate("/");
            } else {
                console.error(
                    "Error al guardar el video:",
                    response.statusText
                );
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    // Función para limpiar los campos del formulario
    const manejarLimpiar = () => {
        setTitulo("");
        setCategoria("");
        setLink("");
        setDescripcion("");
        setId(null);
    };

    return (
        <div className={styles.formulario}>
            <form onSubmit={manejarSubmit}>
                <div>
                    <label htmlFor="titulo">Titulo</label>
                    <input
                        required
                        id="titulo"
                        type="text"
                        placeholder="Ingresa el titulo del video"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                    />
                </div>

                <div>
                    <ListaOpciones
                        required
                        onChange={(cat) => setCategoria(cat)}
                        selectedCategoria={categoria}
                    />
                </div>

                <div>
                    <label htmlFor="link">Link del video</label>
                    <input
                        required
                        id="link"
                        type="url"
                        placeholder="Ingresa el link del video"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="descripcion">Descripción</label>
                    <input
                        id="descripcion"
                        type="text"
                        placeholder="Ingresa la descripción del video"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                    />
                </div>

                <div>
                    <button type="submit" className={styles.submit}>
                        Guardar
                    </button>
                    <button
                        type="button"
                        className={styles.clear}
                        onClick={manejarLimpiar}
                    >
                        Limpiar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Formulario;
