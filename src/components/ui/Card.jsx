import React from 'react';

const Card = ({ children, style }) => (
  <div style={{
    border: "1px solid #ddd",
    borderRadius: 8,
    padding: 16,
    background: "white",
    boxShadow: "0 2px 5px rgba(0,0,0,0.07)",
    ...style
  }}>
    {children}
  </div>
);

export default Card;
