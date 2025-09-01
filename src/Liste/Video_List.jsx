import { useState, useEffect } from "react";
import Search from "./Search";
import "./Video_List.css";

function VideoList({ onSelectVideo }) {
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);

  useEffect(() => {
    const mockVideos = [
      {
        id: "3Tc_Ek0ASSA",
        title: "Super Mario World",
        thumbnail: "https://img.youtube.com/vi/3Tc_Ek0ASSA/mqdefault.jpg",
      },
      {
        id: "xf2IO7P5DVA",
        title: "The Legend of Zelda",
        thumbnail: "https://img.youtube.com/vi/xf2IO7P5DVA/mqdefault.jpg",
      },
      {
        id: "5S3RohWopSw",
        title: "Goofy Troop",
        thumbnail: "https://img.youtube.com/vi/5S3RohWopSw/mqdefault.jpg",
      },
      {
        id: "aB-KcAIg3Qw",
        title: "Chrono Trigger",
        thumbnail: "https://img.youtube.com/vi/aB-KcAIg3Qw/mqdefault.jpg",
      },
      {
        id: "Kd8ByEG_7-I",
        title: "Contra 3: The Alien Wars",
        thumbnail: "https://img.youtube.com/vi/Kd8ByEG_7-I/mqdefault.jpg",
      },
      {
        id: "hq6TS5wQ2JE",
        title: "The Magical Quest: Starring Mickey Mouse",
        thumbnail: "https://img.youtube.com/vi/hq6TS5wQ2JE/mqdefault.jpg",
      },
      {
        id: "bXHDSA35_2k",
        title: "Donkey Kong Country",
        thumbnail: "https://img.youtube.com/vi/bXHDSA35_2k/mqdefault.jpg",
      },
      {
        id: "KDciDXnm3ek",
        title: "Megaman x",
        thumbnail: "https://img.youtube.com/vi/KDciDXnm3ek/mqdefault.jpg",
      },
      {
        id: "jE-Zi6LLB6w",
        title: "Intenational Superstar Soccer 98",
        thumbnail: "https://img.youtube.com/vi/jE-Zi6LLB6w/mqdefault.jpg",
      },
      {
        id: "G9m2gAuWkOY",
        title: "Alladin",
        thumbnail: "https://img.youtube.com/vi/G9m2gAuWkOY/mqdefault.jpg",
      },
      {
        id: "wpz0xxjZuCw",
        title: "Teenage Mutant Ninja Turtles",
        thumbnail: "https://img.youtube.com/vi/wpz0xxjZuCw/mqdefault.jpg",
      },
      {
        id: "EY1rmQWplRY",
        title: "Mortal Kombat 3",
        thumbnail: "https://img.youtube.com/vi/EY1rmQWplRY/mqdefault.jpg",
      },
      {
        id: "UAyVXWY-wks",
        title: "Killer Instinct",
        thumbnail: "https://img.youtube.com/vi/UAyVXWY-wks/mqdefault.jpg",
      },
      {
        id: "rLl9XBg7wSs",
        title: "Super Mario Bross",
        thumbnail: "https://img.youtube.com/vi/rLl9XBg7wSs/mqdefault.jpg",
      },
      {
        id: "sb6PHudZLkc",
        title: "Circus",
        thumbnail: "https://img.youtube.com/vi/sb6PHudZLkc/mqdefault.jpg",
      },
      {
        id: "CZ9Pu9Usk5o",
        title: "Bomberman",
        thumbnail: "https://img.youtube.com/vi/CZ9Pu9Usk5o/mqdefault.jpg",
      },
      {
        id: "2n3ZzHTGBzI",
        title: "Yie Ar Kung Fu",
        thumbnail: "https://img.youtube.com/vi/2n3ZzHTGBzI/mqdefault.jpg",
      },
      {
        id: "dDczC3ky5Gs",
        title: "Duck Hunt",
        thumbnail: "https://img.youtube.com/vi/dDczC3ky5Gs/mqdefault.jpg",
      },
    ];
    setVideos(mockVideos);
    setFilteredVideos(mockVideos);
  }, []);

  const handleSearch = (query) => {
    const filtered = videos.filter((video) =>
      video.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredVideos(filtered);
  };

  const handleVideoSelect = (video) => {
    if (onSelectVideo) {
      onSelectVideo(video);
    } else {
      localStorage.setItem("selectedVideo", JSON.stringify(video));
      window.dispatchEvent(new Event("storage"));
    }
  };

  return (
    <div className="video-list">
      <h2>Catalogue</h2>
      <Search onSearch={handleSearch} />
      <div className="videos-container">
        {filteredVideos.map((video) => (
          <div
            key={video.id}
            className="video-card"
            onClick={() => handleVideoSelect(video)}
          >
            <img src={video.thumbnail} alt={video.title} />
            <h3>{video.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoList;
