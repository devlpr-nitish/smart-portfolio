import React from 'react';

export interface IconButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, label, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center justify-center gap-2 px-4 py-2 cursor-pointer rounded-lg bg-[#030507] text-white  transition ${className}`}
    >
      <span className="">{icon}</span>
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
};

export const IconTechStackButton: React.FC<IconButtonProps> = ({ icon, label, onClick, className = "" }) => {

    return (
        <button
            onClick={onClick}
            className={`flex items-center justify-center gap-2  px-2.5 py-1.5 rounded-lg bg-[#0A0C0E] border border-[#1a2129] text-[#CBCBCB]  transition ${className}`}
        >
            <span className="">{icon}</span>
            <span className="text-sm font-medium">{label}</span>
        </button>
    )
}


export default IconButton;
