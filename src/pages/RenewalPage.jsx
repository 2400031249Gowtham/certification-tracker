import React from "react";
import { useCertificationState } from "../context/CertificationContext";

const RenewalPage = () => {
  const { certifications } = useCertificationState();
  const expiring = certifications.filter(cert => {
    const days = (new Date(cert.expiryDate) - new Date()) / (1000 * 3600 * 24);
    return days < 30 && days > 0;
  });
  return (
    <div>
      <h2>Renewal Deadlines</h2>
      {expiring.length === 0
        ? <p>No certifications expiring soon.</p>
        : expiring.map(cert => (
          <div key={cert.id}>
            <span>
              {cert.name} expires on {cert.expiryDate}
            </span>
          </div>
        ))
      }
    </div>
  );
};
export default RenewalPage;
