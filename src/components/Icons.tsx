import React from 'react';

export const AlchemyLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`relative ${className}`}>
      <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 15C30 15 20 35 20 50C20 65 30 85 50 85C70 85 80 65 80 50C80 35 70 15 50 15Z" fill="#6b21a8" />
        <path d="M50 25C35 25 30 40 30 50C30 60 35 75 50 75C65 75 70 60 70 50C70 40 65 25 50 25Z" fill="#d946ef" />
        <path d="M50 40C40 40 38 47 38 50C38 53 40 60 50 60C60 60 62 53 62 50C62 47 60 40 50 40Z" fill="#0f0f0f" />
        <path d="M52 35V15C52 15 60 15 60 25C60 35 52 35 52 35Z" fill="#6b21a8" />
      </svg>
    </div>
  );
};

export const ArrowRight: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M5 12h14"></path>
      <path d="m12 5 7 7-7 7"></path>
    </svg>
  );
};