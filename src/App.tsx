import React, { useEffect } from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "./pages/login-page";
import { Header } from "./components/header";
import { RegisterPage } from "./pages/register-page";
import { DashboardPage } from "./pages/dashboard-page";
import { HomePage } from "./pages/home-page";
import { withAuth } from "./components/withAuth";

const App: React.FC = () => {
  const { theme } = useTheme();

  const AuthDashboard = withAuth(DashboardPage);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<AuthDashboard />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

const Root: React.FC = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default Root;
