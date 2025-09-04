// 📁 Konum: src/pages/ReservationsPage.jsx

import React, { useState, useMemo } from "react";
import Sidebar from "../../components/dashboard/Sidebar.jsx";
import ReservationHeader from "../../components/reservations/ReservationHeader";
// import SearchAndFilter from "../../components/reservations/SearchAndFilter";
import AddReservationForm from "../../components/reservations/AddReservationForm";
// import ReservationTable from "../../components/reservations/ReservationTable";
// import EditReservationModal from "../../components/reservations/EditReservationModal";
import { useReservationContext } from "../../context/ReservationContext.jsx";

const ReservationsPage = () => {
  // Context'ten rezervasyon fonksiyonlarını al
  const { reservations, addReservation, updateReservation, deleteReservation } = useReservationContext();

  // Form ve filter state'leri
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingReservation, setEditingReservation] = useState(null);

  // Form data için initial state
  const initialFormData = {
    customerName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    table: "",
    specialRequests: ""
  };

  const [formData, setFormData] = useState(initialFormData);

  // Form input değişiklik fonksiyonu
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Yeni rezervasyon ekleme fonksiyonu
  const handleAddReservation = () => {
    const success = addReservation(formData);
    if (success) {
      setFormData(initialFormData);
    }
  };

  // Rezervasyon düzenleme modalını aç
  const handleEdit = (reservation) => {
    setEditingReservation(reservation);
    setFormData({ ...reservation });
    setIsEditModalOpen(true);
  };

  // Rezervasyon güncelleme fonksiyonu
  const handleUpdateReservation = () => {
    const success = updateReservation(editingReservation.id, formData);
    if (success) {
      setIsEditModalOpen(false);
      setEditingReservation(null);
      setFormData(initialFormData);
    }
  };

  // Rezervasyon silme fonksiyonu
  const handleDeleteReservation = (id) => {
    deleteReservation(id);
  };

  // Modal kapatma fonksiyonu
  const handleCloseModal = () => {
    setIsEditModalOpen(false);
    setEditingReservation(null);
    setFormData(initialFormData);
  };

  // Logout fonksiyonu
  const handleLogout = () => {
    console.log("Logout işlemi...");
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
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#f8fafc"
      }}
    >
      {/* Sidebar */}
      <Sidebar onLogout={handleLogout} />

      {/* Ana İçerik Alanı */}
      <div
        style={{
          flex: 1,
          marginLeft: "280px", // Sidebar genişliği kadar margin
          minHeight: "100vh"
        }}
      >
        {/* İçerik Container */}
        <div
          style={{
            padding: "24px",
            maxWidth: "1400px",
            margin: "0 auto"
          }}
        >
          {/* Header Stats */}
          <ReservationHeader totalReservations={reservations.length} />

          {/* Add Reservation Form */}
          <AddReservationForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleAddReservation}
          />

          {/* Search and Filter
          <SearchAndFilter
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
          /> */}

          {/* Reservations Table
          <ReservationTable
            reservations={filteredReservations}
            onEdit={handleEdit}
            onDelete={handleDeleteReservation}
          /> */}

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

      {/* Edit Modal
      <EditReservationModal
        isOpen={isEditModalOpen}
        onClose={handleCloseModal}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleUpdateReservation}
      /> */}
    </div>
  );
};

export default ReservationsPage;