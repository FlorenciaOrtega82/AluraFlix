
import { useState } from "react";
import styles from "./ListaOpciones.module.css";
import { v4 as uuid } from "uuid";

const ListaOpciones = ({ onChange }) => {
    const [selectedCategoria, setSelectedCategoria] = useState("");

    const categorias = [
        { id: uuid(), categoria: "Programación" },
        { id: uuid(), categoria: "Front End" },
        { id: uuid(), categoria: "Data Science" },
        { id: uuid(), categoria: "Devops" },
        { id: uuid(), categoria: "UX y Diseño" },
        { id: uuid(), categoria: "Móvil" },
        { id: uuid(), categoria: "Innovación y Gestión" },
    ];

    const handleChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedCategoria(selectedValue);
        onChange(selectedValue);  // Llama a la función onChange pasada como prop
    };

    return (
        <div className={styles.lista__opciones}>
            <label htmlFor="categoria-select">Categorías</label>
            <select
                id="categoria-select"
                value={selectedCategoria}
                onChange={handleChange}
            >
                <option value="">Seleccione una categoría</option>
                {categorias.map((categoria) => (
                    <option key={categoria.id} value={categoria.categoria}>
                        {categoria.categoria}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ListaOpciones;
