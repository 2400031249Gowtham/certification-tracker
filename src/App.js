import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CertificationProvider } from "./context/CertificationContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AddCertification from "./pages/AddCertification";
import ViewCertifications from "./pages/ViewCertifications";
import RenewalPage from "./pages/RenewalPage";
import "./styles/App.css";

function App() {
  return (
    <CertificationProvider>
      <BrowserRouter>
        <Navbar />
        <div style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/certifications" element={<ViewCertifications />} />
            <Route path="/certifications/add" element={<AddCertification />} />
            <Route path="/renewals" element={<RenewalPage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </CertificationProvider>
  );
}

export default App;
