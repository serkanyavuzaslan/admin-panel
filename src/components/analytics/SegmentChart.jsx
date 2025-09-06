import React from "react";
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
    <div className="chart-container">
      <h3 className="chart-title">👥 Müşteri Segmentleri</h3>
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
      <div className="segment-legend">
        {data.map((segment, index) => (
          <div key={index} className="segment-item">
            <div className="segment-label">
              <div
                className="segment-color"
                style={{ backgroundColor: segment.color }}
              ></div>
              <span className="segment-name">{segment.name}</span>
            </div>
            <span className="segment-value">%{segment.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SegmentChart;