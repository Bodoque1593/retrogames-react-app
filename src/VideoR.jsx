import { useState, useEffect } from 'react';
import './VideoR.css';

function VideoR() {
  const [video, setVideo] = useState(null);

  useEffect(() => {
    // Función para actualizar el video
    const updateVideo = () => {
      const savedVideo = localStorage.getItem('selectedVideo');
      if (savedVideo) {
        setVideo(JSON.parse(savedVideo));
      }
    };

    // Actualizar al cargar
    updateVideo();

    // Escuchar cambios en el localStorage
    const handleStorageChange = () => updateVideo();
    window.addEventListener('storage', handleStorageChange);

    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  if (!video) return <div className="video-placeholder">Selecciona un video del catálogo</div>;

  return (
    <div className="video-player">
      <div className="video-wrapper">
        <iframe
          src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <h2 className="video-title">{video.title}</h2>
    </div>
  );
}

export default VideoR;