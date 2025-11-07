import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const CertificationCard = ({ certification, onDelete, onEdit }) => {
  return (
    <Card style={{ marginBottom: 16 }}>
      <div><strong>{certification.name}</strong></div>
      <div>Issued By: {certification.issuedBy}</div>
      <div>Expiry Date: {certification.expiryDate}</div>
      <Button onClick={() => onEdit(certification.id)}>Edit</Button>
      <Button onClick={() => onDelete(certification.id)} style={{ marginLeft: 8 }}>Delete</Button>
    </Card>
  );
};

export default CertificationCard;
