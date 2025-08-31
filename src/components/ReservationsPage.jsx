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
      table: " 5",
      specialRequests: "Doğum günü pastası",
    },
    {
      id: "RSV-002",
      customerName: "Serkan Yavuz",
      email: "serkan@mail.com",
      phone: "+90 532 181 65 43",
      date: "2025-10-07",
      time: "22:00",
      guests: 7,
      table: " 9",
      specialRequests: "Arkadaş Buluşması",
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReservation = {
      id: `RSV-${String(reservations.length + 1).padStart(3, "0")}`,
      ...formData,
    };

    setReservations((prev) => [...prev, newReservation]);
    setFormData({
      customerName: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: 1,
      table: "",
      status: "Beklemede",
      specialRequests: "",
    });
  };

  const styles = {
    container: { display: "grid", gap: "32px" },
    form: {
      backgroundColor: "white",
      padding: "24px",
      borderRadius: "12px",
      border: "1px solid #e5e7eb",
    },
    input: {
      width: "100%",
      padding: "8px 12px",
      border: "1px solid #d1d5db",
      color:"#5a5959ff",
      backgroundColor:"white",
      borderRadius: "8px",
      marginBottom: "12px",
    },
    button: {
      padding: "10px 16px",
      backgroundColor: "#3b82f6",
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "600",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      backgroundColor: "white",
      borderRadius: "12px",
      overflow: "hidden",
      border: "1px solid #e5e7eb",
    },
    th: {
      textAlign: "left",
      padding: "12px",
      fontSize: "12px",
      color: "#6b7280",
      borderBottom: "1px solid #e5e7eb",
    },
    td: {
      padding: "12px",
      fontSize: "14px",
      borderBottom: "1px solid #e5e7eb",
    },
  };

  return (
    <div>
      <h1 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "16px" }}>
        Rezervasyonlar
      </h1>

      <div style={styles.container}>
        {/* Rezervasyon Ekleme Formu */}
        <form onSubmit={handleSubmit} style={styles.form}>
          <h2 style={{ fontSize: "20px", marginBottom: "16px" }}>Yeni Rezervasyon Ekle</h2>

          <input
            style={styles.input}
            type="text"
            name="customerName"
            placeholder="Müşteri Adı"
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
          />
          <input
            style={styles.input}
            type="number"
            name="table"
            placeholder="Masa"
            value={formData.table}
            onChange={handleChange}
          />
          <textarea
            style={styles.input}
            name="specialRequests"
            placeholder="Özel İstekler"
            value={formData.specialRequests}
            onChange={handleChange}
          />

          <button type="submit" style={styles.button}>
            Rezervasyon Ekle
          </button>
        </form>

        {/* Rezervasyon Listesi */}
        <div>
          <h2 style={{ fontSize: "20px", marginBottom: "12px" }}>Mevcut Rezervasyonlar</h2>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>REZERVASYON ID</th>
                <th style={styles.th}>MÜŞTERİ</th>
                <th style={styles.th}>TARİH & ZAMAN</th>
                <th style={styles.th}>MİSAFİR</th>
                <th style={styles.th}>MASA</th>
                <th style={styles.th}>ÖZEL İSTEKLER</th>

              </tr>
            </thead>
            <tbody>
              {reservations.map((res) => (
                <tr key={res.id}>
                  <td style={styles.td}>{res.id}</td>
                  <td style={styles.td}>
                  {res.customerName} <br />
                  <span style={{ color: "#777" }}>{res.email}</span>
                  </td>
                  <td style={styles.td}>
                  {res.date} <br />
                  <span style={{ color: "#777" }}>{res.time}</span>
                  </td>
                  <td style={styles.td}>{res.guests}</td>
                  <td style={styles.td}>{res.table}</td>
                  <td style={styles.td}>{res.specialRequests}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReservationsPage;
