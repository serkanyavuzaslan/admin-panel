// 📁 Konum: src/components/ui/Modal/EditModal.jsx

import React from 'react';

const EditModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const modalStyles = {
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
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div style={modalStyles} onClick={handleBackdropClick}>
      {children}
    </div>
  );
};

export default EditModal;