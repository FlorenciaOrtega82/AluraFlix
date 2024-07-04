import { useState } from "react";
import styles from "./Formulario.module.css";
import ListaOpciones from "./ListaOpciones";
import { v4 as uuid } from "uuid";

const Formulario = () => {
    // Estado para cada campo del formulario
    const [titulo, setTitulo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [link, setLink] = useState("");
    const [descripcion, setDescripcion] = useState("");

    // Función para manejar el envío del formulario
    const manejarSubmit = async (event) => {
        event.preventDefault();

        // Crear el objeto de datos a enviar
        const nuevoVideo = {
            id: uuid(), // Aseguramos un ID único
            titulo,
            categoria,
            descripcion,
            video: link,
            imagen: link, // Usamos el mismo link para la imagen
        };

        // Enviar los datos a la db.json
        try {
            const response = await fetch("http://localhost:3000/videos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(nuevoVideo),
            });

            if (response.ok) {
                console.log("Nuevo video añadido:", nuevoVideo);
                manejarLimpiar(); // Limpiar el formulario después de enviar los datos
                NavigationPreloadManager("/"); // Redirigir a la página principal
            } else {
                console.error("Error al añadir el video:", response.statusText);
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
    };

    return (
        <div className={styles.formulario}>
            <form onSubmit={manejarSubmit}>
                <div>
                    <label html="titulo">Titulo</label>
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
                    <label html="link">Link del video</label>
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
                        required
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
