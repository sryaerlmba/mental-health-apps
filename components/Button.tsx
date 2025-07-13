import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  children: React.ReactNode;
};

export default function Button({
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={`py-2 px-4 cursor-pointer ${className}`} {...props}>
      {children}
    </button>
  );
}
