// 📁 Konum: src/components/ui/Table/StatusBadge.jsx

import React from 'react';

const StatusBadge = ({ status }) => {
  const getStatusStyle = (status) => {
    const base = {
      display: 'inline-block',
      padding: '4px 8px',
      fontSize: '12px',
      fontWeight: '600',
      borderRadius: '20px'
    };
    
    switch (status) {
      case 'Onaylandı': 
        return { ...base, backgroundColor: '#dcfce7', color: '#166534' };
      case 'Beklemede': 
        return { ...base, backgroundColor: '#fef3c7', color: '#92400e' };
      case 'İptal Edildi': 
        return { ...base, backgroundColor: '#fee2e2', color: '#991b1b' };
      default: 
        return base;
    }
  };

  return (
    <span style={getStatusStyle(status)}>
      {status}
    </span>
  );
};

export default StatusBadge;