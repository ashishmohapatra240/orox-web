import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "white" | "outline";
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
        rounded-full px-8 py-2 transition-all
        ${
          variant === "primary"
            ? "self-stretch px-4 py-2 bg-indigo-900 rounded-[32px] inline-flex justify-center items-center gap-2 hover:bg-[#293492]/90 text-white font-bold text-[14px]"
            : variant === "secondary"
            ? "self-stretch px-4 py-2 bg-white rounded-[32px] border border-emerald-300 inline-flex justify-center items-center gap-2 text-[#19191B] hover:text-[#293492] font-bold text-[14px]"
            : variant === "white"
            ? "self-stretch px-4 py-4 bg-white rounded-[32px] inline-flex justify-center items-center gap-2 text-[#293483] text-[16px] md:text-[20px] font-bold"
            : variant === "outline"
            ? "self-stretch px-4 py-4 bg-transparent rounded-[32px] border-2 border-[#78CAB9] inline-flex justify-center items-center gap-2 text-white font-bold text-[16px] md:text-[20px]"
            : ""
        }
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};
