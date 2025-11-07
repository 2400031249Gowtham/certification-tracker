import React, { useState } from 'react';
import Button from '../ui/Button';

const CertificationForm = ({ onSubmit, initialValues }) => {
  const [form, setForm] = useState(initialValues || {
    name: "",
    issuedBy: "",
    expiryDate: "",
  });

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(form);
    setForm({ name: "", issuedBy: "", expiryDate: "" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Certification Name" value={form.name} onChange={handleChange} required />
      <input name="issuedBy" placeholder="Issued By" value={form.issuedBy} onChange={handleChange} required />
      <input name="expiryDate" type="date" value={form.expiryDate} onChange={handleChange} required />

      <Button type="submit">Save</Button>
    </form>
  );
};

export default CertificationForm;
