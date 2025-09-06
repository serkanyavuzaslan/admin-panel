import React from "react";
import "../../styles/custom.css";

const ReservationHeader = () => {
  return (
    <div className="reservation-header">
      <div className="decorative-circle"></div>
      <div className="decorative-circle2"></div>
      <div className="reservation-header-content">
        <h1>📅 Reservasyon Ekle</h1>
        <p>Yeni eklenen rezervasyonları anasayfaya taşır</p>
      </div>
    </div>
  );
};

export default ReservationHeader;
