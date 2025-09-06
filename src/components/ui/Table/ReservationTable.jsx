// 📁 Konum: src/components/ui/Table/ReservationTable.jsx

import React from 'react';
import TableRow from './TableRow';
import ReservationFilters from '../../dashboard/ReservationFilters';

const ReservationTable = ({ 
  reservations, 
  onEdit, 
  onDelete,
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter
}) => {
  const tableContainerStyles = {
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    border: '1px solid #e5e7eb'
  };

  const tableHeaderStyles = {
    padding: '24px',
    borderBottom: '1px solid #e5e7eb'
  };

  const tableStyles = {
    width: '100%',
    borderCollapse: 'collapse'
  };

  const tableHeadStyles = {
    backgroundColor: '#f9fafb'
  };

  const tableHeaderCellStyles = {
    padding: '12px 24px',
    textAlign: 'left',
    fontSize: '12px',
    fontWeight: '500',
    color: '#6b7280',
    textTransform: 'uppercase'
  };

  const noResultsStyles = {
    textAlign: 'center', 
    padding: '48px', 
    color: '#6b7280'
  };

  return (
    <div style={tableContainerStyles}>
      <div style={tableHeaderStyles}>
        <h2 style={{fontSize: '20px', fontWeight: '600', margin: 0}}>Eklenen Rezervasyonlar</h2>
        <p style={{color: '#6b7280', margin: '4px 0 0 0'}}>Tüm rezervasyon isteklerini yönetin ve takip edin.</p>
        
      </div>

      <div style={{overflowX: 'auto'}}>
        <table style={tableStyles}>
          <thead style={tableHeadStyles}>
            <tr>
              <th style={tableHeaderCellStyles}>Rezervasyon ID</th>
              <th style={tableHeaderCellStyles}>Müşteri</th>
              <th style={tableHeaderCellStyles}>Tarih & Zaman</th>
              <th style={tableHeaderCellStyles}>Misafir</th>
              <th style={tableHeaderCellStyles}>Masa</th>
              <th style={tableHeaderCellStyles}>Durum</th>
              <th style={tableHeaderCellStyles}>Özel İstekler</th>
              <th style={{...tableHeaderCellStyles, textAlign: 'right'}}>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => (
              <TableRow
                key={reservation.id}
                reservation={reservation}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
          </tbody>
        </table>
      </div>

      {reservations.length === 0 && (
        <div style={noResultsStyles}>
          <p>Kriterlerinize uygun rezervasyon bulunamadı.</p>
        </div>
      )}
    </div>
  );
};

export default ReservationTable;