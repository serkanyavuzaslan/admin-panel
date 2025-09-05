import React from "react";

// Bu kodlar analiz sayfasının en altında kalan kısım.

const AnalyticsSummary = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <p style={{ textAlign: "center", padding: "20px", color: "#64748b" }}>
        Veri bulunamadı 📉
      </p>
    );
  }

  const calculateSummary = () => {
    const totalRevenue = data.reduce((sum, item) => sum + item.revenue, 0);
    const totalReservations = data.reduce((sum, item) => sum + item.value, 0);
    const bestMonth = data.reduce((max, item) =>
      item.value > max.value ? item : max
    );
    const averagePerMonth = Math.round(totalReservations / data.length);

    const firstMonth = data[0].value;
    const lastMonth = data[data.length - 1].value;
    const growthPercent = Math.round(
      ((lastMonth - firstMonth) / firstMonth) * 100
    );

    return {
      bestMonth: `${bestMonth.month} (${bestMonth.value})`,
      totalRevenue: `₺${(totalRevenue / 1000000).toFixed(2)}M`,
      averagePerMonth,
      growth: `${growthPercent > 0 ? "+" : ""}${growthPercent}%`,
    };
  };

  const summary = calculateSummary();

  return (
    <div
      style={{
        marginTop: "24px",
        padding: "20px",
        borderRadius: "12px",
        background: "linear-gradient(135deg, #f9fafb 0%, #f1f5f9 100%)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        fontSize: "15px",
        lineHeight: "1.8",
        color: "#334155",
        borderLeft: "4px solid #6366f1",
      }}
    >
      <p style={{ margin: 0 }}>
        Bu yıl toplam{" "}
        <span style={{ fontWeight: "600", color: "#059669" }}>
          {summary.totalRevenue}
        </span>{" "}
        gelir elde edildi. En çok rezervasyon yapılan ay{" "}
        <span style={{ fontWeight: "600", color: "#1e40af" }}>
          {summary.bestMonth}
        </span>{" "}
        oldu. Aylık ortalama{" "}
        <span style={{ fontWeight: "600", color: "#d97706" }}>
          {summary.averagePerMonth}
        </span>{" "}
        rezervasyon gerçekleşti. Yılın başına göre rezervasyonlarda{" "}
        <span style={{ fontWeight: "600", color: "#7c3aed" }}>
          {summary.growth}
        </span>{" "}
        değişim gözlemlendi.
      </p>
    </div>
  );
};

export default AnalyticsSummary;
