// 📁 Konum: src/hooks/useReservationFilters.js

import { useState, useMemo } from 'react';

const useReservationFilters = (reservations = []) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Status');

  const filteredReservations = useMemo(() => {
    return (reservations || []).filter(reservation => {
      const matchesSearch =
        reservation?.customer?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        reservation?.id?.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === 'All Status' || reservation?.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [reservations, searchTerm, statusFilter]);

  return {
    searchTerm,
    setSearchTerm,
    statusFilter,
    setStatusFilter,
    filteredReservations,
  };
};

export default useReservationFilters;
