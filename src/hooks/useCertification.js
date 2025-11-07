import { useState, useEffect } from 'react';

const useCertifications = () => {
  const [certifications, setCertifications] = useState([]);
  useEffect(() => {
    const stored = localStorage.getItem('certifications');
    if (stored) setCertifications(JSON.parse(stored));
  }, []);
  useEffect(() => {
    localStorage.setItem('certifications', JSON.stringify(certifications));
  }, [certifications]);
  return [certifications, setCertifications];
};

export default useCertifications;
