import { Loader } from "./../Icons/Loader";
import { ReactNode } from "react";

export interface ButtonProps {
  variant: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  text: string;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({
  variant = "primary",
  size = "md",
  text,
  isLoading = false,
  leftIcon,
  rightIcon,
  disabled = false,
  onClick,
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none relative";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500",
    outline: "border-2 border-gray-300 hover:bg-gray-100 focus:ring-gray-500",
    ghost: "hover:bg-gray-100 focus:ring-gray-500",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  };

  const sizes = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]}`}
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      {isLoading && <Loader className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 animate-spin" />}
      {!isLoading && (
        <>
          {leftIcon && <span className="mr-2">{leftIcon}</span>}
          {text}
          {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </>
      )}
    </button>
  );
};
