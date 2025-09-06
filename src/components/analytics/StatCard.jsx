import React from "react";

const StatCard = ({ title, value, growth, gradient, icon }) => {
  return (
    <div className="stat-card" style={{ background: gradient }}>
      <h3>{title}</h3>
      <p className="value">{value}</p>
      <p className="growth">{growth}</p>
    </div>
  );
};

export default StatCard;