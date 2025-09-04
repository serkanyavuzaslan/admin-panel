// 📁 Konum: src/components/ui/Table/TableRow.jsx

import React from 'react';

const TableRow = ({ reservation, onEdit, onDelete }) => {
  const tableRowStyles = {
    borderBottom: '1px solid #e5e7eb'
  };

  const tableCellStyles = {
    padding: '16px 24px',
    textAlign: 'left',
    fontSize: '14px',
    color: '#1f2937'
  };

  const statusStyles = {
    padding: '4px 12px',
    borderRadius: '16px',
    fontSize: '12px',
    fontWeight: '500',
    display: 'inline-block'
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Onaylandı':
        return { ...statusStyles, backgroundColor: '#dcfce7', color: '#16a34a' };
      case 'Beklemede':
        return { ...statusStyles, backgroundColor: '#fef3c7', color: '#d97706' };
      case 'İptal Edildi':
        return { ...statusStyles, backgroundColor: '#fee2e2', color: '#dc2626' };
      default:
        return { ...statusStyles, backgroundColor: '#f3f4f6', color: '#6b7280' };
    }
  };

  const buttonStyles = {
    padding: '6px 12px',
    fontSize: '12px',
    fontWeight: '500',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    marginRight: '8px',
    transition: 'all 0.2s ease'
  };

  const editButtonStyles = {
    ...buttonStyles,
    backgroundColor: '#3b82f6',
    color: 'white'
  };

  const deleteButtonStyles = {
    ...buttonStyles,
    backgroundColor: '#ef4444',
    color: 'white',
    marginRight: 0
  };

  const formatDateTime = (date, time) => {
    if (!date) return '-';
    const formattedDate = new Date(date).toLocaleDateString('tr-TR');
    return time ? `${formattedDate} ${time}` : formattedDate;
  };

  return (
    <tr style={tableRowStyles}>
      <td style={tableCellStyles}>
        <span style={{ fontWeight: '500' }}>{reservation.id || '-'}</span>
      </td>
      <td style={tableCellStyles}>
        <div>
          <div style={{ fontWeight: '500' }}>{reservation.customerName || '-'}</div>
          {reservation.email && (
            <div style={{ fontSize: '12px', color: '#6b7280' }}>{reservation.email}</div>
          )}
          {reservation.phone && (
            <div style={{ fontSize: '12px', color: '#6b7280' }}>{reservation.phone}</div>
          )}
        </div>
      </td>
      <td style={tableCellStyles}>
        {formatDateTime(reservation.date, reservation.time)}
      </td>
      <td style={tableCellStyles}>
        <span style={{ 
          backgroundColor: '#f3f4f6', 
          padding: '4px 8px', 
          borderRadius: '12px',
          fontSize: '12px',
          fontWeight: '500'
        }}>
          {reservation.guests || 1} kişi
        </span>
      </td>
      <td style={tableCellStyles}>
        <span style={{ 
          backgroundColor: '#e0e7ff', 
          color: '#3730a3',
          padding: '4px 8px', 
          borderRadius: '12px',
          fontSize: '12px',
          fontWeight: '500'
        }}>
          Masa {reservation.table || '-'}
        </span>
      </td>
      <td style={tableCellStyles}>
        <span style={getStatusStyle(reservation.status)}>
          {reservation.status || 'Beklemede'}
        </span>
      </td>
      <td style={tableCellStyles}>
        <span style={{ 
          fontSize: '12px', 
          color: '#6b7280',
          maxWidth: '200px',
          display: 'block',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }}>
          {reservation.specialRequests || 'Yok'}
        </span>
      </td>
      <td style={{...tableCellStyles, textAlign: 'right'}}>
        <button 
          style={editButtonStyles}
          onClick={() => onEdit && onEdit(reservation)}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#2563eb'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#3b82f6'}
        >
          Düzenle
        </button>
        <button 
          style={deleteButtonStyles}
          onClick={() => onDelete && onDelete(reservation.id)}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#dc2626'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#ef4444'}
        >
          Sil
        </button>
      </td>
    </tr>
  );
};

export default TableRow;