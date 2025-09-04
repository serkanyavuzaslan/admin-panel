// 📁 Konum: src/components/ui/Cards/StatCard.jsx

import React from 'react';

const StatCard = ({ title, value, change, color, icon }) => {
  const cardStyles = {
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    padding: '24px',
    border: '1px solid #e5e7eb'
  };

  const containerStyles = {
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  };

  const titleStyles = {
    fontSize: '14px', 
    color: '#6b7280', 
    margin: 0
  };

  const valueStyles = {
    fontSize: '24px', 
    fontWeight: 'bold', 
    margin: '8px 0'
  };

  const changeStyles = {
    fontSize: '14px', 
    color: '#06aa5dff', 
    margin: 0
  };

  const iconContainerStyles = {
    backgroundColor: color,
    padding: '12px',
    borderRadius: '8px',
    fontSize: '20px'
  };

  return (
    <div style={cardStyles}>
      <div style={containerStyles}>
        <div>
          <p style={titleStyles}>{title}</p>
          <p style={valueStyles}>{value}</p>
          {change && (
            <p style={changeStyles}>{change}</p>
          )}
        </div>
        <div style={iconContainerStyles}>
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;