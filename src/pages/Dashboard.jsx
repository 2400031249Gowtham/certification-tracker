import React from "react";
import { useCertificationState } from "../context/CertificationContext";

const Dashboard = () => {
  const { certifications } = useCertificationState();
  const expiringCount = certifications.filter(cert => {
    const days = (new Date(cert.expiryDate) - new Date()) / (1000 * 3600 * 24);
    return days < 30 && days > 0;
  }).length;
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Total Certifications: {certifications.length}</p>
      <p>Expiring Soon: {expiringCount}</p>
    </div>
  );
};
export default Dashboard;
