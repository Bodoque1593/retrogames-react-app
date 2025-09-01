import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  
    const [showMenu, setShowMenu] = useState(false); 

  return (
    <header className="navbar">
        {/* Logo y título */}
        <div className="navbar-logo">
            <span className="logo-icon">🎮</span> 
            <a href="/" className="navbar-title">RetroGames</a>
      </div>


  


      <nav className={`navbar-links ${showMenu ? "active" : ""}`}>
        <a href="/" className="nav-link">Accueil</a>
        <a href="/90s" className="nav-link">90's</a>
        <a href="/2000s" className="nav-link">2000's</a>
        <a href="/login" className="nav-link">👤 Login</a>
      </nav>

      {/* Botón del menú móvil */}
      <button 
        className="navbar-toggle" 
        onClick={() => setShowMenu(!showMenu)}
        aria-label={showMenu ? "Cerrar menú" : "Abrir menú"}
      >
        {showMenu ? "✕" : "☰"} {/* Emojis para abrir/cerrar */}
      </button>
    </header>
  );
}

export default Navbar;