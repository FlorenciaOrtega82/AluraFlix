import styles from "./ContainerCard.module.css";
import Card from "./Card";
import Titulo from "./Titulo";
import { useEffect, useState } from "react";

const ContainerCard = ({  getColorByTitle, items }) => {
    const [videos, setVideos] = useState([]);
    const [videosPorCategoria, setVideosPorCategoria] = useState({});

    useEffect(() => {
        // Función para obtener los datos desde db.json
        const fetchVideos = async () => {
            try {
                const response = await fetch("http://localhost:3000/videos");
                if (!response.ok) {
                    throw new Error("Error al obtener los datos");
                }
                const data = await response.json();
                setVideos(data);
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchVideos();
    }, []);

    useEffect(() => {
        // Agrupar videos por categoría
        const videosAgrupados = videos.reduce((acc, video) => {
            if (!acc[video.categoria]) {
                acc[video.categoria] = [];
            }
            acc[video.categoria].push(video);
            return acc;
        }, {});
        setVideosPorCategoria(videosAgrupados);
    }, [videos]);

    const getYoutubeThumbnail = (url) => {
        const videoId = url.split("v=")[1]?.split("&")[0];
        return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    };

    return (
        <div>
            {Object.keys(videosPorCategoria).map((categoria) => (
                <div key={categoria} className={styles.categoriaContainer}>
                    <Titulo color={getColorByTitle(items, categoria)}>
                        {categoria}
                    </Titulo>
                    <div className={styles.videosContainer}>
                        {videosPorCategoria[categoria].map((video) => (
                            <Card
                                key={video.id}
                                categoria={video.categoria}
                                imagen={getYoutubeThumbnail(video.video)}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ContainerCard;
