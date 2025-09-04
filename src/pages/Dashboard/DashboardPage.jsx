// 📁 Konum: src/pages/Dashboard/DashboardPage.jsx

import React, { useState, useMemo } from 'react';
import DashboardHeader from '../../components/dashboard/DashboardHeader';
import StatsGrid from '../../components/dashboard/StatsGrid';
import ReservationTable from '../../components/ui/Table/ReservationTable';
import EditModal from '../../components/ui/Modal/EditModal';
import ReservationEditForm from '../../components/ui/Forms/ReservationEditForm';
import Sidebar from "../../components/dashboard/Sidebar";
import { useReservationContext } from '../../context/ReservationContext.jsx';

const DashboardPage = () => {
  // Context'ten rezervasyon verilerini al
  const { reservations, updateReservation, deleteReservation } = useReservationContext();

  // Filter state'leri
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  
  // Edit modal state'leri
  const [editingReservation, setEditingReservation] = useState(null);
  const [editForm, setEditForm] = useState({});

  // Rezervasyon düzenleme modalını aç
  const handleEdit = (reservation) => {
    setEditingReservation(reservation);
    setEditForm({ ...reservation });
  };

  // Rezervasyon düzenlemeyi kaydet
  const handleSaveEdit = () => {
    const success = updateReservation(editingReservation.id, editForm);
    if (success) {
      setEditingReservation(null);
      setEditForm({});
    }
  };

  // Düzenlemeyi iptal et
  const handleCancelEdit = () => {
    setEditingReservation(null);
    setEditForm({});
  };

  // Rezervasyon silme fonksiyonu
  const handleDelete = (id) => {
    deleteReservation(id);
  };

  // Filtrelenmiş rezervasyonlar
  const filteredReservations = useMemo(() => {
    return reservations.filter((reservation) => {
      const matchesSearch =
        searchTerm === "" ||
        reservation.customerName
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        (reservation.email &&
          reservation.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (reservation.phone && reservation.phone.includes(searchTerm));

      const matchesStatus =
        statusFilter === "" || reservation.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [reservations, searchTerm, statusFilter]);

  return (
    <div style={{ 
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Sidebar - Sol tarafta sabit */}
      <Sidebar />
      
      {/* Ana İçerik Alanı */}
      <div style={{
        flex: 1,
        marginLeft: '280px', // Sidebar genişliği kadar margin
        padding: '32px',
        minHeight: '100vh',
        backgroundColor: '#f8fafc'
      }}>
        {/* Sayfa Başlığı */}
        <DashboardHeader />

        {/* İstatistik Kartları */}
        <StatsGrid reservations={reservations} />

        {/* Rezervasyonlar Tablosu */}
        <ReservationTable 
          reservations={filteredReservations}
          onEdit={handleEdit}
          onDelete={handleDelete}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
        />

        {/* Düzenleme Modal */}
        <EditModal 
          isOpen={editingReservation !== null}
          onClose={handleCancelEdit}
        >
          <ReservationEditForm 
            editForm={editForm}
            setEditForm={setEditForm}
            onSave={handleSaveEdit}
            onCancel={handleCancelEdit}
          />
        </EditModal>

        {/* Footer */}
        <div
          style={{
            marginTop: "40px",
            padding: "20px 0",
            borderTop: "1px solid #e5e7eb",
            textAlign: "center"
          }}
        >
          <p
            style={{
              fontSize: "14px",
              color: "#6b7280",
              margin: 0
            }}
          >
            © 2025 RestaurantPro - Rezervasyon Yönetim Sistemi
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;