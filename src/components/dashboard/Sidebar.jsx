import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = ({ onLogout = () => {} }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Mevcut sayfa URL'sine göre aktif menüyü belirle
  const getActiveMenu = () => {
    if (location.pathname === '/dashboard') return 'dashboard';
    if (location.pathname === '/analytics') return 'analytics';
    if (location.pathname === '/reservations') return 'reservations';
    if (location.pathname === '/settings') return 'settings';
    return 'dashboard'; // varsayılan
  };

  const activeMenu = getActiveMenu();

  const menuItems = [
    {
      id: 'dashboard',
      label: 'Ana Sayfa',
      icon: '🏠',
      description: 'Genel bakış ve özet',
      path: '/dashboard'
    },
    
    {
      id: 'reservations',
      label: 'Rezervasyon',
      icon: '📅',
      description: 'Rezervasyon yönetimi',
      path: '/reservations'
    },
    {
      id: 'analytics',
      label: 'Analiz',
      icon: '📊',
      description: 'Raporlar ve istatistikler',
      path: '/analytics'
    }
    
  ];

  const handleMenuClick = (item) => {
    navigate(item.path);
  };

  const handleLogout = () => {
    // Logout işlemi sonrası login sayfasına yönlendir
    onLogout();
    navigate('/login');
  };

  return (
    <div style={{
      width: '260px',
      height: '100vh',
      background: 'linear-gradient(180deg, #1e293b 0%, #334155 100%)',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '4px 0 20px rgba(0, 0, 0, 0.1)',
      position: 'fixed',
      left: '0',
      top: '0',
      zIndex: 1000
    }}>
      {/* Logo Section */}
      <div style={{
        padding: '28px 24px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '24px',
          fontWeight: '800',
          color: '#ffffff',
          margin: 0,
          letterSpacing: '-0.5px'
        }}>
          🍽️ RestaurantPro
        </h2>
        <p style={{
          fontSize: '12px',
          color: 'rgba(255, 255, 255, 0.6)',
          marginTop: '4px',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          Yönetim Paneli
        </p>
      </div>

      {/* User Info */}
      <div style={{
        padding: '16px 24px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '16px',
          color: '#ffffff',
          fontWeight: '600'
        }}>
          🙋🏻‍♂️
        </div>
        <div>
          <p style={{
            fontSize: '14px',
            fontWeight: '600',
            color: '#ffffff',
            margin: 0
          }}>
            Admin User
          </p>
          <p style={{
            fontSize: '12px',
            color: 'rgba(255, 255, 255, 0.6)',
            margin: 0
          }}>
            Yönetici
          </p>
        </div>
      </div>

      {/* Menu Section */}
      <div style={{
        flex: 1,
        padding: '24px 0',
        overflowY: 'auto'
      }}>
        {menuItems.map((item) => (
          <div
            key={item.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '15px 20px',
              margin: '4px 16px',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              background: activeMenu === item.id 
                ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                : hoveredItem === item.id 
                  ? 'rgba(255, 255, 255, 0.05)'
                  : 'transparent',
              border: activeMenu === item.id ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid transparent',
              boxShadow: activeMenu === item.id ? '0 4px 12px rgba(102, 126, 234, 0.3)' : 'none',
              transform: hoveredItem === item.id ? 'translateX(-2px)' : 'translateX(0)'
            }}
            onClick={() => handleMenuClick(item)}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <span style={{
              fontSize: '20px',
              marginRight: '16px',
              opacity: activeMenu === item.id ? 1 : 0.8
            }}>
              {item.icon}
            </span>
            <div style={{ flex: 1 }}>
              <div style={{
                fontSize: '15px',
                fontWeight: activeMenu === item.id ? '600' : '500',
                color: activeMenu === item.id ? '#ffffff' : 'rgba(255, 255, 255, 0.9)',
                flex: 1
              }}>
                {item.label}
              </div>
              <div style={{
                fontSize: '11px',
                color: 'rgba(255, 255, 255, 0.6)',
                marginTop: '2px'
              }}>
                {item.description}
              </div>
            </div>
            {activeMenu === item.id && (
              <span style={{ 
                color: 'rgba(255, 255, 255, 0.8)', 
                fontSize: '12px',
                marginLeft: '8px'
              }}>
                ●
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Logout Section */}
      <div style={{
        padding: '24px',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <button
          style={{
            width: '100%',
            padding: '14px 20px',
            background: 'rgba(239, 68, 68, 0.34)',
            border: '1px solid rgba(249, 147, 147, 0.3)',
            borderRadius: '12px',
            color: '#ffffffff',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
          onClick={handleLogout}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(206, 20, 20, 0.5)';
            e.target.style.borderColor = 'rgba(235, 144, 144, 0.5)';
            e.target.style.color = '#ffffff';
            e.target.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(239, 68, 68, 0.37)';
            e.target.style.borderColor = 'rgba(239, 68, 68, 0.3)';
            e.target.style.color = '#ffffffff';
            e.target.style.transform = 'translateY(0)';
          }}
        >
          <span>🚪</span>
          Çıkış Yap
        </button>
      </div>
    </div>
  );
};

export default Sidebar;