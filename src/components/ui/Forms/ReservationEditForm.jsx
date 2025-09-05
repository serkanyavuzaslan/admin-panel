// 📁 Konum: src/components/ui/Forms/ReservationEditForm.jsx

import React from 'react';
import StatusBadge from '../Table/StatusBadge'; // İsteğe bağlı: Önizleme için

const ReservationEditForm = ({ 
  editForm, 
  setEditForm, 
  onSave, 
  onCancel 
}) => {
  const formStyles = {
    backgroundColor: 'white',
    padding: '32px',
    borderRadius: '12px',
    width: '400px',
    maxWidth: '90vw'
  };

  const formTitleStyles = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '24px',
    color: '#1f2937'
  };

  const formGroupStyles = {
    marginBottom: '16px'
  };

  const formLabelStyles = {
    display: 'block',
    fontSize: '14px',
    fontWeight: '500',
    color: '#374151',
    marginBottom: '4px'
  };

  const formInputStyles = {
    width: '100%',
    padding: '8px 12px',
    border: '1px solid #d1d5db',
    borderRadius: '6px',
    fontSize: '14px',
    boxSizing: 'border-box'
  };

  const formButtonsStyles = {
    display: 'flex',
    gap: '8px',
    justifyContent: 'flex-end',
    marginTop: '24px'
  };

  const saveButtonStyles = {
    padding: '8px 16px',
    backgroundColor: '#10b981',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500'
  };

  const cancelButtonStyles = {
    padding: '8px 16px',
    backgroundColor: '#7c7675ff',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500'
  };

  return (
    <div style={formStyles}>
      <h3 style={formTitleStyles}>Rezervasyon Düzenle</h3>
      
      <div style={formGroupStyles}>
        <label style={formLabelStyles}>Müşteri Adı</label>
        <input
          type="text"
          value={editForm.name || ''}
          onChange={(e) => setEditForm({...editForm, name: e.target.value})}
          style={formInputStyles}
        />
      </div>

      <div style={formGroupStyles}>
        <label style={formLabelStyles}>E-mail</label>
        <input
          type="email"
          value={editForm.email || ''}
          onChange={(e) => setEditForm({...editForm, email: e.target.value})}
          style={formInputStyles}
        />
      </div>

      <div style={formGroupStyles}>
        <label style={formLabelStyles}>Tarih</label>
        <input
          type="date"
          value={editForm.date || ''}
          onChange={(e) => setEditForm({...editForm, date: e.target.value})}
          style={formInputStyles}
        />
      </div>

      <div style={formGroupStyles}>
        <label style={formLabelStyles}>Saat</label>
        <input
          type="time"
          value={editForm.time || ''}
          onChange={(e) => setEditForm({...editForm, time: e.target.value})}
          style={formInputStyles}
        />
      </div>

      <div style={formGroupStyles}>
        <label style={formLabelStyles}>Misafir Sayısı</label>
        <input
          type="number"
          min="1"
          max="20"
          value={editForm.guests || ''}
          onChange={(e) => setEditForm({...editForm, guests: e.target.value})}
          style={formInputStyles}
        />
      </div>

      <div style={formGroupStyles}>
        <label style={formLabelStyles}>Durum</label>
        <select
          value={editForm.status || 'Beklemede'}
          onChange={(e) => setEditForm({...editForm, status: e.target.value})}
          style={formInputStyles}
        >
          <option value="Onaylandı">Onaylandı</option>
          <option value="Beklemede">Beklemede</option>
          <option value="İptal Edildi">İptal Edildi</option>
        </select>

        
      </div>

      <div style={formButtonsStyles}>
        <button 
          style={cancelButtonStyles}
          onClick={onCancel}
        >
          İptal
        </button>
        <button 
          style={saveButtonStyles}
          onClick={onSave}
        >
          Kaydet
        </button>
      </div>
    </div>
  );
};

export default ReservationEditForm;
