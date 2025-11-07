import React from "react";

const FormInput = ({ label, ...props }) => (
  <div style={{ marginBottom: 12 }}>
    <label>
      {label}<br />
      <input {...props} />
    </label>
  </div>
);

export default FormInput;
