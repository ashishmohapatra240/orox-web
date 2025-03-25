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
      className="group space-y-4 w-[295px] md:w-[356px] flex-shrink-0"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-3xl w-[295px] h-[372px] md:w-[356px] md:h-[448px]">
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
        <p className="text-[20px] text-[#19191B] leading-[24px] md:leading-[32px] mt-2">
          {description}
        </p>
        <div className="flex items-center space-x-2 text-[#2F5DFD] mt-[24px]">
          <span className="text-[14px] font-bold ">Read more</span>
          <Image
            src="/icons/arrow.svg"
            alt="Read more"
            width={14}
            height={14}
          />
        </div>
      </div>
    </Link>
  );
};
