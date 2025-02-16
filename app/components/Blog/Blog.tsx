import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    image: "/images/blog/time-horizon.jpg",
    title: "The Relationship Between Time Horizon and Investing Risk",
    description:
      "Risk is a fact of investing. Your willingness to take risk as an investor is a big part of why you...",
    link: "#",
  },
  {
    image: "/images/blog/government-bonds.jpg",
    title: "An introduction to the appeal of Australian Government Bonds",
    description:
      "Australian Government Bonds (AGBs), or Australian treasuries, are debt securities issued...",
    link: "#",
  },
  {
    image: "/images/blog/aussie-websites.png",
    title: "Aussie websites to help you make (or save) money",
    description:
      "We've done the research for you and found some awesome websites that might help you...",
    link: "#",
  },
  {
    image: "/images/blog/robo-advisor.jpg",
    title: "Difference between stand-alone adviser and robo",
    description:
      "All independent advisers are standalone, but not all robo advisors are...",
    link: "#",
  },
];

export const Blog = () => {
  return (
    <section className="w-full px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-12">
          {/* Header */}
          <h2 className="text-4xl font-bold text-[#19191B] md:text-5xl">
            Insights, trends and smart investing
          </h2>

          {/* Articles Grid/Slider */}
          <div className="relative">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {articles.map((article, index) => (
                <Link
                  key={index}
                  href={article.link}
                  className="group space-y-4"
                >
                  {/* Image Container */}
                  <div className="relative aspect-square overflow-hidden rounded-3xl">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-[#19191B] group-hover:text-blue-600">
                      {article.title}
                    </h3>
                    <p className="text-gray-600">{article.description}</p>
                    <div className="flex items-center space-x-2 text-blue-600">
                      <span className="text-sm font-medium">Read more</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-transform group-hover:translate-x-1"
                      >
                        <path
                          d="M1 8H15M15 8L8 1M15 8L8 15"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="mt-8 flex justify-center space-x-4">
              <button className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-[#19191B] transition-colors hover:bg-gray-200">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="rotate-180"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#293483] text-white transition-colors hover:bg-[#293483]/90">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 