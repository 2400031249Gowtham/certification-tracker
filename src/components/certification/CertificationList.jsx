import React from 'react';
import CertificationCard from './CertificationCard';

const CertificationList = ({ certifications, onDelete, onEdit }) => (
  <div>
    {certifications.map(cert => (
      <CertificationCard
        key={cert.id}
        certification={cert}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    ))}
  </div>
);

export default CertificationList;
