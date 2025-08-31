import React, { useState } from "react";

const ReservationsPage = () => {
  const [reservations, setReservations] = useState([
    {
      id: "RSV-001",
      customerName: "Ahmet Yılmaz",
      email: "ahmet@mail.com",
      phone: "+90 555 111 22 33",
      date: "2025-09-01",
      time: "18:00",
      guests: 4,
      table: "5",
      status: "Onaylandı",
      specialRequests: "Doğum günü pastası",
      createdAt: new Date().toISOString(),
    },
    {
      id: "RSV-002",
      customerName: "Serkan Yavuz",
      email: "serkan@mail.com",
      phone: "+90 532 181 65 43",
      date: "2025-10-07",
      time: "22:00",
      guests: 7,
      table: "9",
      status: "Beklemede",
      specialRequests: "Arkadaş Buluşması",
      createdAt: new Date().toISOString(),
    },
  ]);

  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    table: "",
    specialRequests: "",
  });

  const [editingReservation, setEditingReservation] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('Tüm Durumlar');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.customerName || !formData.date || !formData.time) {
      alert('Lütfen zorunlu alanları doldurun!');
      return;
    }

    const newReservation = {
      id: `RSV-${String(reservations.length + 1).padStart(3, "0")}`,
      ...formData,
      status: "Beklemede",
      createdAt: new Date().toISOString(),
    };

    setReservations((prev) => [...prev, newReservation]);
    
    // Formu temizle
    setFormData({
      customerName: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      table: "",
      specialRequests: "",
    });
    
    alert('Rezervasyon başarıyla eklendi!');
  };

  const handleEdit = (reservation) => {
    setEditingReservation({ ...reservation });
  };

  const handleSaveEdit = () => {
    setReservations(prev => 
      prev.map(reservation => 
        reservation.id === editingReservation.id ? editingReservation : reservation
      )
    );
    setEditingReservation(null);
    alert('Rezervasyon güncellendi!');
  };

  const handleDelete = (id) => {
    if (window.confirm('Bu rezervasyonu silmek istediğinizden emin misiniz?')) {
      setReservations(prev => prev.filter(reservation => reservation.id !== id));
      alert('Rezervasyon silindi!');
    }
  };

  const handleStatusChange = (id, newStatus) => {
    setReservations(prev => 
      prev.map(reservation => 
        reservation.id === id ? { ...reservation, status: newStatus } : reservation
      )
    );
  };

  // Filtreleme
  const filteredReservations = reservations.filter(reservation => {
    const matchesSearch = reservation.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         reservation.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (reservation.email && reservation.email.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesStatus = statusFilter === 'Tüm Durumlar' || reservation.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

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
    container: { display: "grid", gap: "32px" },
    form: {
      backgroundColor: "white",
      padding: "24px",
      borderRadius: "12px",
      border: "1px solid #e5e7eb",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)"
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
      boxSizing: "border-box"
    },
    button: {
      padding: "12px 24px",
      backgroundColor: "#3b82f6",
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "600",
      fontSize: "14px",
      transition: "background-color 0.2s ease"
    },
    filterContainer: {
      display: 'flex',
      gap: '16px',
      marginBottom: '24px',
      alignItems: 'center'
    },
    searchInput: {
      flex: 1,
      padding: '10px 12px',
      border: '1px solid #d1d5db',
      borderRadius: '8px',
      fontSize: '14px',
      backgroundColor: 'white',
      color: '#374151'
    },
    select: {
      padding: '10px 12px',
      border: '1px solid #d1d5db',
      borderRadius: '8px',
      backgroundColor: 'white',
      color: '#374151',
      fontSize: '14px',
      minWidth: '150px'
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
    }
  };

  return (
    <div>
      <h1 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "16px", color: "#1f2937" }}>
        Rezervasyon Yönetimi
      </h1>

      <div style={styles.container}>
        {/* Rezervasyon Ekleme Formu */}
        <div style={styles.form}>
          <h2 style={{ fontSize: "20px", marginBottom: "24px", color: "#1f2937" }}>
            Yeni Rezervasyon Ekle
          </h2>

          <div style={styles.formGrid}>
            <input
              style={styles.input}
              type="text"
              name="customerName"
              placeholder="Müşteri Adı *"
              value={formData.customerName}
              onChange={handleChange}
              required
            />
            <input
              style={styles.input}
              type="email"
              name="email"
              placeholder="E-posta"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              style={styles.input}
              type="text"
              name="phone"
              placeholder="Telefon"
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              style={styles.input}
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
            <input
              style={styles.input}
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
            <input
              style={styles.input}
              type="number"
              name="guests"
              placeholder="Misafir Sayısı"
              value={formData.guests}
              onChange={handleChange}
              required
            />
            <input
              style={styles.input}
              type="text"
              name="table"
              placeholder="Masa Numarası"
              value={formData.table}
              onChange={handleChange}
            />
          </div>
          
          <textarea
            style={{ ...styles.input, marginTop: "16px", minHeight: "80px", resize: "vertical" }}
            name="specialRequests"
            placeholder="Özel İstekler (Opsiyonel)"
            value={formData.specialRequests}
            onChange={handleChange}
          />

          <button 
            type="submit" 
            style={styles.button}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#2563eb'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#3b82f6'}
            onClick={handleSubmit}
          >
            Rezervasyon Ekle
          </button>
        </div>

        {/* Arama ve Filtreleme */}
        <div style={styles.filterContainer}>
          <input
            type="text"
            placeholder="Rezervasyon ara (isim, ID, email)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.searchInput}
          />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            style={styles.select}
          >
            <option>Tüm Durumlar</option>
            <option>Onaylandı</option>
            <option>Beklemede</option>
            <option>İptal Edildi</option>
          </select>
        </div>

        {/* Rezervasyon Listesi */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h2 style={{ fontSize: "20px", margin: 0, color: "#1f2937" }}>
              Rezervasyon Listesi ({filteredReservations.length})
            </h2>
          </div>
          
          <div style={{ overflowX: 'auto' }}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>REZERVASYON ID</th>
                  <th style={styles.th}>Müşteri Bilgileri</th>
                  <th style={styles.th}>Tarih & Saat</th>
                  <th style={styles.th}>Misafir</th>
                  <th style={styles.th}>Masa</th>
                  <th style={styles.th}>Durum</th>
                  <th style={styles.th}>Özel İstekler</th>
                  <th style={styles.th}>İşlemler</th>
                </tr>
              </thead>
              <tbody>
                {filteredReservations.map((reservation) => (
                  <tr key={reservation.id}>
                    <td style={styles.td}>
                      <strong>{reservation.id}</strong>
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
                      <div style={{ fontWeight: "500" }}>{reservation.date}</div>
                      <div style={{ color: "#6b7280", fontSize: "13px" }}>{reservation.time}</div>
                    </td>
                    <td style={styles.td}>
                      <span style={{ fontWeight: "500" }}>{reservation.guests} kişi</span>
                    </td>
                    <td style={styles.td}>
                      {reservation.table ? `Masa ${reservation.table}` : 'Atanmadı'}
                    </td>
                    <td style={styles.td}>
                      <select
                        value={reservation.status}
                        onChange={(e) => handleStatusChange(reservation.id, e.target.value)}
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
                    </td>
                    <td style={styles.td}>
                      {reservation.specialRequests || '-'}
                    </td>
                    <td style={styles.td}>
                      <div style={{ display: 'flex', gap: '4px' }}>
                        <button
                          style={{...styles.actionButton, ...styles.editButton}}
                          onClick={() => handleEdit(reservation)}
                          onMouseEnter={(e) => e.target.style.backgroundColor = '#2563eb'}
                          onMouseLeave={(e) => e.target.style.backgroundColor = '#3b82f6'}
                        >
                          Düzenle
                        </button>
                        <button
                          style={{...styles.actionButton, ...styles.deleteButton}}
                          onClick={() => handleDelete(reservation.id)}
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

          {filteredReservations.length === 0 && (
            <div style={{ 
              textAlign: 'center', 
              padding: '48px', 
              color: '#6b7280',
              backgroundColor: 'white',
              borderRadius: '12px',
              border: '1px solid #e5e7eb'
            }}>
              <p style={{ fontSize: '16px' }}>Kriterlerinize uygun rezervasyon bulunamadı.</p>
            </div>
          )}
        </div>
      </div>

      {/* Düzenleme Modal */}
      {editingReservation && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '24px', color: '#1f2937' }}>
              Rezervasyon Düzenle
            </h3>
            
            <div style={styles.formGrid}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#374151' }}>
                  Müşteri Adı
                </label>
                <input
                  type="text"
                  value={editingReservation.customerName}
                  onChange={(e) => setEditingReservation({...editingReservation, customerName: e.target.value})}
                  style={styles.input}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#374151' }}>
                  E-mail
                </label>
                <input
                  type="email"
                  value={editingReservation.email}
                  onChange={(e) => setEditingReservation({...editingReservation, email: e.target.value})}
                  style={styles.input}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#374151' }}>
                  Telefon
                </label>
                <input
                  type="text"
                  value={editingReservation.phone}
                  onChange={(e) => setEditingReservation({...editingReservation, phone: e.target.value})}
                  style={styles.input}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#374151' }}>
                  Tarih
                </label>
                <input
                  type="date"
                  value={editingReservation.date}
                  onChange={(e) => setEditingReservation({...editingReservation, date: e.target.value})}
                  style={styles.input}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#374151' }}>
                  Saat
                </label>
                <input
                  type="time"
                  value={editingReservation.time}
                  onChange={(e) => setEditingReservation({...editingReservation, time: e.target.value})}
                  style={styles.input}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#374151' }}>
                  Misafir Sayısı
                </label>
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={editingReservation.guests}
                  onChange={(e) => setEditingReservation({...editingReservation, guests: parseInt(e.target.value)})}
                  style={styles.input}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#374151' }}>
                  Masa
                </label>
                <input
                  type="text"
                  value={editingReservation.table}
                  onChange={(e) => setEditingReservation({...editingReservation, table: e.target.value})}
                  style={styles.input}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#374151' }}>
                  Durum
                </label>
                <select
                  value={editingReservation.status}
                  onChange={(e) => setEditingReservation({...editingReservation, status: e.target.value})}
                  style={styles.input}
                >
                  <option value="Beklemede">Beklemede</option>
                  <option value="Onaylandı">Onaylandı</option>
                  <option value="İptal Edildi">İptal Edildi</option>
                </select>
              </div>
            </div>

            <div style={{ marginTop: '16px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#374151' }}>
                Özel İstekler
              </label>
              <textarea
                value={editingReservation.specialRequests}
                onChange={(e) => setEditingReservation({...editingReservation, specialRequests: e.target.value})}
                style={{ ...styles.input, minHeight: '80px', resize: 'vertical' }}
              />
            </div>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '24px' }}>
              <button 
                type="button"
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#6b7280',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
                onClick={() => setEditingReservation(null)}
              >
                İptal
              </button>
              <button 
                type="button"
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#10b981',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
                onClick={handleSaveEdit}
              >
                Kaydet
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReservationsPage;