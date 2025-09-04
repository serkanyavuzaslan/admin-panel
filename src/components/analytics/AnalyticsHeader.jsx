import React from "react";

const AnalyticsHeader = () => {
  return (
    <div
      style={{
        marginBottom: "32px",
        padding: "32px 40px",
        borderRadius: "16px",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
      }}
    >
      <h1
        style={{ fontSize: "28px", fontWeight: "700", margin: 0 }}
      >
        📊 Analiz Paneli
      </h1>
      <p style={{ margin: "6px 0 0 0", opacity: 0.9 }}>
        Rezervasyon performansı ve istatistikleri
      </p>
    </div>
  );
};

export default AnalyticsHeader;