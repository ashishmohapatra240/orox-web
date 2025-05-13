"use client";
import Image from "next/image";
import Link from "next/link";

export const BlogCard = ({
  image,
  title,
  description,
  link,
}: {
  image: string;
  title: string;
  description: string;
  link: string;
}) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group space-y-4 w-[295px] md:w-[356px] flex-shrink-0 hover:shadow-[0px_24px_16px_-10px_#0000001A] p-[16px] transition-all duration-300 rounded-[32px]"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-[32px] w-[295px] h-[372px] md:w-auto md:h-[448px] ">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div>
        <h3 className="text-[28px] font-bold text-[#19191B] leading-[40px] mt-[30px]">
          {title}
        </h3>
        <p className="text-[20px] text-[#19191B] leading-[32px] mt-2">
          {description}
        </p>
        <div className="flex items-center space-x-2 text-[#2F5DFD] mt-[24px] hover:text-[#21275B] hover:bg-[#21275B]/10 rounded-[8px] p-[8px] transition-colors duration-100 w-fit">
          <span className="text-[14px] font-bold transition-colors duration-100">
            Read more
          </span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-colors duration-100"
          >
            <path
              d="M6.75 3.75V5.25H11.6925L3 13.9425L4.0575 15L12.75 6.3075V11.25H14.25V3.75H6.75Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
};
