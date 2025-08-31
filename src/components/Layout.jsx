import React, { useState } from 'react';
import AnalyticsPage from "./AnalyticsPage";
import ReservationsPage from "./ReservationsPage";
import Sidebar from './Sidebar';

// Dashboard Component (eski Dashboard.jsx içeriğini buraya taşıdık)
const DashboardContent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [editingReservation, setEditingReservation] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [reservations, setReservations] = useState([
    {
      id: 'RSV-001',
      customer: {
        name: 'Ahmet Yılmaz',
        email: 'ahmet.yilmaz@email.com',
        phone: '+90 555 012 34 56'
      },
      date: '2025-08-30',
      time: '18:00',
      guests: 4,
      table: 'Masa 12',
      status: 'Onaylandı',
      specialRequests: 'Doğum günü kutlaması'
    },
    {
      id: 'RSV-002',
      customer: {
        name: 'Elif Demir',
        email: 'elif.demir@email.com',
        phone: '+90 555 012 34 57'
      },
      date: '2025-08-30',
      time: '19:30',
      guests: 2,
      table: 'Masa 5',
      status: 'Beklemede',
      specialRequests: 'Vejetaryen menü'
    },
    {
      id: 'RSV-003',
      customer: {
        name: 'Mehmet Kaya',
        email: 'mehmet.kaya@email.com',
        phone: '+90 555 012 34 58'
      },
      date: '2025-08-31',
      time: '20:00',
      guests: 6,
      table: 'Masa 8',
      status: 'Onaylandı',
      specialRequests: 'Kurumsal akşam yemeği'
    },
    {
      id: 'RSV-004',
      customer: {
        name: 'Ayşe Çelik',
        email: 'ayse.celik@email.com',
        phone: '+90 555 012 34 59'
      },
      date: '2025-08-31',
      time: '17:00',
      guests: 3,
      table: 'Masa 3',
      status: 'İptal Edildi',
      specialRequests: 'Yok'
    },
    {
      id: 'RSV-005',
      customer: {
        name: 'Alper Ay',
        email: 'alperay@email.com',
        phone: '+90 555 175 41 59'
      },
      date: '2025-09-11',
      time: '17:00',
      guests: 2,
      table: 'Masa 3',
      status: 'Onaylandı',
      specialRequests: 'Randevu'
    },
    {
      id: 'RSV-006',
      customer: {
        name: 'Senem Aka',
        email: 'senem.aka@email.com',
        phone: '+90 535 127 34 76'
      },
      date: '2025-08-30',
      time: '18:00',
      guests: 2,
      table: 'Masa 17',
      status: 'Onaylandı',
      specialRequests: 'Yok'
    }
  ]);

  // Rezervasyon silme fonksiyonu
  const handleDelete = (reservationId) => {
    if (window.confirm('Bu rezervasyonu silmek istediğinizden emin misiniz?')) {
      setReservations(reservations.filter(reservation => reservation.id !== reservationId));
    }
  };

  // Rezervasyon düzenleme fonksiyonu
  const handleEdit = (reservationId) => {
    const reservation = reservations.find(r => r.id === reservationId);
    if (reservation) {
      setEditingReservation(reservationId);
      setEditForm({
        name: reservation.customer.name,
        email: reservation.customer.email,
        date: reservation.date,
        time: reservation.time,
        guests: reservation.guests
      });
    }
  };

  // Düzenleme kaydetme fonksiyonu
  const handleSaveEdit = () => {
    setReservations(reservations.map(r => 
      r.id === editingReservation ? {
        ...r,
        customer: { ...r.customer, name: editForm.name, email: editForm.email },
        date: editForm.date,
        time: editForm.time,
        guests: parseInt(editForm.guests)
      } : r
    ));
    setEditingReservation(null);
    setEditForm({});
  };

  // Düzenleme iptal etme fonksiyonu
  const handleCancelEdit = () => {
    setEditingReservation(null);
    setEditForm({});
  };

  const filteredReservations = reservations.filter(reservation => {
    const matchesSearch = reservation.customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         reservation.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All Status' || reservation.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusStyle = (status) => {
    const base = {
      display: 'inline-block',
      padding: '4px 8px',
      fontSize: '12px',
      fontWeight: '600',
      borderRadius: '20px'
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

  const stats = [
    { title: 'Toplam Rezervasyon', value: reservations.length.toString(), change: '+17% geçen aydan beri', color: '#3b82f6' },
    { title: 'Onaylandı', value: reservations.filter(r => r.status === 'Onaylandı').length.toString(), change: '+9% geçen aydan beri', color: '#10b981' },
    { title: 'Önerilen Kampanya', value: '17', change: '+12% geçen aydan beri', color: '#f59e0b' },
    { title: 'Toplam Misafirler', value: reservations.reduce((total, r) => total + r.guests, 0).toString(), change: '+35% geçen aydan beri', color: '#8b5cf6' }
  ];

  const contentStyles = {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '32px'
    },
    title: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: '#1f2937',
      margin: 0
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '24px',
      marginBottom: '32px'
    },
    statCard: {
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      padding: '24px',
      border: '1px solid #e5e7eb'
    },
    tableContainer: {
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      border: '1px solid #e5e7eb'
    },
    tableHeader: {
      padding: '24px',
      borderBottom: '1px solid #e5e7eb'
    },
    filterContainer: {
      display: 'flex',
      gap: '16px',
      marginTop: '16px'
    },
    searchInput: {
      flex: 1,
      padding: '8px 12px',
      border: '1px solid #d1d5db',
      borderRadius: '8px',
      fontSize: '14px',
      backgroundColor: 'white', 
      color: '#1f2937'          
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse'
    },
    tableHead: {
      backgroundColor: '#f9fafb'
    },
    tableHeaderCell: {
      padding: '12px 24px',
      textAlign: 'left',
      fontSize: '12px',
      fontWeight: '500',
      color: '#6b7280',
      textTransform: 'uppercase'
    },
    tableRow: {
      borderTop: '1px solid #e5e7eb'
    },
    tableCell: {
      padding: '16px 24px',
      verticalAlign: 'top'
    },
    actionButton: {
      padding: '6px 12px',
      margin: '0 2px',
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
    editModal: {
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
    editForm: {
      backgroundColor: 'white',
      padding: '32px',
      borderRadius: '12px',
      width: '400px',
      maxWidth: '90vw'
    },
    formTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '24px',
      color: '#1f2937'
    },
    formGroup: {
      marginBottom: '16px'
    },
    formLabel: {
      display: 'block',
      fontSize: '14px',
      fontWeight: '500',
      color: '#374151',
      marginBottom: '4px'
    },
    formInput: {
      width: '100%',
      padding: '8px 12px',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      fontSize: '14px',
      boxSizing: 'border-box'
    },
    formButtons: {
      display: 'flex',
      gap: '8px',
      justifyContent: 'flex-end',
      marginTop: '24px'
    },
    saveButton: {
      padding: '8px 16px',
      backgroundColor: '#10b981',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '500'
    },
    cancelButton: {
      padding: '8px 16px',
      backgroundColor: '#6b7280',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '500'
    }
  };

  return (
    <div>
      {/* Header */}
      <div style={contentStyles.header}>
        <h1 style={contentStyles.title}>Gösterge Paneli</h1>
      </div>

      {/* İstatistik Kartları */}
      <div style={contentStyles.statsGrid}>
        {stats.map((stat, index) => (
          <div key={index} style={contentStyles.statCard}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <div>
                <p style={{fontSize: '14px', color: '#6b7280', margin: 0}}>{stat.title}</p>
                <p style={{fontSize: '24px', fontWeight: 'bold', margin: '8px 0'}}>{stat.value}</p>
                {stat.change && (
                  <p style={{fontSize: '14px', color: '#06aa5dff', margin: 0}}>{stat.change}</p>
                )}
              </div>
              <div style={{
                backgroundColor: stat.color,
                padding: '12px',
                borderRadius: '8px',
                fontSize: '20px'
              }}>
                📊
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Rezervasyonlar Tablosu */}
      <div style={contentStyles.tableContainer}>
        <div style={contentStyles.tableHeader}>
          <h2 style={{fontSize: '20px', fontWeight: '600', margin: 0}}>Son Rezervasyonlar</h2>
          <p style={{color: '#6b7280', margin: '4px 0 0 0'}}>Tüm rezervasyon isteklerini yönetin ve takip edin.</p>
          
          <div style={contentStyles.filterContainer}>
            <input
              type="text"
              placeholder="Rezervasyon ara"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={contentStyles.searchInput}
            />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              style={{
                padding: '8px 12px',
                border: '1px solid #030507ff',
                borderRadius: '8px',
                backgroundColor: 'white',
                color: '#575f6bff',         
                fontSize: '14px',
                appearance: 'none'
              }}
            >
              <option>Tüm Durumlar</option>
              <option>Onaylandı</option>
              <option>Beklemede</option>
              <option>İptal Edildi</option>
            </select>
          </div>
        </div>

        <div style={{overflowX: 'auto'}}>
          <table style={contentStyles.table}>
            <thead style={contentStyles.tableHead}>
              <tr>
                <th style={contentStyles.tableHeaderCell}>Rezervasyon ID</th>
                <th style={contentStyles.tableHeaderCell}>Müşteri</th>
                <th style={contentStyles.tableHeaderCell}>Tarih & Zaman</th>
                <th style={contentStyles.tableHeaderCell}>Misafir</th>
                <th style={contentStyles.tableHeaderCell}>Masa</th>
                <th style={contentStyles.tableHeaderCell}>Durum</th>
                <th style={contentStyles.tableHeaderCell}>Özel İstekler</th>
                <th style={{...contentStyles.tableHeaderCell, textAlign: 'right'}}>Eylemler</th>
              </tr>
            </thead>
            <tbody>
              {filteredReservations.map((reservation) => (
                <tr key={reservation.id} style={contentStyles.tableRow}>
                  <td style={contentStyles.tableCell}>
                    <div style={{fontSize: '14px', fontWeight: '500'}}>{reservation.id}</div>
                  </td>
                  <td style={contentStyles.tableCell}>
                    <div style={{fontSize: '14px', fontWeight: '500', color: '#1f2937'}}>{reservation.customer.name}</div>
                    <div style={{fontSize: '14px', color: '#6b7280'}}>{reservation.customer.email}</div>
                    <div style={{fontSize: '14px', color: '#6b7280'}}>{reservation.customer.phone}</div>
                  </td>
                  <td style={contentStyles.tableCell}>
                    <div style={{fontSize: '14px', color: '#1f2937'}}>{reservation.date}</div>
                    <div style={{fontSize: '14px', color: '#6b7280'}}>{reservation.time}</div>
                  </td>
                  <td style={contentStyles.tableCell}>
                    <div style={{fontSize: '14px'}}>{reservation.guests}</div>
                  </td>
                  <td style={contentStyles.tableCell}>
                    <div style={{fontSize: '14px'}}>{reservation.table}</div>
                  </td>
                  <td style={contentStyles.tableCell}>
                    <span style={getStatusStyle(reservation.status)}>
                      {reservation.status}
                    </span>
                  </td>
                  <td style={contentStyles.tableCell}>
                    <div style={{fontSize: '14px'}}>{reservation.specialRequests}</div>
                  </td>
                  <td style={{...contentStyles.tableCell, textAlign: 'right'}}>
                    <div style={{display: 'flex', gap: '4px', justifyContent: 'flex-end'}}>
                      <button 
                        style={{...contentStyles.actionButton, ...contentStyles.editButton}}
                        onClick={() => handleEdit(reservation.id)}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#2563eb'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#3b82f6'}
                      >
                        Düzenle
                      </button>
                      <button 
                        style={{...contentStyles.actionButton, ...contentStyles.deleteButton}}
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
          <div style={{textAlign: 'center', padding: '48px', color: '#6b7280'}}>
            <p>Kriterlerinize uygun rezervasyon bulunamadı.</p>
          </div>
        )}
      </div>

      {/* Düzenleme Modal */}
      {editingReservation && (
        <div style={contentStyles.editModal}>
          <div style={contentStyles.editForm}>
            <h3 style={contentStyles.formTitle}>Rezervasyon Düzenle</h3>
            
            <div style={contentStyles.formGroup}>
              <label style={contentStyles.formLabel}>Müşteri Adı</label>
              <input
                type="text"
                value={editForm.name}
                onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                style={contentStyles.formInput}
              />
            </div>

            <div style={contentStyles.formGroup}>
              <label style={contentStyles.formLabel}>E-mail</label>
              <input
                type="email"
                value={editForm.email}
                onChange={(e) => setEditForm({...editForm, email: e.target.value})}
                style={contentStyles.formInput}
              />
            </div>

            <div style={contentStyles.formGroup}>
              <label style={contentStyles.formLabel}>Tarih</label>
              <input
                type="date"
                value={editForm.date}
                onChange={(e) => setEditForm({...editForm, date: e.target.value})}
                style={contentStyles.formInput}
              />
            </div>

            <div style={contentStyles.formGroup}>
              <label style={contentStyles.formLabel}>Saat</label>
              <input
                type="time"
                value={editForm.time}
                onChange={(e) => setEditForm({...editForm, time: e.target.value})}
                style={contentStyles.formInput}
              />
            </div>

            <div style={contentStyles.formGroup}>
              <label style={contentStyles.formLabel}>Misafir Sayısı</label>
              <input
                type="number"
                min="1"
                max="20"
                value={editForm.guests}
                onChange={(e) => setEditForm({...editForm, guests: e.target.value})}
                style={contentStyles.formInput}
              />
            </div>

            <div style={contentStyles.formButtons}>
              <button 
                style={contentStyles.cancelButton}
                onClick={handleCancelEdit}
              >
                İptal
              </button>
              <button 
                style={contentStyles.saveButton}
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

// Diğer sayfa componentler
const SettingsPage = () => (
  <div>
    <h1 style={{fontSize: '32px', fontWeight: 'bold', marginBottom: '24px'}}>Settings</h1>
    <div style={{
      backgroundColor: 'white',
      padding: '48px',
      borderRadius: '12px',
      textAlign: 'center',
      border: '1px solid #e5e7eb'
    }}>
      <p style={{fontSize: '18px', color: '#6b7280'}}>Ayarlar sayfası buraya gelecek</p>
    </div>
  </div>
);

const Layout = () => {
  const [activeMenu, setActiveMenu] = useState('dashboard');

  const renderContent = () => {
    switch (activeMenu) {
      case 'dashboard':
        return <DashboardContent />;
      case 'reservations':
        return <ReservationsPage />;
      case 'analytics':         
        return <AnalyticsPage />; 
      default:
        return <DashboardContent />;
    }
  };

  const layoutStyles = {
    container: {
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    content: {
      marginLeft: '250px', // Sidebar width
      flex: 1,
      padding: '24px',
      overflowX: 'auto'
    }
  };

  return (
    <div style={layoutStyles.container}>
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div style={layoutStyles.content}>
        {renderContent()}
      </div>
    </div>
  );
};

export default Layout;