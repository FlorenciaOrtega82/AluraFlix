import ContainerCard from "../../components/ContainerCard";
import styles from "./Inicio.module.css";
import { v4 as uuid } from "uuid";

const Inicio = () => {
    const items = [
        {
            id: uuid(),
            categoria: "Programación",
            color: "#19369d",
        },
        {
            id: uuid(),
            categoria: "Front End",
            color: "#4e74bf",
        },
        {
            id: uuid(),
            categoria: "Back End",
            color: "#008e3d",
        },
        {
            id: uuid(),
            categoria: "Data Science",
            color: "#9eb629",
        },
        {
            id: uuid(),
            categoria: "Devops",
            color: "#dd3b38",
        },
        {
            id: uuid(),
            categoria: "UX y Diseño",
            color: "#c04ca3",
        },
        {
            id: uuid(),
            categoria: "Móvil",
            color: "#d29700",
        },
        {
            id: uuid(),
            categoria: "Innovación y Gestión",
            color: "#da7019",
        },
    ];

    function getColorByTitle(items, categoria) {
        const item = items.find((item) => item.categoria === categoria);
        return item ? item.color : "#161b38" ;
    }


    return (
        <>
            <div className={styles.container}>
                <ContainerCard
                    items={items}
                    getColorByTitle={getColorByTitle}
                />
            </div>
        </>
    );
};

export default Inicio;
