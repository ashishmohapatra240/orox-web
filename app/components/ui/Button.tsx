import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`
        rounded-full px-8 py-2 font-medium transition-all
        ${
          variant === "primary"
            ? "self-stretch px-4 py-2 bg-indigo-900 rounded-[32px] inline-flex justify-start items-center gap-2 hover:bg-[#293492]/90 text-white font-bold"
            : "self-stretch px-4 py-2 bg-white rounded-[32px] border border-emerald-300 inline-flex justify-start items-center gap-2 text-[#19191B] hover:text-[#293492] font-bold"
        }
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};
