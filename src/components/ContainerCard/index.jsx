import styles from "./ContainerCard.module.css";
import Card from "./Card";
import Titulo from "./Titulo";
import { useEffect, useState } from "react";

const ContainerCard = ({ getColorByTitle, items }) => {
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

    const eliminarVideo = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/videos/${id}`, {
                method: "DELETE",
            });

            if (response.ok) {
                const videosActualizados = videos.filter(
                    (video) => video.id !== id
                );
                setVideos(videosActualizados);
                console.log(`Video con id ${id} eliminado.`);
            } else {
                console.error("Error al eliminar el video");
                alert("Error al eliminar el video");
            }
        } catch (error) {
            console.error("Error al eliminar el video:", error);
            alert("Error al eliminar el video");
        }
    };

    const handleUpdate = async (updatedVideo) => {
        try {
            const response = await fetch(
                `http://localhost:3000/videos/${updatedVideo.id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updatedVideo),
                }
            );

            if (response.ok) {
                setVideos(
                    videos.map((video) =>
                        video.id === updatedVideo.id ? updatedVideo : video
                    )
                );
            } else {
                console.error(
                    "Error al actualizar el video:",
                    response.statusText
                );
            }
        } catch (error) {
            console.error("Error:", error);
        }
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
                                id={video.id}
                                categoria={video.categoria}
                                imagen={getYoutubeThumbnail(video.video)}
                                onDelete={eliminarVideo}
                                onUpdate={handleUpdate}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ContainerCard;
