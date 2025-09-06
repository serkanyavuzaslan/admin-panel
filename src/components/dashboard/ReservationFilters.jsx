import React from 'react';

const ReservationFilters = ({ searchTerm, setSearchTerm, statusFilter, setStatusFilter }) => {
  return (
    <div className="filters-container">
      <div className="search-container" style={{ position: 'relative' }}>
        <label className="filters-label">Rezervasyon Ara</label>
        <span style={{ 
          position: 'absolute',
          left: '16px',
          top: '50%',
          transform: 'translateY(-50%)',
          color: '#6b7280',
          fontSize: '18px',
          zIndex: 1,
          marginTop: '12px' // Label yüksekliğini kompanse etmek için
        }}>🔍</span>
        <input
          type="text"
          placeholder="Misafir adı, telefon veya email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="select-container">
        <label className="filters-label">Durum Filtresi</label>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">Tüm Durumlar</option>
          <option value="Onaylandı">Onaylandı</option>
          <option value="Beklemede">Beklemede</option>
          <option value="İptal Edildi">İptal Edildi</option>
        </select>
      </div>
    </div>
  );
};

export default ReservationFilters;