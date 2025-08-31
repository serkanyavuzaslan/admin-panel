import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ activeMenu, setActiveMenu }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userData');
    navigate('/login');
  };

  const menuItems = [
    { id: 'dashboard', label: 'Gösterge Paneli', icon: '🏠' },
    { id: 'reservations', label: 'Rezervasyonlar', icon: '📋' },
    { id: 'analytics', label: 'Analizler', icon: '📊' }
  ];
  

  const styles = {
    sidebar: {
      width: '250px',
      height: '100vh',
      backgroundColor: 'white',
      borderRight: '1px solid #e5e7eb',
      padding: '24px 0',
      position: 'fixed',
      left: 0,
      top: 0,
      boxShadow: '2px 0 4px rgba(0,0,0,0.1)'
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '0 24px',
      marginBottom: '32px'
    },
    logoIcon: {
      fontSize: '28px'
    },
    logoText: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#1f2937'
    },
    nav: {
      padding: '0 12px'
    },
    menuItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '12px 16px',
      margin: '4px 0',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      textDecoration: 'none',
      color: '#6b7280',
      fontSize: '14px',
      fontWeight: '500'
    },
    activeMenuItem: {
      backgroundColor: '#3b82f6',
      color: 'white',
      boxShadow: '0 2px 4px rgba(59, 130, 246, 0.3)'
    },
    inactiveMenuItem: {
      backgroundColor: 'transparent',
      color: '#6b7280'
    },
    menuIcon: {
      fontSize: '18px',
      width: '20px',
      textAlign: 'center'
    },
    divider: {
      height: '1px',
      backgroundColor: '#e5e7eb',
      margin: '16px 24px'
    },
    userSection: {
      position: 'absolute',
      bottom: '24px',
      left: '24px',
      right: '24px'
    },
    userInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '12px',
      backgroundColor: '#f8fafc',
      borderRadius: '8px'
    },
    avatar: {
      width: '36px',
      height: '36px',
      borderRadius: '50%',
      backgroundColor: '#3b82f6',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'all 0.2s ease'
    },
    userName: {
      fontSize: '14px',
      fontWeight: '500',
      color: '#1f2937',
      margin: 0
    },
    userRole: {
      fontSize: '12px',
      color: '#6b7280',
      margin: 0
    }
  };

  return (
    <div style={styles.sidebar}>
      {/* Logo */}
      <div style={styles.logo}>
        <span style={styles.logoIcon}>🍽️</span>
        <span style={styles.logoText}>Rezervasyon Yöneticisi</span>
      </div>

      {/* Navigation Menu */}
      <nav style={styles.nav}>
        {menuItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveMenu(item.id)}
            style={{
              ...styles.menuItem,
              ...(activeMenu === item.id ? styles.activeMenuItem : styles.inactiveMenuItem)
            }}
            onMouseEnter={(e) => {
              if (activeMenu !== item.id) {
                e.target.style.backgroundColor = '#f3f4f6';
              }
            }}
            onMouseLeave={(e) => {
              if (activeMenu !== item.id) {
                e.target.style.backgroundColor = 'transparent';
              }
            }}
          >
            <span style={styles.menuIcon}>{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </nav>

      {/* Divider */}
      <div style={styles.divider}></div>

      {/* User Info */}
      <div style={styles.userSection}>
        <div style={styles.userInfo}>
          <div 
            style={styles.avatar}
            onClick={handleLogout}
            title="Çıkış Yap"
          >
            ↩
          </div>
          <div>
            <p style={styles.userName}>Restorant Yönetici</p>
            <p style={styles.userRole}>Çıkış Yap</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;