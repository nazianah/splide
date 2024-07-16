import React from 'react';


const Button = ({ text, link, style, className }) => {
  return (
    <a href={link} style={{ textDecoration: 'none', ...style }}>
      <button className={`${className}`}>{text}</button>
    </a>
  );
}

export default Button;