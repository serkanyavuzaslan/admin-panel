import React from 'react';

// Rezervasyon filtreleme kısmı.

const ReservationFilters = ({ 
  searchTerm, 
  setSearchTerm, 
  statusFilter, 
  setStatusFilter 
}) => {
  const filterContainerStyles = {
    display: 'flex',
    gap: '20px',
    marginBottom: '32px',
    padding: '24px',
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    border: '1px solid #f1f5f9',
    alignItems: 'end', // Labelları hizalamak için
    flexWrap: 'wrap' // Responsive davranış için
  };

  const searchContainerStyles = {
    flex: 1,
    minWidth: '300px',
    position: 'relative'
  };

  const searchIconStyles = {
    position: 'absolute',
    left: '16px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#6b7280',
    fontSize: '18px',
    zIndex: 1
  };

  const searchInputStyles = {
    width: '100%',
    padding: '14px 16px 14px 48px',
    border: '2px solid #e2e8f0',
    borderRadius: '12px',
    fontSize: '15px',
    backgroundColor: '#f8fafc',
    color: '#1f2937',
    transition: 'all 0.2s ease',
    outline: 'none',
    boxSizing: 'border-box'
  };

  const selectContainerStyles = {
    position: 'relative',
    minWidth: '200px'
  };

  const selectStyles = {
    width: '100%',
    padding: '14px 40px 14px 16px',
    border: '2px solid #e2e8f0',
    borderRadius: '12px',
    backgroundColor: '#f8fafc',
    color: '#374151',
    fontSize: '15px',
    appearance: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    outline: 'none',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 12px center',
    backgroundSize: '20px'
  };

  const labelStyles = {
    display: 'block',
    marginBottom: '8px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#374151',
    letterSpacing: '0.025em'
  };

  const handleSearchFocus = (e) => {
    e.target.style.borderColor = '#667eea';
    e.target.style.backgroundColor = '#ffffff';
    e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
  };

  const handleSearchBlur = (e) => {
    e.target.style.borderColor = '#e2e8f0';
    e.target.style.backgroundColor = '#f8fafc';
    e.target.style.boxShadow = 'none';
  };

  const handleSelectFocus = (e) => {
    e.target.style.borderColor = '#667eea';
    e.target.style.backgroundColor = '#ffffff';
    e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
  };

  const handleSelectBlur = (e) => {
    e.target.style.borderColor = '#e2e8f0';
    e.target.style.backgroundColor = '#f8fafc';
    e.target.style.boxShadow = 'none';
  };

  return (
    <div style={filterContainerStyles}>
      <div style={searchContainerStyles}>
        <label style={labelStyles}>Rezervasyon Ara</label>
        <div style={{ position: 'relative' }}>
          <span style={searchIconStyles}>🔍</span>
          <input
            type="text"
            placeholder="Misafir adı, telefon veya email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={searchInputStyles}
            onFocus={handleSearchFocus}
            onBlur={handleSearchBlur}
          />
        </div>
      </div>
      
      <div style={selectContainerStyles}>
        <label style={labelStyles}>Durum Filtresi</label>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          style={selectStyles}
          onFocus={handleSelectFocus}
          onBlur={handleSelectBlur}
        >
          <option value="">Tüm Durumlar</option>
          <option value="Onaylandı"> Onaylandı</option>
          <option value="Beklemede"> Beklemede</option>
          <option value="İptal Edildi"> İptal Edildi</option>
        </select>
      </div>
    </div>
  );
};

export default ReservationFilters;