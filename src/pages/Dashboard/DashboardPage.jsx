import React, { useState, useMemo } from 'react';
import DashboardHeader from '../../components/dashboard/DashboardHeader';
import StatsGrid from '../../components/dashboard/StatsGrid';
import ReservationTable from '../../components/ui/Table/ReservationTable';
import EditModal from '../../components/ui/Modal/EditModal';
import ReservationEditForm from '../../components/ui/Forms/ReservationEditForm';
import Sidebar from "../../components/dashboard/Sidebar";
import ReservationFilters from '../../components/dashboard/ReservationFilters';
import { useReservationContext } from '../../context/ReservationContext.jsx';
import '../../styles/custom.css';

const DashboardPage = () => {
  const { reservations, updateReservation, deleteReservation } = useReservationContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [editingReservation, setEditingReservation] = useState(null);
  const [editForm, setEditForm] = useState({});

  const handleEdit = (reservation) => {
    setEditingReservation(reservation);
    setEditForm({ ...reservation });
  };

  const handleSaveEdit = () => {
    const success = updateReservation(editingReservation.id, editForm);
    if (success) {
      setEditingReservation(null);
      setEditForm({});
    }
  };

  const handleCancelEdit = () => {
    setEditingReservation(null);
    setEditForm({});
  };

  const handleDelete = (id) => {
    deleteReservation(id);
  };

  const filteredReservations = useMemo(() => {
    return reservations.filter((reservation) => {
      const matchesSearch =
        searchTerm === "" ||
        reservation.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (reservation.email && reservation.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (reservation.phone && reservation.phone.includes(searchTerm));

      const matchesStatus =
        statusFilter === "" || reservation.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [reservations, searchTerm, statusFilter]);

  return (
    <div className="dashboard-container">
      <Sidebar />

      <div className="dashboard-content">
        <DashboardHeader />
        <StatsGrid reservations={reservations} />

        {/* Tek filtre alanı */}
        { <ReservationFilters 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
        /> }

        <ReservationTable 
          reservations={filteredReservations}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

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

        <div className="dashboard-footer">
          <p>© 2025 RestaurantPro - Rezervasyon Yönetim Sistemi</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
