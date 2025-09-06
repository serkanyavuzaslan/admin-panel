import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/style.css";   // genel stiller
import "../../styles/custom.css";  // sayfaya özel stiller

const NotFound = () => {
  const [glitch, setGlitch] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="notfound-container">
      <div className="notfound-background">
        <div 
          className="notfound-shape" 
          style={{ width: "60px", height: "60px", left: "10%", animationDuration: "15s", animationDelay: "0s", transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }} 
        />
        <div 
          className="notfound-shape" 
          style={{ width: "40px", height: "40px", left: "20%", animationDuration: "12s", animationDelay: "2s", transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }} 
        />
        <div 
          className="notfound-shape" 
          style={{ width: "80px", height: "80px", left: "60%", animationDuration: "18s", animationDelay: "4s", transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }} 
        />
        <div 
          className="notfound-shape" 
          style={{ width: "50px", height: "50px", left: "80%", animationDuration: "14s", animationDelay: "1s", transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }} 
        />
        <div 
          className="notfound-shape" 
          style={{ width: "30px", height: "30px", left: "40%", animationDuration: "16s", animationDelay: "3s", transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }} 
        />
      </div>

      <div className="notfound-content fade-in-up">
        <h1 
          className="notfound-number" 
          style={{
            textShadow: glitch ? "2px 2px #ff0000, -2px -2px #00ff00" : "none",
            transform: glitch ? "skew(-5deg)" : "none"
          }}
        >
          404
        </h1>
        <h2 className="notfound-title">Oops! Sayfa Bulunamadı</h2>
        <p className="notfound-description">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>

        <div className="notfound-buttons">
          <Link to="/dashboard" className="btn btn-primary">
            🏠 Anasayfa'ya Dön
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
