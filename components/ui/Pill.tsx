// components/ui/Pill.tsx
import React from "react";

interface PillProps {
  label: string;
  onClick?: () => void;
  active?: boolean;
}

const Pill: React.FC<PillProps> = ({ label, onClick, active }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm transition-colors
        ${active ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-blue-600 hover:text-white"}
      `}
    >
      {label}
    </button>
  );
};

export default Pill;
