import React from 'react';

const Modal = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div style={{
      position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
      background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center"
    }}>
      <div style={{ background: "#fff", borderRadius: 8, padding: 24, minWidth: 300 }}>
        {children}
        <button style={{ marginTop: 12 }} onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
