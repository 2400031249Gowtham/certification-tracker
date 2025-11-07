import React from "react";
import CertificationForm from "../components/form/CertificationForm";
import { useCertificationDispatch } from "../context/CertificationContext";

const AddCertification = () => {
  const dispatch = useCertificationDispatch();

  function handleSubmit(data) {
    dispatch({ type: "ADD_CERTIFICATION", payload: { ...data, id: Date.now() } });
  }

  return (
    <div>
      <h2>Add Certification</h2>
      <CertificationForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddCertification;
