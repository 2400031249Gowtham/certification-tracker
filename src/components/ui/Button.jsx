import React from 'react';

const Button = ({ children, onClick, type = "button", style, ...props }) => (
  <button type={type} onClick={onClick} style={style} {...props}>
    {children}
  </button>
);

export default Button;
