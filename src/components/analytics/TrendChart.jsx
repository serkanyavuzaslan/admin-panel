import React from "react";

// Aylık Rezervasyon ve Gelir Trendi kısmı.

import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  AreaChart,
  Area,
  Line,
  Tooltip,
} from "recharts";
import CustomTooltip from "./CustomTooltip";

const TrendChart = ({ data }) => {
  return (
    <div
      style={{
        background: "#fff",
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
        📈 Aylık Rezervasyon ve Gelir Trendi
      </h3>
      <ResponsiveContainer width="100%" height={320}>
        <AreaChart data={data || []}>
          <defs>
            <linearGradient id="colorBookings" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#667eea" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#667eea" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#64748b", fontSize: 12 }}
          />
          <YAxis
            yAxisId="left"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#64748b", fontSize: 12 }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#64748b", fontSize: 12 }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            yAxisId="left"
            type="monotone"
            dataKey="value"
            stroke="#667eea"
            strokeWidth={3}
            fill="url(#colorBookings)"
            name="Rezervasyon"
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="revenue"
            stroke="#10b981"
            strokeWidth={3}
            dot={{ r: 4, fill: "#10b981" }}
            name="Gelir"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrendChart;
