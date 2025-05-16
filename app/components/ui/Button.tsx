import { ButtonHTMLAttributes, ReactNode } from "react";
import Image from "next/image";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "white" | "outline" | "link" | "dvox";
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
        rounded-full transition-all
        ${
          variant === "primary"
            ? "self-stretch px-4 py-2 bg-[#293492] rounded-[32px] inline-flex justify-center items-center gap-2 hover:bg-[#212A69] text-white font-bold text-[14px]"
            : variant === "secondary"
            ? "self-stretch px-4 py-2 bg-white rounded-[32px] border border-emerald-300 inline-flex justify-center items-center gap-2 text-[#19191B] hover:text-[#1F2461] font-bold text-[14px] hover:bg-[#F2F2F2]"
            : variant === "white"
            ? "self-stretch px-4 py-4 bg-white rounded-[32px] inline-flex justify-center items-center gap-2 text-[#293483] text-[16px] md:text-[20px] font-bold hover:bg-[#F2F2F2] hover:text-[#1F2461]"
            : variant === "outline"
            ? "self-stretch px-4 py-4 bg-transparent rounded-[32px] border-2 border-[#78CAB9] inline-flex justify-center items-center gap-2 text-white font-bold text-[16px] md:text-[20px]"
            : variant === "link"
            ? "inline-flex items-center gap-2 text-[#2F5DFD] hover:text-blue-500 font-bold"
            : variant === "dvox"
            ? `relative p-px rounded-[32px] inline-flex items-center justify-center
               bg-gradient-to-b from-[#F9DF7B] via-[#B57E10] to-[#F9DF7B]`
            : ""
        }
        ${className}
      `}
      {...props}
    >
      {variant === "dvox" ? (
        <span className="bg-black w-full h-full rounded-[31px] px-4 py-2 inline-flex items-center justify-center gap-2 text-white font-bold text-[14px]">
          {children}
        </span>
      ) : (
        children
      )}

      {variant === "link" && (
        <Image
          src="/icons/ic_north_east.svg"
          alt="Arrow right"
          width={24}
          height={24}
        />
      )}
    </button>
  );
};
