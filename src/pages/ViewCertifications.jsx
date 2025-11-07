import React from "react";
import CertificationList from "../components/certification/CertificationList";
import { useCertificationState, useCertificationDispatch } from "../context/CertificationContext";

const ViewCertifications = () => {
  const { certifications } = useCertificationState();
  const dispatch = useCertificationDispatch();

  const handleDelete = id => dispatch({ type: "DELETE_CERTIFICATION", payload: id });
  const handleEdit = id => alert("Edit logic for ID " + id); // Placeholder

  return (
    <div>
      <h2>Your Certifications</h2>
      <CertificationList certifications={certifications} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
};

export default ViewCertifications;
