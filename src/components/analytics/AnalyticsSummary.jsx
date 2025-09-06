import React from "react";

const AnalyticsSummary = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <p className="no-data">
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
    <div className="analytics-summary">
      <p>
        Bu yıl toplam{" "}
        <span className="summary-highlight revenue">
          {summary.totalRevenue}
        </span>{" "}
        gelir elde edildi. En çok rezervasyon yapılan ay{" "}
        <span className="summary-highlight best-month">
          {summary.bestMonth}
        </span>{" "}
        oldu. Aylık ortalama{" "}
        <span className="summary-highlight average">
          {summary.averagePerMonth}
        </span>{" "}
        rezervasyon gerçekleşti. Yılın başına göre rezervasyonlarda{" "}
        <span className="summary-highlight growth">
          {summary.growth}
        </span>{" "}
        değişim gözlemlendi.
      </p>
    </div>
  );
};

export default AnalyticsSummary;