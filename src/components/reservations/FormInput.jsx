import React from "react";

const FormInput = ({ type, name, value, onChange, placeholder }) => {
  const styles = {
    width: "100%",
    padding: "14px 16px",
    border: "2px solid #e2e8f0",
    borderRadius: "12px",
    fontSize: "15px",
    backgroundColor: "#f8fafc",
    color: "#1f2937",
    transition: "all 0.2s ease",
    outline: "none",
    boxSizing: "border-box"
  };

  const handleFocus = (e) => {
    e.target.style.borderColor = "#667eea";
    e.target.style.backgroundColor = "#ffffff";
    e.target.style.boxShadow = "0 0 0 3px rgba(102,126,234,0.1)";
  };

  const handleBlur = (e) => {
    e.target.style.borderColor = "#e2e8f0";
    e.target.style.backgroundColor = "#f8fafc";
    e.target.style.boxShadow = "none";
  };

  return (
    <input
      type={type}
      name={name}
      value={value || ""}
      onChange={onChange}
      placeholder={placeholder}
      style={styles}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
};

export default FormInput;