import React from 'react';
import logo from "../assest/logo.png"

const Logo = ({ w = 50, h = 50 }) => {
  return (
    <div className="flex items-center space-x-2">
      {/* Image Logo */}
      <img 
        src={logo} 
        alt="Shopsy Logo" 
        width={w} 
        height={h} 
        className="object-contain" 
      />
      {/* Logo Text */}
      <span className="text-xl font-bold">Shopsy</span>
    </div>
  );
};

export default Logo;
