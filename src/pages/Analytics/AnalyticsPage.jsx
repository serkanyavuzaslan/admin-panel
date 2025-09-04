import React from "react";

import Sidebar from "../../components/dashboard/Sidebar";
import StatCard from "../../components/analytics/StatCard";
import TrendChart from "../../components/analytics/TrendChart";
import SegmentChart from "../../components/analytics/SegmentChart";
import PerformanceTable from "../../components/analytics/PerformanceTable";
import CustomTooltip from "../../components/analytics/CustomTooltip";
import AnalyticsHeader from "../../components/analytics/AnalyticsHeader";
import AnalyticsSummary from "../../components/analytics/AnalyticsSummary";
import AnalyticsFooter from "../../components/analytics/AnalyticsFooter";

const AnalyticsPage = () => {
  // Daha gerçekçi veriler
  const monthlyStats = [
    { month: "Ocak", value: 182, revenue: 45500, growth: "+5.2%", avgOrder: 250 },
    { month: "Şubat", value: 156, revenue: 39000, growth: "-12.8%", avgOrder: 250 },
    { month: "Mart", value: 234, revenue: 58500, growth: "+50.0%", avgOrder: 250 },
    { month: "Nisan", value: 298, revenue: 74500, growth: "+27.4%", avgOrder: 250 },
    { month: "Mayıs", value: 345, revenue: 86250, growth: "+15.8%", avgOrder: 250 },
    { month: "Haziran", value: 412, revenue: 103000, growth: "+19.4%", avgOrder: 250 },
    { month: "Temmuz", value: 456, revenue: 114000, growth: "+10.7%", avgOrder: 250 },
    { month: "Ağustos", value: 389, revenue: 97250, growth: "-14.7%", avgOrder: 250 },
    { month: "Eylül", value: 367, revenue: 91750, growth: "-5.7%", avgOrder: 250 },
    { month: "Ekim", value: 423, revenue: 105750, growth: "+15.3%", avgOrder: 250 },
    { month: "Kasım", value: 398, revenue: 99500, growth: "-5.9%", avgOrder: 250 },
    { month: "Aralık", value: 445, revenue: 111250, growth: "+11.8%", avgOrder: 250 },
  ];

  const customerSegments = [
    { name: "Onaylanan", value: 60, color: "#09A372" },
    { name: "Bekletilen", value: 28, color: "#fcdc5cff" },
    { name: "İptal Edilen", value: 12, color: "#f95858ff" },
  ];

  // Stat card verileri
  const statCards = [
    {
      title: "TOPLAM REZERVASYON",
      value: "4,205",
      growth: "↗ %12.5 artış",
      gradient: "linear-gradient(135deg, #667eea, #764ba2)"
    },
    {
      title: "TOPLAM GELİR",
      value: "₺1,051,250",
      growth: "↗ %18.2 artış",
      gradient: "linear-gradient(135deg, #10b981, #059669)"
    },
    {
      title: "AKTİF MÜŞTERİLER",
      value: "487",
      growth: "↗ %8.7 artış",
      gradient: "linear-gradient(135deg, #f59e0b, #d97706)"
    }
  ];

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#f8fafc",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Sidebar */}
      <Sidebar />

      {/* Ana içerik */}
      <div
        style={{
          flex: 1,
          marginLeft: "280px",
          padding: "32px",
          minHeight: "100vh",
          backgroundColor: "#f8fafc",
        }}
      >
        {/* Sayfa Başlığı */}
        <AnalyticsHeader />

        {/* Kompakt Özet Kartları */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          {statCards.map((card, index) => (
            <StatCard 
              key={index}
              title={card.title}
              value={card.value}
              growth={card.growth}
              gradient={card.gradient}
            />
          ))}
        </div>

        {/* Ana Grafikler */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "24px",
            marginBottom: "32px",
          }}
        >
          {/* Aylık Trend (Area Chart) */}
          <TrendChart data={monthlyStats} />
          

          {/* Müşteri Segmentleri (Donut Chart) */}
          <SegmentChart data={customerSegments} />
        </div>

        {/* Dolu ve Şık Tablo */}
        <PerformanceTable data={monthlyStats} />

        {/* Alt Özet */}
        <AnalyticsSummary data={monthlyStats} />


          
        {/* Footer */}
        <AnalyticsFooter />
      </div>
    </div>
  );
};

export default AnalyticsPage;