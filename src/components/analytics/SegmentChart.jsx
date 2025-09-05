import React from "react";

// Müşteri segmentleri kısmı.

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";
import CustomTooltip from "./CustomTooltip";

const SegmentChart = ({ data }) => {
  return (
    <div
      style={{
        background: "#ffffffff",
        borderRadius: "16px",
        padding: "24px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
      }}
    >
      <h3
        style={{
          margin: "0 0 20px 0",
          fontSize: "18px",
          fontWeight: "600",
        }}
      >
        👥 Müşteri Segmentleri
      </h3>
      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={100}
            paddingAngle={2}
            strokeWidth={0}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
      <div style={{ marginTop: "16px" }}>
        {data.map((segment, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "8px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: segment.color,
                }}
              ></div>
              <span
                style={{
                  fontSize: "14px",
                  color: "#64748b",
                }}
              >
                {segment.name}
              </span>
            </div>
            <span
              style={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#1e293b",
              }}
            >
              %{segment.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SegmentChart;