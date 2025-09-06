import React from 'react';

const StatsGrid = ({ reservations }) => {
  const stats = [
    { 
      title: 'Günlük Rezervasyon', 
      value: reservations.length.toString(), 
      change: '+17% geçen aydan beri', 
      gradientColors: ['#667eea', '#764ba2'],
      icon: '📊',
      trend: 'up'
    },
    { 
      title: 'Onaylanan Rezervasyonlar', 
      value: reservations.filter(r => r.status === 'Onaylandı').length.toString(), 
      change: '+9% geçen aydan beri', 
      gradientColors: ['#10d876', '#06d8a8'],
      icon: '✅',
      trend: 'up'
    },
    { 
      title: 'Aktif Kampanyalar', 
      value: '17', 
      change: '+12% geçen aydan beri', 
      gradientColors: ['#f59e0b', '#f97316'],
      icon: '🎯',
      trend: 'up'
    },
    { 
      title: 'Toplam Misafirler', 
      value: reservations.reduce((total, r) => total + r.guests, 0).toString(), 
      change: '+35% geçen aydan beri', 
      gradientColors: ['#2c5398ff', '#185a8aff'],
      icon: '👥',
      trend: 'up'
    }
  ];

  return (
    <div className="stats-grid">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="stat-card"
          style={{ background: `linear-gradient(135deg, ${stat.gradientColors[0]}, ${stat.gradientColors[1]})` }}
        >
          <div className="decorative-circle"></div>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div className="icon-container">{stat.icon}</div>
            <div className="title">{stat.title}</div>
            <div className="value">{stat.value}</div>
            <div className="change">
              <span className="trend-icon">{stat.trend === 'up' ? '↗' : '↘'}</span>
              {stat.change}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;
