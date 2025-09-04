import React from "react";
import FormInput from "./FormInput";

const AddReservationForm = ({ formData, handleChange, handleSubmit }) => {
  const textareaFocus = (e) => {
    e.target.style.borderColor = "#667eea";
    e.target.style.backgroundColor = "#ffffff";
    e.target.style.boxShadow = "0 0 0 3px rgba(102,126,234,0.1)";
  };

  const textareaBlur = (e) => {
    e.target.style.borderColor = "#e2e8f0";
    e.target.style.backgroundColor = "#f8fafc";
    e.target.style.boxShadow = "none";
  };

  const buttonHover = (e) => {
    e.target.style.transform = "translateY(-2px)";
    e.target.style.boxShadow = "0 8px 20px rgba(102,126,234,0.4)";
  };

  const buttonLeave = (e) => {
    e.target.style.transform = "translateY(0)";
    e.target.style.boxShadow = "0 4px 12px rgba(102,126,234,0.3)";
  };

  return (
    <div style={{
      backgroundColor: "#ffffff",
      borderRadius: "16px",
      padding: "32px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
      marginBottom: "32px",
      border: "1px solid #f1f5f9"
    }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "24px"
      }}>
        <span style={{ fontSize: "20px", marginRight: "12px" }}></span> {/* Burası güncellendi */}
        <h2 style={{
          fontSize: "20px", // Burası güncellendi
          fontWeight: "700",
          color: "#1f2937",
          margin: 0
        }}>
          Yeni Rezervasyon Ekle
        </h2>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "20px",
        marginBottom: "20px"
      }}>
        <FormInput 
          type="text" 
          name="customerName" 
          placeholder="Müşteri Adı *" 
          value={formData.customerName} 
          onChange={handleChange} 
        />
        <FormInput 
          type="email" 
          name="email" 
          placeholder="E-posta" 
          value={formData.email} 
          onChange={handleChange} 
        />
        <FormInput 
          type="tel" 
          name="phone" 
          placeholder="Telefon" 
          value={formData.phone} 
          onChange={handleChange} 
        />
        <FormInput 
          type="date" 
          name="date" 
          value={formData.date} 
          onChange={handleChange} 
        />
        <FormInput 
          type="time" 
          name="time" 
          value={formData.time} 
          onChange={handleChange} 
        />
        <FormInput 
          type="number" 
          name="guests" 
          placeholder="Misafir Sayısı" 
          value={formData.guests} 
          onChange={handleChange} 
        />
        <FormInput 
          type="text" 
          name="table" 
          placeholder="Masa Numarası" 
          value={formData.table} 
          onChange={handleChange} 
        />
      </div>

      <textarea
        name="specialRequests"
        placeholder="Özel İstekler.."
        value={formData.specialRequests || ""}
        onChange={handleChange}
        rows="4"
        style={{
          width: "100%",
          height:"100px",
          padding: "16px",
          border: "2px solid #e2e8f0",
          borderRadius: "12px",
          fontSize: "15px",
          resize: "vertical",
          outline: "none",
          transition: "all 0.2s ease",
          backgroundColor: "#f8fafc",
          color: "#1f2937",
          fontFamily: "inherit",
          boxSizing: "border-box"
        }}
        onFocus={textareaFocus}
        onBlur={textareaBlur}
      />

      <button
        onClick={handleSubmit}
        style={{
          marginTop: "15px",
          padding: "16px 32px",
          fontSize: "16px",
          fontWeight: "600",
          color: "#ffffff",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          border: "none",
          borderRadius: "12px",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(102,126,234,0.3)",
          transition: "all 0.2s ease"
        }}
        onMouseEnter={buttonHover}
        onMouseLeave={buttonLeave}
      >
        Rezervasyon Ekle
      </button>
    </div>
  );
};

export default AddReservationForm;