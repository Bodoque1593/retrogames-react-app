
import './App.css';
import Navbar from './Nav/Navbar';
import Video_List from './Liste/Video_List';
import VideoR from './VideoR';
import Catalogue2000s from './Liste/Catalogue2000s';
import Accueil from './Liste/Accueil';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Liste/Login';



function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/90s" element={<Video_List />} />
      <Route path="/2000s" element={<Catalogue2000s />} />
      <Route path="/login" element={<Login />} />
      <Route path="/video/:id" element={<VideoR />} />
    </Routes>
  </Router>
  );
}

export default App;
