import React from "react";

const EditReservationModal = ({ isOpen, onClose, formData, handleChange, handleSubmit }) => {
  if (!isOpen) return null;

  const styles = {
    modal: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    },
    modalContent: {
      backgroundColor: 'white',
      padding: '32px',
      borderRadius: '12px',
      width: '500px',
      maxWidth: '90vw',
      maxHeight: '90vh',
      overflow: 'auto'
    },
    formGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "16px"
    },
    input: {
      width: "100%",
      padding: "12px",
      border: "1px solid #d1d5db",
      color: "#374151",
      backgroundColor: "white",
      borderRadius: "8px",
      fontSize: "14px",
      boxSizing: "border-box",
      outline: "none",
      transition: "border-color 0.2s ease"
    },
    textarea: {
      width: "100%",
      padding: "12px",
      border: "1px solid #d1d5db",
      color: "#374151",
      backgroundColor: "white",
      borderRadius: "8px",
      fontSize: "14px",
      boxSizing: "border-box",
      outline: "none",
      transition: "border-color 0.2s ease",
      minHeight: "80px",
      resize: "vertical"
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      fontWeight: '500',
      color: '#374151'
    },
    buttonContainer: {
      display: 'flex',
      gap: '12px',
      justifyContent: 'flex-end',
      marginTop: '24px'
    },
    cancelButton: {
      padding: '10px 20px',
      backgroundColor: '#6b7280',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '14px',
      transition: 'background-color 0.2s ease'
    },
    saveButton: {
      padding: '10px 20px',
      backgroundColor: '#10b981',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '14px',
      transition: 'background-color 0.2s ease'
    }
  };

  const handleInputFocus = (e) => {
    e.target.style.borderColor = "#3b82f6";
  };

  const handleInputBlur = (e) => {
    e.target.style.borderColor = "#d1d5db";
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div style={styles.modal} onClick={handleBackdropClick}>
      <div style={styles.modalContent}>
        <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '24px', color: '#1f2937' }}>
          Rezervasyon Düzenle
        </h3>
        
        <div style={styles.formGrid}>
          <div>
            <label style={styles.label}>Müşteri Adı</label>
            <input
              type="text"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              style={styles.input}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          </div>

          <div>
            <label style={styles.label}>E-mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          </div>

          <div>
            <label style={styles.label}>Telefon</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={styles.input}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          </div>

          <div>
            <label style={styles.label}>Tarih</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              style={styles.input}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          </div>

          <div>
            <label style={styles.label}>Saat</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              style={styles.input}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          </div>

          <div>
            <label style={styles.label}>Misafir Sayısı</label>
            <input
              type="number"
              name="guests"
              min="1"
              max="20"
              value={formData.guests}
              onChange={handleChange}
              style={styles.input}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          </div>

          <div>
            <label style={styles.label}>Masa</label>
            <input
              type="text"
              name="table"
              value={formData.table}
              onChange={handleChange}
              style={styles.input}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          </div>

          <div>
            <label style={styles.label}>Durum</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              style={styles.input}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            >
              <option value="Beklemede">Beklemede</option>
              <option value="Onaylandı">Onaylandı</option>
              <option value="İptal Edildi">İptal Edildi</option>
            </select>
          </div>
        </div>

        <div style={{ marginTop: '16px' }}>
          <label style={styles.label}>Özel İstekler</label>
          <textarea
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleChange}
            style={styles.textarea}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        </div>

        <div style={styles.buttonContainer}>
          <button 
            type="button"
            style={styles.cancelButton}
            onClick={onClose}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#4b5563'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#6b7280'}
          >
            İptal
          </button>
          <button 
            type="button"
            style={styles.saveButton}
            onClick={handleSubmit}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#059669'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#10b981'}
          >
            Kaydet
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditReservationModal;