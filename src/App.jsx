// 📁 Konum: src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ReservationProvider } from './context/ReservationContext.jsx';
import LoginPage from "./pages/Auth/LoginPage.jsx";
import DashboardPage from "./pages/Dashboard/DashboardPage.jsx";
import ReservationsPage from "./pages/Reservations/ReservationsPage.jsx";
import AnalyticsPage from "./pages/Analytics/AnalyticsPage.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx"; // ✅ doğru import

function App() {
  return (
    <ReservationProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/reservations" element={<ReservationsPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          
          {/* 404 route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ReservationProvider>
  );
}

export default App;
