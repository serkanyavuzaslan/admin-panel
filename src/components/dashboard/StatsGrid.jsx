import React from 'react';

const StatsGrid = ({ reservations }) => {
  const stats = [
    { 
      title: 'Günlük Rezervasyon', 
      value: reservations.length.toString(), 
      change: '+17% geçen aydan beri', 
      color: '#667eea',
      gradientColors: ['#667eea', '#764ba2'],
      icon: '📊',
      trend: 'up'
    },
    { 
      title: 'Onaylanan Rezervasyonlar', 
      value: reservations.filter(r => r.status === 'Onaylandı').length.toString(), 
      change: '+9% geçen aydan beri', 
      color: '#10d876',
      gradientColors: ['#10d876', '#06d8a8'],
      icon: '✅',
      trend: 'up'
    },
    { 
      title: 'Aktif Kampanyalar', 
      value: '17', 
      change: '+12% geçen aydan beri', 
      color: '#f59e0b',
      gradientColors: ['#f59e0b', '#f97316'],
      icon: '🎯',
      trend: 'up'
    },
    { 
      title: 'Toplam Misafirler', 
      value: reservations.reduce((total, r) => total + r.guests, 0).toString(), 
      change: '+35% geçen aydan beri', 
      color: '#8b5cf6',
      gradientColors: ['#2c5398ff', '#185a8aff'],
      icon: '👥',
      trend: 'up'
    }
  ];

  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)', // 4 sütun sabit
    gap: '16px',
    marginBottom: '32px'
  };

  const EnhancedStatCard = ({ title, value, change, color, gradientColors, icon, trend }) => {
    const cardStyles = {
      background: `linear-gradient(135deg, ${gradientColors[0]}, ${gradientColors[1]})`,
      borderRadius: '12px',
      padding: '16px',
      boxShadow: `0 4px 16px rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, 0.15)`,
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      minHeight: '120px'
    };

    const iconContainerStyles = {
      fontSize: '24px',
      marginBottom: '8px',
      display: 'inline-block',
      padding: '8px',
      background: 'rgba(255, 255, 255, 0.15)',
      borderRadius: '8px',
      backdropFilter: 'blur(10px)'
    };

    const titleStyles = {
      fontSize: '12px',
      fontWeight: '600',
      color: 'rgba(255, 255, 255, 0.9)',
      marginBottom: '6px',
      letterSpacing: '0.025em',
      textTransform: 'uppercase',
      lineHeight: '1.3'
    };

    const valueStyles = {
      fontSize: '22px',
      fontWeight: '800',
      color: '#ffffff',
      marginBottom: '8px',
      lineHeight: '1.1'
    };

    const changeStyles = {
      fontSize: '11px',
      color: 'rgba(255, 255, 255, 0.8)',
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      fontWeight: '500'
    };

    const trendIconStyles = {
      fontSize: '12px',
      color: trend === 'up' ? '#10d876' : '#ef4444'
    };

    const decorativeCircleStyles = {
      position: 'absolute',
      top: '-15px',
      right: '-15px',
      width: '50px',
      height: '50px',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '50%',
      opacity: 0.6
    };

    return (
      <div style={cardStyles}>
        <div style={decorativeCircleStyles}></div>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={iconContainerStyles}>{icon}</div>
          <div style={titleStyles}>{title}</div>
          <div style={valueStyles}>{value}</div>
          <div style={changeStyles}>
            <span style={trendIconStyles}>{trend === 'up' ? '↗' : '↘'}</span>
            {change}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={gridStyles}>
      {stats.map((stat, index) => (
        <EnhancedStatCard 
          key={index}
          title={stat.title}
          value={stat.value}
          change={stat.change}
          color={stat.color}
          gradientColors={stat.gradientColors}
          icon={stat.icon}
          trend={stat.trend}
        />
      ))}
    </div>
  );
};

export default StatsGrid;