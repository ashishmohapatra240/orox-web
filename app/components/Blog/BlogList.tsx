"use client";
import { useState } from "react";
import { BlogCard } from "./BlogCard";
import Image from "next/image";

const blogPosts = [
  {
    image: "/images/blog/blog-hero.png",
    title: "Subheading goes here",
    description:
      "Lorem ipsum dolor sit amet, varius consectetur adipiscing facilisis elit.",
    link: "/blog/post-1",
  },
  {
    image: "/images/blog/blog-hero.png",
    title: "Subheading goes here",
    description:
      "Lorem ipsum dolor sit amet, varius consectetur adipiscing facilisis elit.",
    link: "/blog/post-2",
  },
  {
    image: "/images/blog/blog-hero.png",
    title: "Subheading goes here",
    description:
      "Lorem ipsum dolor sit amet, varius consectetur adipiscing facilisis elit.",
    link: "/blog/post-3",
  },
  {
    image: "/images/blog/blog-hero.png",
    title: "Subheading goes here",
    description:
      "Lorem ipsum dolor sit amet, varius consectetur adipiscing facilisis elit.",
    link: "/blog/post-4",
  },
  {
    image: "/images/blog/blog-hero.png",
    title: "Subheading goes here",
    description:
      "Lorem ipsum dolor sit amet, varius consectetur adipiscing facilisis elit.",
    link: "/blog/post-5",
  },
  {
    image: "/images/blog/blog-hero.png",
    title: "Subheading goes here",
    description:
      "Lorem ipsum dolor sit amet, varius consectetur adipiscing facilisis elit.",
    link: "/blog/post-6",
  },
];

const ITEMS_PER_PAGE = 6;

export const BlogList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogPosts.length / ITEMS_PER_PAGE);

  const indexOfLastPost = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - ITEMS_PER_PAGE;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Grid of Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {currentPosts.map((post, index) => (
            <BlogCard
              key={index}
              image={post.image}
              title={post.title}
              description={post.description}
              link={post.link}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-16 flex justify-center items-center gap-2">
          {/* Previous Button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 disabled:opacity-50"
            aria-label="Previous page"
          >
            <Image
              src="/icons/ic_chevron_left.svg"
              alt="Previous"
              width={18}
              height={18}
            />
          </button>

          {/* Page Numbers */}
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => handlePageChange(number)}
              className={`w-8 h-8 flex items-center justify-center rounded-sm text-sm font-bold transition-colors
                ${
                  currentPage === number
                    ? "bg-[#293483] text-white"
                    : "text-[#19191B] hover:bg-gray-100"
                }`}
            >
              {number}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 disabled:opacity-50"
            aria-label="Next page"
          >
            <Image
              src="/icons/ic_chevron_right.svg"
              alt="Next"
              width={18}
              height={18}
            />
          </button>
        </div>
      </div>
    </section>
  );
};
