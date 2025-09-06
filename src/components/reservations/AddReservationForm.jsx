import React from "react";
import FormInput from "./FormInput";
import "../../styles/custom.css";

const AddReservationForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <div className="reservation-form">
      <div className="reservation-form-header">
        <span></span>
        <h2>Yeni Rezervasyon Ekle</h2>
      </div>

      <div className="reservation-form-grid">
        <FormInput type="text" name="customerName" placeholder="Müşteri Adı *" value={formData.customerName} onChange={handleChange} />
        <FormInput type="email" name="email" placeholder="E-posta" value={formData.email} onChange={handleChange} />
        <FormInput type="tel" name="phone" placeholder="Telefon" value={formData.phone} onChange={handleChange} />
        <FormInput type="date" name="date" value={formData.date} onChange={handleChange} />
        <FormInput type="time" name="time" value={formData.time} onChange={handleChange} />
        <FormInput type="number" name="guests" placeholder="Misafir Sayısı" value={formData.guests} onChange={handleChange} />
        <FormInput type="text" name="table" placeholder="Masa Numarası" value={formData.table} onChange={handleChange} />
      </div>

      <textarea
        name="specialRequests"
        placeholder="Özel İstekler.."
        value={formData.specialRequests || ""}
        onChange={handleChange}
        rows="4"
        className="reservation-textarea"
      />

      <button onClick={handleSubmit} className="reservation-btn">
        Rezervasyon Ekle
      </button>
    </div>
  );
};

export default AddReservationForm;
