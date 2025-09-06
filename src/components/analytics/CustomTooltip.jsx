import React from "react";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="tooltip-label">{label}</p>
        {payload.map((entry, index) => (
          <p
            key={index}
            className="tooltip-item"
            style={{ color: entry.color }}
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