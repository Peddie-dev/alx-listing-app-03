import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  disabled = false,
  variant = "primary",
}) => {
  const baseClasses =
    "px-4 py-2 rounded-lg transition font-medium focus:outline-none focus:ring-2";
  const variantClasses =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-400"
      : "bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-400";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
