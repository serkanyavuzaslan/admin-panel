import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../styles/custom.css";

const Sidebar = ({ onLogout = () => {} }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveMenu = () => {
    if (location.pathname === "/dashboard") return "dashboard";
    if (location.pathname === "/analytics") return "analytics";
    if (location.pathname === "/reservations") return "reservations";
    if (location.pathname === "/settings") return "settings";
    return "dashboard";
  };

  const activeMenu = getActiveMenu();

  const menuItems = [
    { id: "dashboard", label: "Ana Sayfa", icon: "🏠", description: "Genel bakış ve özet", path: "/dashboard" },
    { id: "reservations", label: "Rezervasyon", icon: "📅", description: "Rezervasyon yönetimi", path: "/reservations" },
    { id: "analytics", label: "Analiz", icon: "📊", description: "Raporlar ve istatistikler", path: "/analytics" },
  ];

  const handleMenuClick = (item) => navigate(item.path);
  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar-logo">
        <h2>🍽️ RestaurantPro</h2>
        <p>Yönetim Paneli</p>
      </div>

      <div className="sidebar-user">
        <div className="user-avatar">🙋🏻‍♂️</div>
        <div>
          <p className="user-name">Admin User</p>
          <p className="user-role">Yönetici</p>
        </div>
      </div>

      <div className="sidebar-menu">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`menu-item ${activeMenu === item.id ? "active" : ""}`}
            onClick={() => handleMenuClick(item)}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <span className="menu-icon">{item.icon}</span>
            <div className="menu-text">
              <div className="menu-label">{item.label}</div>
              <div className="menu-desc">{item.description}</div>
            </div>
            {activeMenu === item.id && <span className="active-dot">●</span>}
          </div>
        ))}
      </div>

      <div className="sidebar-logout">
        <button className="logout-btn" onClick={handleLogout}>
          <span>🚪</span> Çıkış Yap
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
