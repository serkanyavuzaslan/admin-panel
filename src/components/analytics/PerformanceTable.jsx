import React from "react";

// Aylık performans tablosu.

const PerformanceTable = ({ data }) => {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "16px",
        padding: "24px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        marginTop: "32px",
      }}
    >
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "24px"
      }}>
        <h3
          style={{
            margin: 0,
            fontSize: "18px",
            fontWeight: "600",
            color: "#1e293b",
          }}
        >
          📋 Aylık Performans Tablosu
        </h3>
        <div style={{
          padding: "8px 15px",
          backgroundColor: "#d2f6ddff",
          color: "#0b7934ff",
          borderRadius: "8px",
          fontSize: "12px",
          fontWeight: "600",
          cursor:"pointer"
        }}>
          12 Aylık Özet
        </div>
      </div>
      
      <table style={{ 
        width: "100%", 
        borderCollapse: "separate",
        borderSpacing: "0",
        fontSize: "14px",
      }}>
        <thead>
          <tr>
            <th
              style={{
                padding: "16px 20px",
                fontWeight: "600",
                color: "#374151",
                backgroundColor: "linear-gradient(135deg, #f8fafc, #f1f5f9)",
                background: "linear-gradient(135deg, #f8fafc, #f1f5f9)",
                border: "1px solid #e2e8f0",
                borderRadius: "12px 0 0 0",
                textAlign: "left",
              }}
            >
              Ay
            </th>
            <th style={{ 
              padding: "16px 20px",
              fontWeight: "600",
              color: "#374151",
              backgroundColor: "linear-gradient(135deg, #f8fafc, #f1f5f9)",
              background: "linear-gradient(135deg, #f8fafc, #f1f5f9)",
              border: "1px solid #e2e8f0",
              borderLeft: "none",
              textAlign: "center",
            }}>
              Rezervasyon
            </th>
            <th style={{ 
              padding: "16px 20px",
              fontWeight: "600",
              color: "#374151",
              backgroundColor: "linear-gradient(135deg, #f8fafc, #f1f5f9)",
              background: "linear-gradient(135deg, #f8fafc, #f1f5f9)",
              border: "1px solid #e2e8f0",
              borderLeft: "none",
              textAlign: "center",
            }}>
              Gelir (₺)
            </th>
            <th
              style={{
                padding: "16px 20px",
                fontWeight: "600",
                color: "#374151",
                backgroundColor: "linear-gradient(135deg, #f8fafc, #f1f5f9)",
                background: "linear-gradient(135deg, #f8fafc, #f1f5f9)",
                border: "1px solid #e2e8f0",
                borderLeft: "none",
                borderRadius: "0 12px 0 0",
                textAlign: "center",
              }}
            >
              Durum
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              style={{
                backgroundColor: index % 2 === 0 ? "#ffffff" : "#fafbff",
              }}
            >
              <td
                style={{
                  padding: "14px 20px",
                  fontWeight: "600",
                  color: "#1e293b",
                  border: "1px solid #f1f5f9",
                  borderTop: "none",
                  borderRadius: index === data.length - 1 ? "0 0 0 12px" : "0",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{
                    width: "8px",
                    height: "8px",
                    backgroundColor: item.value > 400 ? "#10b981" : item.value > 300 ? "#f59e0b" : "#ef4444",
                    borderRadius: "50%",
                  }}></div>
                  {item.month}
                </div>
              </td>
              <td style={{ 
                padding: "14px 20px", 
                textAlign: "center",
                border: "1px solid #f1f5f9",
                borderTop: "none",
                borderLeft: "none",
              }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                  <span style={{
                    fontWeight: "600",
                    color: "#1e40af",
                    fontSize: "15px"
                  }}>
                    {item.value}
                  </span>
                  <div style={{
                    width: "40px",
                    height: "4px",
                    backgroundColor: "#e5e7eb",
                    borderRadius: "2px",
                    position: "relative",
                    overflow: "hidden"
                  }}>
                    <div style={{
                      width: `${(item.value / 500) * 100}%`,
                      height: "100%",
                      backgroundColor: item.value > 400 ? "#10b981" : item.value > 300 ? "#f59e0b" : "#ef4444",
                      borderRadius: "2px",
                    }}></div>
                  </div>
                </div>
              </td>
              <td
                style={{
                  padding: "14px 20px",
                  textAlign: "center",
                  border: "1px solid #f1f5f9",
                  borderTop: "none",
                  borderLeft: "none",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <span style={{
                    fontWeight: "700",
                    color: "#059669",
                    fontSize: "15px"
                  }}>
                    ₺{item.revenue.toLocaleString("tr-TR")}
                  </span>
                  <span style={{
                    fontSize: "12px",
                    color: "#64748b",
                    marginTop: "2px"
                  }}>
                    Ort: ₺{Math.round(item.revenue / item.value).toLocaleString("tr-TR")}
                  </span>
                </div>
              </td>
              <td
                style={{
                  padding: "14px 20px",
                  textAlign: "center",
                  border: "1px solid #f1f5f9",
                  borderTop: "none",
                  borderLeft: "none",
                  borderRadius: index === data.length - 1 ? "0 0 12px 0" : "0",
                }}
              >
                <span style={{
                  display: "inline-block",
                  padding: "4px 10px",
                  borderRadius: "12px",
                  fontSize: "12px",
                  fontWeight: "600",
                  backgroundColor: item.value > 400 ? "#dcfce7" : item.value > 300 ? "#fef3c7" : "#fee2e2",
                  color: item.value > 400 ? "#166534" : item.value > 300 ? "#92400e" : "#991b1b",
                }}>
                  {item.value > 400 ? " Yüksek" : item.value > 300 ? " Orta" : " Düşük"}
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