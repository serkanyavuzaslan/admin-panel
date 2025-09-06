// 📁 Konum: src/context/ReservationContext.jsx

import React, { createContext, useContext, useState, useEffect } from 'react';

const ReservationContext = createContext();

export const useReservationContext = () => {
  const context = useContext(ReservationContext);
  if (!context) {
    throw new Error('useReservationContext must be used within a ReservationProvider');
  }
  return context;
};

export const ReservationProvider = ({ children }) => {
  // LocalStorage anahtarı
  const STORAGE_KEY = 'restaurantReservations';

  // Başlangıç verileri (ilk kez açılırsa kullanılacak)
  const initialReservations = [
    {
      id: "RSV-001",
      customerName: "Ahmet Yılmaz",
      email: "ahmet@gmail.com",
      phone: "05551234567",
      date: "2025-09-25",
      time: "19:00",
      guests: 4,
      table: "5",
      status: "Onaylandı",
      specialRequests: "Pencere kenarı masa istiyoruz"
    },
    {
      id: "RSV-002",
      customerName: "Fatma Kaya",
      email: "fatma@gmail.com",
      phone: "05559876543",
      date: "2025-10-26",
      time: "20:30",
      guests: 2,
      table: "3",
      status: "Beklemede",
      specialRequests: ""
    },
    {
      id: "RSV-003",
      customerName: "Mehmet Özkan",
      email: "mehmet@gmail.com",
      phone: "05551112233",
      date: "2025-09-27",
      time: "18:00",
      guests: 6,
      table: "8",
      status: "İptal Edildi",
      specialRequests: "Doğum günü kutlaması"
    },
    {
      id: "RSV-004",
      customerName: "Serkan Yavuzaslan",
      email: "serkanyavuz@gmail.com",
      phone: "05376152080",
      date: "2025-09-27",
      time: "20:00",
      guests: 8,
      table: "9",
      status: "Onaylandı",
      specialRequests: "Arkadaş buluşması"
    },
    {
      id: "RSV-005",
      customerName: "Ayşe Demir",
      email: "aysedemir@gmail.com",
      phone: "05431234567",
      date: "2025-09-28",
      time: "19:30",
      guests: 4,
      table: "3",
      status: "Beklemede",
      specialRequests: "Vegan menü"
    },
    {
      id: "RSV-006",
      customerName: "Mehmet Can",
      email: "mehmetcan@gmail.com",
      phone: "05542345678",
      date: "2025-09-29",
      time: "21:00",
      guests: 2,
      table: "5",
      status: "Onaylandı",
      specialRequests: "Doğum günü süslemeleri"
    },
    {
      id: "RSV-007",
      customerName: "Elif Kaya",
      email: "elifkaya@gmail.com",
      phone: "05359876543",
      date: "2025-09-30",
      time: "18:45",
      guests: 6,
      table: "7",
      status: "İptal Edildi",
      specialRequests: "Pencereli masa"
    },
    {
      id: "RSV-008",
      customerName: "Ahmet Yıldız",
      email: "ahmetyildiz@yahoo.com",
      phone: "05438765432",
      date: "2025-10-01",
      time: "20:15",
      guests: 3,
      table: "2",
      status: "Onaylandı",
      specialRequests: "Sessiz bir köşe"
    }
  ];

  // LocalStorage'dan verileri yükleme fonksiyonu
  const loadReservationsFromStorage = () => {
    try {
      const savedReservations = localStorage.getItem(STORAGE_KEY);
      if (savedReservations) {
        return JSON.parse(savedReservations);
      }
      // İlk kez açılıyorsa başlangıç verilerini kaydet ve döndür
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialReservations));
      return initialReservations;
    } catch (error) {
      console.error('LocalStorage verisi yüklenirken hata:', error);
      return initialReservations;
    }
  };

  // Ana rezervasyon verisi - LocalStorage'dan yükleniyor
  const [reservations, setReservations] = useState(loadReservationsFromStorage);

  // Rezervasyonları LocalStorage'a kaydetme fonksiyonu
  const saveReservationsToStorage = (reservations) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(reservations));
    } catch (error) {
      console.error('LocalStorage kaydetme hatası:', error);
      alert('❗ Veriler kaydedilemedi. Tarayıcı depolama alanı dolu olabilir.');
    }
  };

  // Rezervasyonlar değiştiğinde LocalStorage'a kaydet
  useEffect(() => {
    saveReservationsToStorage(reservations);
  }, [reservations]);

  // Yeni rezervasyon ekleme fonksiyonu
  const addReservation = (formData) => {
    if (!formData.customerName.trim() || !formData.date || !formData.time) {
      alert("❗ Lütfen zorunlu alanları doldurun!\n(Müşteri Adı, Tarih, Saat)");
      return false;
    }

    // Yeni ID oluştur (RSV-001 formatında)
    const newId = `RSV-${String(reservations.length + 1).padStart(3, "0")}`;

    const newReservation = {
      id: newId,
      ...formData,
      customerName: formData.customerName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      table: formData.table.trim(),
      specialRequests: formData.specialRequests.trim(),
      status: "Beklemede", // Yeni rezervasyonlar beklemede başlar
      guests: parseInt(formData.guests) || 1
    };

    setReservations((prev) => [...prev, newReservation]);
    alert("🎉 Rezervasyon başarıyla eklendi!");
    return true;
  };

  // Rezervasyon güncelleme fonksiyonu
  const updateReservation = (id, formData) => {
    if (!formData.customerName.trim() || !formData.date || !formData.time) {
      alert("❗ Lütfen zorunlu alanları doldurun!\n(Müşteri Adı, Tarih, Saat)");
      return false;
    }

    setReservations((prev) =>
      prev.map((res) =>
        res.id === id
          ? {
              ...res,
              ...formData,
              customerName: formData.customerName.trim(),
              email: formData.email.trim(),
              phone: formData.phone.trim(),
              table: formData.table.trim(),
              specialRequests: formData.specialRequests.trim(),
              guests: parseInt(formData.guests) || 1
            }
          : res
      )
    );

    alert("✅ Rezervasyon başarıyla güncellendi!");
    return true;
  };

  // Rezervasyon silme fonksiyonu
  const deleteReservation = (id) => {
    const reservation = reservations.find((res) => res.id === id);
    if (!reservation) return;

    const confirmDelete = window.confirm(
      `🗑️ "${reservation.customerName}" adlı müşterinin rezervasyonunu silmek istediğinizden emin misiniz?\n\nBu işlem geri alınamaz.`
    );

    if (confirmDelete) {
      setReservations((prev) => prev.filter((res) => res.id !== id));
      alert("🗑️ Rezervasyon başarıyla silindi!");
      return true;
    }
    return false;
  };

  // Tüm verileri sıfırlama fonksiyonu (isteğe bağlı)
  const resetReservations = () => {
    const confirmReset = window.confirm(
      "⚠️ TÜM REZERVASYONLAR SİLİNECEK!\n\nBu işlem geri alınamaz. Emin misiniz?"
    );
    if (confirmReset) {
      setReservations(initialReservations);
      alert("🔄 Tüm veriler sıfırlandı!");
    }
  };

  const value = {
    reservations,
    addReservation,
    updateReservation,
    deleteReservation,
    resetReservations // İsteğe bağlı sıfırlama fonksiyonu
  };

  return (
    <ReservationContext.Provider value={value}>
      {children}
    </ReservationContext.Provider>
  );
};