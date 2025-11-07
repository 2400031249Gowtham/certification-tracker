import React from 'react';

const CertificationDetail = ({ cert }) => (
  <div>
    <h2>{cert.name}</h2>
    <p>Issued By: {cert.issuedBy}</p>
    <p>Expiry Date: {cert.expiryDate}</p>
  </div>
);

export default CertificationDetail;
