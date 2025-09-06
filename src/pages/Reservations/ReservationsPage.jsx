import React, { useState, useMemo } from "react";
import Sidebar from "../../components/dashboard/Sidebar.jsx";
import ReservationHeader from "../../components/reservations/ReservationHeader";
import AddReservationForm from "../../components/reservations/AddReservationForm";
import { useReservationContext } from "../../context/ReservationContext.jsx";
import "../../styles/custom.css";

const ReservationsPage = () => {
  const { reservations, addReservation, updateReservation, deleteReservation } = useReservationContext();

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingReservation, setEditingReservation] = useState(null);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddReservation = () => {
    const success = addReservation(formData);
    if (success) setFormData(initialFormData);
  };

  const handleDeleteReservation = (id) => {
    deleteReservation(id);
  };

  const handleLogout = () => {
    console.log("Logout işlemi...");
  };

  const filteredReservations = useMemo(() => {
    return reservations.filter((reservation) => {
      const matchesSearch =
        searchTerm === "" ||
        reservation.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (reservation.email && reservation.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (reservation.phone && reservation.phone.includes(searchTerm));

      const matchesStatus = statusFilter === "" || reservation.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [reservations, searchTerm, statusFilter]);

  return (
    <div className="page-container">
      <Sidebar onLogout={handleLogout} />

      <div className="page-content">
        <div className="content-wrapper">
          <ReservationHeader totalReservations={reservations.length} />

          <AddReservationForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleAddReservation}
          />

          <div className="footer">
            <p>© 2025 RestaurantPro - Rezervasyon Yönetim Sistemi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationsPage;
