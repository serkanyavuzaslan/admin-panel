import React from "react";

const SearchAndFilter = ({ searchTerm, setSearchTerm, statusFilter, setStatusFilter }) => {
  const styles = {
    filterContainer: {
      display: 'flex',
      gap: '16px',
      marginBottom: '24px',
      alignItems: 'center',
      flexWrap: 'wrap'
    },
    searchInput: {
      flex: 1,
      minWidth: '250px',
      padding: '10px 12px',
      border: '1px solid #d1d5db',
      borderRadius: '8px',
      fontSize: '14px',
      backgroundColor: 'white',
      color: '#374151',
      outline: 'none',
      transition: 'border-color 0.2s ease',
      boxSizing: 'border-box'
    },
    select: {
      padding: '10px 12px',
      border: '1px solid #d1d5db',
      borderRadius: '8px',
      backgroundColor: 'white',
      color: '#374151',
      fontSize: '14px',
      minWidth: '150px',
      outline: 'none',
      transition: 'border-color 0.2s ease',
      cursor: 'pointer'
    }
  };

  const handleInputFocus = (e) => {
    e.target.style.borderColor = "#3b82f6";
  };

  const handleInputBlur = (e) => {
    e.target.style.borderColor = "#d1d5db";
  };

  return (
    <div style={styles.filterContainer}>
      <input
        type="text"
        placeholder="Rezervasyon ara (isim, ID, email)"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.searchInput}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        style={styles.select}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      >
        <option value="">Tüm Durumlar</option>
        <option value="Onaylandı">Onaylandı</option>
        <option value="Beklemede">Beklemde</option>
        <option value="İptal Edildi">İptal Edildi</option>
      </select>
    </div>
  );
};

export default SearchAndFilter;