import React from "react";

const PerformanceTable = ({ data }) => {
  const getStatusClass = (value) => {
    if (value > 400) return "high";
    if (value > 300) return "medium";
    return "low";
  };

  const getStatusText = (value) => {
    if (value > 400) return "🔥 Yüksek";
    if (value > 300) return "⚡ Orta";
    return "📉 Düşük";
  };

  return (
    <div className="performance-table-container">
      <div className="table-header">
        <h3 className="table-title">📋 Aylık Performans Tablosu</h3>
        <div className="table-badge">12 Aylık Özet</div>
      </div>

      <table className="performance-table">
        <thead>
          <tr>
            <th className="table-header-cell">Ay</th>
            <th className="table-header-cell">Rezervasyon</th>
            <th className="table-header-cell">Gelir (₺)</th>
            <th className="table-header-cell">Durum</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="table-row">
              <td className="table-cell">
                <div className="month-cell-content">
                  <div className={`status-dot ${getStatusClass(item.value)}`}></div>
                  {item.month}
                </div>
              </td>
              <td className="table-cell">
                <div className="reservation-cell-content">
                  <span className="reservation-value">{item.value}</span>
                  <div className="progress-bar">
                    <div
                      className={`progress-fill ${getStatusClass(item.value)}`}
                      style={{ width: `${(item.value / 500) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </td>
              <td className="table-cell">
                <div className="revenue-cell-content">
                  <span className="revenue-value">
                    ₺{item.revenue.toLocaleString("tr-TR")}
                  </span>
                  <span className="revenue-average">
                    Ort: ₺{Math.round(item.revenue / item.value).toLocaleString("tr-TR")}
                  </span>
                </div>
              </td>
              <td className="table-cell">
                <span className={`status-badge ${getStatusClass(item.value)}`}>
                  {getStatusText(item.value)}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PerformanceTable;