import React from "react";

const StatCard = ({ title, value, growth, gradient, icon }) => {
  return (
    <div
      style={{
        background: gradient,
        padding: "18px",
        borderRadius: "12px",
        color: "white",
      }}
    >
      <h3
        style={{
          margin: "0 0 6px 0",
          fontSize: "13px",
          opacity: 0.8,
          fontWeight: "500",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          margin: "0",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        {value}
      </p>
      <p
        style={{
          margin: "6px 0 0 0",
          fontSize: "13px",
          opacity: 0.8,
        }}
      >
        {growth}
      </p>
    </div>
  );
};

export default StatCard;