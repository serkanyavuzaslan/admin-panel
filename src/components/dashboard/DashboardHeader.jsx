import React from 'react';

const DashboardHeader = () => {
  return (
    <div className="dashboard-header">
      <div className="decorative1"></div>
      <div className="decorative2"></div>
      <div style={{ position: 'relative', zIndex: 2 }}>
        <h1>🏠 Gösterge Paneli</h1>
        <p>Rezervasyon yönetimi ve analitikleri</p>
      </div>
    </div>
  );
};

export default DashboardHeader;
