import React from "react";

//  Recharts grafiklerinde fareyle üzerine gelince özelleştirilmiş tooltip gösterir.

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: "white",
          padding: "12px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          border: "1px solid #e5e7eb",
        }}
      >
        <p
          style={{
            fontWeight: "bold",
            marginBottom: "8px",
            color: "#374151",
          }}
        >
          {label}
        </p>
        {payload.map((entry, index) => (
          <p
            key={index}
            style={{
              color: entry.color,
              fontSize: "14px",
              margin: "4px 0",
            }}
          >
            {entry.name}: {entry.value}
            {entry.dataKey === "revenue" ? " ₺" : ""}
            {entry.dataKey === "value" ? " rezervasyon" : ""}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default CustomTooltip;