import { ReactNode } from "react";

interface CardProps {
  variant?: "default" | "outlined" | "shadowed";
  title?: string;
  children: ReactNode;
  footer?: ReactNode;
}

export const Card = ({ variant = "default", title, children, footer }: CardProps) => {
  const variants: Record<string, string> = {
    default: "bg-white p-4 rounded-lg",
    outlined: "border border-gray-300 bg-white p-4 rounded-lg",
    shadowed: "bg-white p-4 rounded-lg shadow-md",
  };

  return (
    <div className={variants[variant]}>
      {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
      <div>{children}</div>
      {footer && <div className="mt-4">{footer}</div>}
    </div>
  );
};
