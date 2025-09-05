import React from 'react';

const ReservationHeader = () => {
  const headerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '32px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '16px',
    padding: '32px 40px',
    boxShadow: '0 10px 25px rgba(102, 126, 234, 0.15)',
    position: 'relative',
    overflow: 'hidden'
  };

  const titleStyles = {
   fontSize: '30px',
    fontWeight: '700',
    color: '#ffffff',
    margin: 0,
    textShadow: '0 2px 4px rgba(0,0,0,0.1)',
    letterSpacing: '-0.5px'
  };

  const subtitleStyles = {
    fontSize: '16px',
    color: 'rgba(255, 255, 255, 0.8)',
    margin: '8px 0 0 0',
    fontWeight: '400'
  };

  const decorativeStyles = {
    position: 'absolute',
    top: '-50px',
    right: '-50px',
    width: '150px',
    height: '150px',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '50%',
    opacity: 0.6
  };

  const decorativeStyles2 = {
    position: 'absolute',
    bottom: '-30px',
    left: '-30px',
    width: '100px',
    height: '100px',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '50%'
  };

  return (
    <div style={headerStyles}>
      <div style={decorativeStyles}></div>
      <div style={decorativeStyles2}></div>
      <div style={{ position: 'relative', zIndex: 2 }}>
        <h1 style={titleStyles}>📅 Reservasyon Ekle</h1>
        <p style={subtitleStyles}>Yeni eklenen rezervasyonları anasayfaya taşır</p>
      </div>
    </div>
  );
};

export default ReservationHeader;