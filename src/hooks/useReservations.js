// 📁 Konum: src/hooks/useReservations.js

import { useState } from 'react';

const useReservations = () => {
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

  return {
    reservations,
    editingReservation,
    editForm,
    setEditForm,
    handleDelete,
    handleEdit,
    handleSaveEdit,
    handleCancelEdit
  };
};

export default useReservations;