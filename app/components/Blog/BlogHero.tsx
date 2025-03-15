"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Category = {
  id: string;
  label: string;
  content: {
    image: string;
    title: string;
    description: string;
    slug: string;
  };
};

const blogCategories: Category[] = [
  {
    id: "latest",
    label: "Latest",
    content: {
      image: "/images/blog/blog-hero.png",
      title: "The Relationship Between Time Horizon and Investment",
      description:
        "Risk is a fact of investing. Your willingness to take risk as an investor is a big part of why you choose certain investments over others...",
      slug: "time-horizon-investment",
    },
  },
  {
    id: "customer-stories",
    label: "Customer stories",
    content: {
      image: "/images/blog/blog-hero.png",
      title: "How John Transformed His Investment Strategy with OROX",
      description:
        "Discover how our platform helped transform a traditional investment approach into a modern, efficient strategy...",
      slug: "customer-success-story",
    },
  },
  {
    id: "growth",
    label: "Growth",
    content: {
      image: "/images/blog/blog-hero.png",
      title: "5 Key Growth Strategies for Modern Investors",
      description:
        "Learn about the most effective growth strategies that are shaping the future of investment in the digital age...",
      slug: "growth-strategies",
    },
  },
  {
    id: "industry-updates",
    label: "Industry updates",
    content: {
      image: "/images/blog/blog-hero.png",
      title: "Latest Trends in Digital Investment Platforms",
      description:
        "Stay updated with the latest developments and innovations in the digital investment industry...",
      slug: "industry-trends",
    },
  },
  {
    id: "technology",
    label: "Technology",
    content: {
      image: "/images/blog/blog-hero.png",
      title: "How AI is Reshaping Investment Decisions",
      description:
        "Explore the revolutionary impact of artificial intelligence on modern investment strategies and decision-making...",
      slug: "ai-investment",
    },
  },
  {
    id: "tips-tricks",
    label: "Tips and tricks",
    content: {
      image: "/images/blog/blog-hero.png",
      title: "Essential Tips for Beginning Investors",
      description:
        "Master the fundamentals of investing with these practical tips and proven strategies for newcomers...",
      slug: "beginner-tips",
    },
  },
];

const BlogHero = () => {
  const [activeCategory, setActiveCategory] = useState(blogCategories[0]);

  return (
    <section className="w-full bg-white py-12 md:py-22 lg:py-[88px]">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:gap-12">
          {/* Left Column - Title, Description, Categories */}
          <div className="mb-10 lg:mb-0 lg:w-[360px]">
            <div className="flex flex-col gap-8">
              {/* Title and Description */}
              <div className="text-center lg:text-left">
                <h1 className="text-[40px] md:text-[64px] font-bold text-[#19191B]">
                  OROX blog
                </h1>
                <p className="mt-6 text-[16px] md:text-[20px] leading-6 lg:text-xl lg:leading-8 text-[#19191B]">
                  Stay ahead of the game! Get expert insights, market trends and
                  smart investment strategies designed for the modern investor.
                </p>
              </div>

              {/* Categories */}
              <div className="no-scrollbar overflow-x-auto lg:overflow-visible">
                <div className="flex lg:flex-col gap-6 lg:gap-6 min-w-max lg:min-w-0 items-start">
                  {blogCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category)}
                      className={`pb-2 whitespace-nowrap transition-all duration-300 ${
                        activeCategory.id === category.id
                          ? "border-b-2 lg:border-b-4 border-[#78CAB9] text-[#293483]"
                          : "text-[#19191B]/50 hover:text-[#19191B]/70 lg:text-[16px] md:text-[20px]"
                      }`}
                    >
                      <span className="text-base lg:text-xl font-bold">
                        {category.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Featured Post */}
          <div className="flex-1">
            <div className="flex flex-col gap-8">
              <div className="relative aspect-[343/372] lg:aspect-[872/449] w-full">
                <Image
                  src={activeCategory.content.image}
                  alt={activeCategory.content.title}
                  fill
                  className="object-cover rounded-2xl lg:rounded-[32px] transition-opacity duration-300"
                  priority
                />
              </div>

              <div className="flex flex-col gap-6">
                <div className="space-y-2 text-left">
                  <h2 className="text-[20px] md:text-[28px] font-bold leading-10 text-[#19191B]">
                    {activeCategory.content.title}
                  </h2>
                  <p className="text-[16px] md:text-[20px] leading-8 text-[#19191B]">
                    {activeCategory.content.description}
                  </p>
                </div>

                <Link
                  href={`/blog/${activeCategory.content.slug}`}
                  className="inline-flex items-center gap-2 text-[#2F5DFD] font-bold hover:opacity-80 transition-opacity"
                >
                  <span className="text-[14px]">Learn more</span>
                  <Image
                    src="/icons/arrow.svg"
                    alt="Arrow right"
                    width={18}
                    height={18}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
