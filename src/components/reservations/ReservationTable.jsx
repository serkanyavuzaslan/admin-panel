import React from 'react';

const ReservationTable = ({ reservations, onEdit, onDelete, onStatusChange }) => {
  const getStatusStyle = (status) => {
    const base = {
      display: 'inline-block',
      padding: '4px 12px',
      fontSize: '12px',
      fontWeight: '600',
      borderRadius: '20px',
      border: 'none',
      cursor: 'pointer'
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

  const styles = {
    container: {
      marginBottom: "32px"
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '16px'
    },
    title: {
      fontSize: "20px",
      margin: 0,
      color: "#1f2937"
    },
    tableContainer: {
      overflowX: 'auto'
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      backgroundColor: "white",
      borderRadius: "12px",
      overflow: "hidden",
      border: "1px solid #e5e7eb",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)"
    },
    th: {
      textAlign: "left",
      padding: "16px 12px",
      fontSize: "12px",
      fontWeight: "600",
      color: "#6b7280",
      backgroundColor: "#f9fafb",
      borderBottom: "1px solid #e5e7eb",
      textTransform: "uppercase"
    },
    td: {
      padding: "16px 12px",
      fontSize: "14px",
      borderBottom: "1px solid #e5e7eb",
      verticalAlign: "top"
    },
    actionButton: {
      padding: '6px 12px',
      margin: '0 4px',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '12px',
      fontWeight: '500',
      transition: 'all 0.2s ease'
    },
    editButton: {
      backgroundColor: '#3b82f6',
      color: 'white'
    },
    deleteButton: {
      backgroundColor: '#ef4444',
      color: 'white'
    },
    noDataContainer: {
      textAlign: 'center',
      padding: '48px',
      color: '#6b7280',
      backgroundColor: 'white',
      borderRadius: '12px',
      border: '1px solid #e5e7eb'
    }
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('tr-TR');
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>
          Son Eklenen Rezervasyonlar  ({reservations.length})
        </h2>
      </div>
      
      {reservations.length === 0 ? (
        <div style={styles.noDataContainer}>
          <p style={{ fontSize: '16px' }}>Kriterlerinize uygun rezervasyon bulunamadı.</p>
        </div>
      ) : (
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>REZERVASYON ID</th>
                <th style={styles.th}>Müşteri</th>
                <th style={styles.th}>Tarih & Zaman</th>
                <th style={styles.th}>Misafir</th>
                <th style={styles.th}>Masa</th>
                <th style={styles.th}>Durum</th>
                <th style={styles.th}>Özel İstekler</th>
                <th style={styles.th}>İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((reservation) => (
                <tr key={reservation.id}>
                  <td style={styles.td}>
                    <strong>{reservation.id || `RSV-${String(reservations.indexOf(reservation) + 1).padStart(3, "0")}`}</strong>
                  </td>
                  <td style={styles.td}>
                    <div style={{ fontWeight: "600", marginBottom: "4px" }}>
                      {reservation.customerName}
                    </div>
                    {reservation.email && (
                      <div style={{ color: "#6b7280", fontSize: "13px", marginBottom: "2px" }}>
                        {reservation.email}
                      </div>
                    )}
                    {reservation.phone && (
                      <div style={{ color: "#6b7280", fontSize: "13px" }}>
                        {reservation.phone}
                      </div>
                    )}
                  </td>
                  <td style={styles.td}>
                    <div style={{ fontWeight: "500" }}>{formatDate(reservation.date)}</div>
                    <div style={{ color: "#6b7280", fontSize: "13px" }}>{reservation.time}</div>
                  </td>
                  <td style={styles.td}>
                    <span style={{ fontWeight: "500" }}>{reservation.guests} kişi</span>
                  </td>
                  <td style={styles.td}>
                    {reservation.table ? `Masa ${reservation.table}` : 'Atanmadı'}
                  </td>
                  <td style={styles.td}>
                    {onStatusChange ? (
                      <select
                        value={reservation.status}
                        onChange={(e) => onStatusChange(reservation.id, e.target.value)}
                        style={{
                          ...getStatusStyle(reservation.status),
                          border: 'none',
                          outline: 'none'
                        }}
                      >
                        <option value="Beklemede">Beklemede</option>
                        <option value="Onaylandı">Onaylandı</option>
                        <option value="İptal Edildi">İptal Edildi</option>
                      </select>
                    ) : (
                      <span style={getStatusStyle(reservation.status)}>
                        {reservation.status}
                      </span>
                    )}
                  </td>
                  <td style={styles.td}>
                    {reservation.specialRequests || '-'}
                  </td>
                  <td style={styles.td}>
                    <div style={{ display: 'flex', gap: '4px' }}>
                      <button
                        style={{...styles.actionButton, ...styles.editButton}}
                        onClick={() => onEdit(reservation)}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#2563eb'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#3b82f6'}
                      >
                        Düzenle
                      </button>
                      <button
                        style={{...styles.actionButton, ...styles.deleteButton}}
                        onClick={() => onDelete(reservation.id)}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#dc2626'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#ef4444'}
                      >
                        Sil
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ReservationTable;