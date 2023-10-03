import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { RecoilRoot, useRecoilValue } from "recoil";
import { LoginPage } from "./pages/login-page";
import { Header } from "./components/header";
import { RegisterPage } from "./pages/register-page";
import { DashboardPage } from "./pages/dashboard-page";
import { HomePage } from "./pages/home-page";
import { withAuth } from "./components/withAuth";
import { themeState } from "./RecoilStates";

const App: React.FC = () => {
  const theme = useRecoilValue(themeState);

  const AuthDashboard = withAuth(DashboardPage);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<AuthDashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
};

const Root: React.FC = () => (
  <BrowserRouter>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </BrowserRouter>
);

export default Root;
