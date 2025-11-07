import React from 'react';
import { useParams } from 'react-router-dom';
import { useCertificationState } from '../context/CertificationContext';

const CertificationDetail = () => {
  const { certifications } = useCertificationState();
  const { id } = useParams();
  const cert = certifications.find(c => String(c.id) === id);

  if (!cert) return <p>Certification not found.</p>;

  return (
    <div>
      <h2>{cert.name}</h2>
      <p>Issued By: {cert.issuedBy}</p>
      <p>Expiry Date: {cert.expiryDate}</p>
    </div>
  );
};

export default CertificationDetail;
