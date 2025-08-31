import React, { useState } from "react";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import 'chart.js/auto';

const AnalyticsPage = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('12months');

  // İstatistik kartları - daha detaylı
  const stats = [
    { 
      title: "Günlük Ortalama Rezervasyon", 
      value: 8, 
      change: "+12%",
      changeType: "increase",
      color: "#f59e0b", 
      gradient: "linear-gradient(135deg, #f59e0b 0%, #f97316 100%)",
      icon: "📊" 
    },
    { 
      title: "Aylık Rezervasyonlar", 
      value: 124, 
      change: "+8%",
      changeType: "increase",
      color: "#3b82f6", 
      gradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
      icon: "📅" 
    },
    { 
      title: "Aktif Rezervasyonlar", 
      value: 76, 
      change: "-3%",
      changeType: "decrease",
      color: "#10b981", 
      gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
      icon: "🟢" 
    },
    { 
      title: "Aylık Gelir Tahmini", 
      value: "₺45.600", 
      change: "+15%",
      changeType: "increase",
      color: "#22c55e", 
      gradient: "linear-gradient(135deg, #66bd38ff 0%, #16a34a 100%)",
      icon: "💰" 
    }
  ];

  // Grafik verisi
  const chartsData = [
    { label: "Ocak", value: 50, revenue: 18500 },
    { label: "Şubat", value: 60, revenue: 22200 },
    { label: "Mart", value: 72, revenue: 26640 },
    { label: "Nisan", value: 30, revenue: 11100 },
    { label: "Mayıs", value: 25, revenue: 9250 },
    { label: "Haziran", value: 10, revenue: 3700 },
    { label: "Temmuz", value: 32, revenue: 11840 },
    { label: "Ağustos", value: 40, revenue: 14800 },
    { label: "Eylül", value: 65, revenue: 24050 },
    { label: "Ekim", value: 80, revenue: 29600 },
    { label: "Kasım", value: 55, revenue: 20350 },
    { label: "Aralık", value: 90, revenue: 33300 }
  ];

  // Bar chart için data
  const barData = {
    labels: chartsData.map(d => d.label),
    datasets: [
      {
        label: "Rezervasyonlar",
        data: chartsData.map(d => d.value),
        backgroundColor: (ctx) => {
          const canvas = ctx.chart.ctx;
          const gradient = canvas.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, 'rgba(59, 130, 246, 0.8)');
          gradient.addColorStop(1, 'rgba(59, 130, 246, 0.3)');
          return gradient;
        },
        borderRadius: 8,
        borderWidth: 0
      }
    ]
  };

  // Line chart için data
  const lineData = {
    labels: chartsData.map(d => d.label),
    datasets: [
      {
        label: "Gelir (₺)",
        data: chartsData.map(d => d.revenue),
        borderColor: '#10b981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#10b981',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8
      }
    ]
  };

  // Doughnut chart - rezervasyon durumları
  const statusData = {
    labels: ['Onaylandı', 'Beklemede', 'İptal'],
    datasets: [
      {
        data: [65, 25, 10],
        backgroundColor: ['#10b981', '#f59e0b', '#ef4444'],
        borderWidth: 0,
        hoverOffset: 4
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        cornerRadius: 8,
        padding: 12
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)'
        },
        ticks: { 
          color: '#6b7280',
          font: { size: 12 }
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: { 
          color: '#6b7280',
          font: { size: 12 }
        }
      }
    }
  };

  const lineOptions = {
    ...chartOptions,
    plugins: {
      ...chartOptions.plugins,
      legend: { display: false }
    }
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true,
          padding: 20,
          font: { size: 12 }
        }
      }
    }
  };

  const containerStyle = {
    background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
    minHeight: "100vh",
    padding: "24px"
  };

  const cardStyle = {
    backgroundColor: "white",
    borderRadius: "16px",
    padding: "24px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
    border: "1px solid rgba(226, 232, 240, 0.5)",
    transition: "all 0.3s ease",
    cursor: "pointer"
  };

  const statsGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "24px",
    marginBottom: "32px"
  };

  const chartGrid = {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "24px",
    marginBottom: "32px"
  };

  return (
    <div style={containerStyle}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "32px" }}>
          <h1 style={{ 
            fontSize: "32px", 
            fontWeight: "bold", 
            marginBottom: "8px",
            background: "linear-gradient(135deg, #1e293b 0%, #475569 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            Analytics Dashboard
          </h1>
          <p style={{ color: "#64748b", fontSize: "16px" }}>
            Rezervasyon verilerinizi takip edin ve analiz edin
          </p>
        </div>

        {/* Periyod Seçici */}
        <div style={{ marginBottom: "32px" }}>
          <div style={{ display: "flex", gap: "8px" }}>
            {[
              { key: '7days', label: '7 Gün' },
              { key: '1month', label: '1 Ay' },
              { key: '3months', label: '3 Ay' },
              { key: '12months', label: '12 Ay' }
            ].map(period => (
              <button
                key={period.key}
                onClick={() => setSelectedPeriod(period.key)}
                style={{
                  padding: "8px 16px",
                  borderRadius: "8px",
                  border: "none",
                  backgroundColor: selectedPeriod === period.key ? "#3b82f6" : "#f1f5f9",
                  color: selectedPeriod === period.key ? "white" : "#64748b",
                  fontWeight: selectedPeriod === period.key ? "600" : "normal",
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}
              >
                {period.label}
              </button>
            ))}
          </div>
        </div>

        {/* İstatistik Kartları */}
        <div style={statsGrid}>
          {stats.map((stat, index) => (
            <div 
              key={index} 
              style={{ 
                ...cardStyle,
                background: `linear-gradient(135deg, white 0%, ${stat.color}08 100%)`,
                borderLeft: `4px solid ${stat.color}`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{ flex: 1 }}>
                  <p style={{ 
                    margin: 0, 
                    color: "#64748b", 
                    fontSize: "14px",
                    fontWeight: "500"
                  }}>
                    {stat.title}
                  </p>
                  <p style={{ 
                    margin: "8px 0 4px 0", 
                    fontSize: "28px", 
                    fontWeight: "bold",
                    color: "#1e293b"
                  }}>
                    {stat.value}
                  </p>
                  <span style={{
                    fontSize: "12px",
                    fontWeight: "600",
                    color: stat.changeType === 'increase' ? "#10b981" : "#ef4444",
                    backgroundColor: stat.changeType === 'increase' ? "#dcfce7" : "#fef2f2",
                    padding: "2px 8px",
                    borderRadius: "12px"
                  }}>
                    {stat.changeType === 'increase' ? '↗️' : '↘️'} {stat.change}
                  </span>
                </div>
                <div style={{ 
                  fontSize: "32px", 
                  opacity: 0.8,
                  filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))"
                }}>
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Grafik Bölümü */}
        <div style={chartGrid}>
          {/* Ana Grafik */}
          <div style={cardStyle}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <h2 style={{ fontSize: "20px", fontWeight: "600", margin: 0 }}>
                📊 Aylık Rezervasyon Trendi
              </h2>
              <div style={{ display: "flex", gap: "12px", fontSize: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <div style={{ width: "12px", height: "12px", backgroundColor: "#3b82f6", borderRadius: "2px" }}></div>
                  <span>Rezervasyonlar</span>
                </div>
              </div>
            </div>
            <div style={{ height: "300px" }}>
              <Bar data={barData} options={chartOptions} />
            </div>
          </div>

          {/* Yan Grafik - Durum Dağılımı */}
          <div style={cardStyle}>
            <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "20px" }}>
              🎯 Rezervasyon Durumları
            </h3>
            <div style={{ height: "200px", marginBottom: "20px" }}>
              <Doughnut data={statusData} options={doughnutOptions} />
            </div>
            <div style={{ fontSize: "14px", color: "#64748b" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <span>Toplam Rezervasyon</span>
                <strong>248</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Başarı Oranı</span>
                <strong style={{ color: "#10b981" }}>89.5%</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Gelir Trendi */}
        <div style={{ ...cardStyle, marginBottom: "32px" }}>
          <h2 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "20px" }}>
            💰 Gelir Trendi
          </h2>
          <div style={{ height: "250px" }}>
            <Line data={lineData} options={lineOptions} />
          </div>
        </div>

        {/* Gelişmiş Detay Tablosu */}
        <div style={cardStyle}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
            <h2 style={{ fontSize: "20px", fontWeight: "600", margin: 0 }}>
              📋 Detaylı Analiz
            </h2>
            <button style={{
              padding: "8px 16px",
              borderRadius: "8px",
              border: "1px solid #e2e8f0",
              backgroundColor: "white",
              color: "#64748b",
              fontSize: "14px",
              cursor: "pointer",
              transition: "all 0.2s ease"
            }}>
              📥 Excel'e Aktar
            </button>
          </div>
          
          <div style={{ overflowX: "auto", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
            <table style={{ 
              width: "100%", 
              borderCollapse: "collapse",
              backgroundColor: "white"
            }}>
              <thead>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <th style={{ 
                    padding: "16px", 
                    textAlign: "left", 
                    fontSize: "14px", 
                    color: "#374151",
                    fontWeight: "600"
                  }}>
                    Ay
                  </th>
                  <th style={{ 
                    padding: "16px", 
                    textAlign: "center", 
                    fontSize: "14px", 
                    color: "#374151",
                    fontWeight: "600"
                  }}>
                    Rezervasyon
                  </th>
                  <th style={{ 
                    padding: "16px", 
                    textAlign: "center", 
                    fontSize: "14px", 
                    color: "#374151",
                    fontWeight: "600"
                  }}>
                    Onaylanan
                  </th>
                  <th style={{ 
                    padding: "16px", 
                    textAlign: "center", 
                    fontSize: "14px", 
                    color: "#374151",
                    fontWeight: "600"
                  }}>
                    İptal
                  </th>
                  <th style={{ 
                    padding: "16px", 
                    textAlign: "right", 
                    fontSize: "14px", 
                    color: "#374151",
                    fontWeight: "600"
                  }}>
                    Gelir
                  </th>
                  <th style={{ 
                    padding: "16px", 
                    textAlign: "center", 
                    fontSize: "14px", 
                    color: "#374151",
                    fontWeight: "600"
                  }}>
                    Başarı Oranı
                  </th>
                </tr>
              </thead>
              <tbody>
                {chartsData.map((item, index) => {
                  const confirmed = Math.floor(item.value * 0.75);
                  const cancelled = Math.floor(item.value * 0.15);
                  const successRate = ((confirmed / item.value) * 100).toFixed(1);
                  
                  return (
                    <tr 
                      key={index}
                      style={{
                        borderBottom: "1px solid #f1f5f9",
                        transition: "background-color 0.2s ease"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#f8fafc";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                      }}
                    >
                      <td style={{ 
                        padding: "16px", 
                        fontWeight: "500",
                        color: "#1e293b"
                      }}>
                        {item.label}
                      </td>
                      <td style={{ 
                        padding: "16px", 
                        textAlign: "center",
                        fontWeight: "600"
                      }}>
                        {item.value}
                      </td>
                      <td style={{ 
                        padding: "16px", 
                        textAlign: "center",
                        color: "#10b981",
                        fontWeight: "500"
                      }}>
                        {confirmed}
                      </td>
                      <td style={{ 
                        padding: "16px", 
                        textAlign: "center",
                        color: "#ef4444",
                        fontWeight: "500"
                      }}>
                        {cancelled}
                      </td>
                      <td style={{ 
                        padding: "16px", 
                        textAlign: "right",
                        fontWeight: "600",
                        color: "#059669"
                      }}>
                        ₺{item.revenue.toLocaleString()}
                      </td>
                      <td style={{ 
                        padding: "16px", 
                        textAlign: "center"
                      }}>
                        <span style={{
                          backgroundColor: parseFloat(successRate) > 80 ? "#dcfce7" : parseFloat(successRate) > 60 ? "#fef3c7" : "#fef2f2",
                          color: parseFloat(successRate) > 80 ? "#166534" : parseFloat(successRate) > 60 ? "#92400e" : "#dc2626",
                          padding: "4px 8px",
                          borderRadius: "6px",
                          fontSize: "12px",
                          fontWeight: "600"
                        }}>
                          {successRate}%
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* İçgörüler Bölümü */}
        <div style={{ 
          ...cardStyle, 
          background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
          color: "white",
          marginTop: "32px"
        }}>
          <h2 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "16px", color: "white" }}>
            💡 Önemli İçgörüler
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
            <div>
              <h4 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "8px", color: "#cbd5e1" }}>
                En Yoğun Ay
              </h4>
              <p style={{ margin: 0, fontSize: "14px", color: "#e2e8f0" }}>
                Aralık ayında 90 rezervasyon ile en yüksek seviyeye ulaştınız
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "8px", color: "#cbd5e1" }}>
                Gelir Artışı
              </h4>
              <p style={{ margin: 0, fontSize: "14px", color: "#e2e8f0" }}>
                Son 3 ayda %24 gelir artışı kaydettiniz
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "8px", color: "#cbd5e1" }}>
                İptal Oranı
              </h4>
              <p style={{ margin: 0, fontSize: "14px", color: "#e2e8f0" }}>
                Ortalama %10 iptal oranıyla sektör ortalamasının altındasınız
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;