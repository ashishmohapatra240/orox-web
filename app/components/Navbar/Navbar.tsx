"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/Button";

const products = [
  {
    title: "OROX App",
    description: "Download from App and Play Store",
    href: "#",
  },
  {
    title: "Opus Diversified Nexus",
    description: "Subscription",
    href: "#",
  },
  {
    title: "DVOX — Digital Coin",
    description: "Utility Token",
    href: "#",
  },
];

const latestBlog = [
  {
    category: "UPDATES",
    title: "Trump Earned Millions From Meme Coin, 810000 Others Lost.",
    href: "#",
  },
  {
    category: "ADVICE & TIPS",
    title: "Never Invest More Than You Can Afford to Lose.",
    href: "#",
  },
  {
    category: "INSIGHTS",
    title: "The best crypto research tools for traders and investors.",
    href: "#",
  },
];

export const Navbar = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isQROpen, setIsQROpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="OROX"
            width={116}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        {/* Main Navigation */}
        <div className="hidden items-center space-x-8 lg:flex">
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            What we do
          </Link>
          
          {/* Products Dropdown */}
          <div className="relative">
            <button
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => {
                // Only close if not hovering over menu
                if (!document.querySelector(':hover')?.closest('.products-menu')) {
                  setIsProductsOpen(false);
                }
              }}
              className="flex items-center space-x-1 rounded-lg bg-gray-50 px-4 py-2 text-gray-600 hover:text-gray-900"
            >
              <span>Products</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className={`transform transition-transform duration-200 ${
                  isProductsOpen ? "rotate-180" : ""
                }`}
              >
                <path
                  d="M2 4L6 8L10 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Products Menu */}
            {isProductsOpen && (
              <div
                className="products-menu absolute left-1/2 top-full z-50 mt-2 w-screen max-w-[1200px] -translate-x-1/2 rounded-2xl bg-white p-6 shadow-lg"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <div className="grid grid-cols-[1fr_1.5fr_1fr] gap-8">
                  {/* Left Column - Product Suite */}
                  <div>
                    <h3 className="mb-4 text-xl font-bold text-[#19191B]">
                      Our product suite
                    </h3>
                    <div className="space-y-1">
                      {products.map((product) => (
                        <Link
                          key={product.title}
                          href={product.href}
                          className="group block rounded-lg p-3 hover:bg-gray-50"
                        >
                          <div className="font-medium text-gray-900">{product.title}</div>
                          <div className="text-sm text-gray-500">{product.description}</div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Middle Column - Blog Posts */}
                  <div>
                    <h3 className="mb-4 text-xl font-bold text-[#19191B]">
                      Latest from our Blog
                    </h3>
                    <div className="space-y-3">
                      {latestBlog.map((post) => (
                        <Link
                          key={post.title}
                          href={post.href}
                          className="group block rounded-lg p-3 hover:bg-gray-50"
                        >
                          <div className="text-xs font-medium uppercase text-gray-500">
                            {post.category}
                          </div>
                          <div className="mt-1 font-medium text-gray-900 group-hover:text-blue-600">
                            {post.title}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Right Column - Updates Card */}
                  <div className="flex justify-center items-center h-full w-full">
                    <Image
                      src="/images/Accessory.png"
                      alt="Accessory"
                      width={1200}
                      height={1200}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="#" className="text-gray-600 hover:text-gray-900">
            Blog
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            About
          </Link>

          {/* Support Dropdown */}
          <div className="relative">
            <button
              onMouseEnter={() => setIsSupportOpen(true)}
              onMouseLeave={() => setIsSupportOpen(false)}
              className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
            >
              <span>Support</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className={`transform transition-transform duration-200 ${
                  isSupportOpen ? "rotate-180" : ""
                }`}
              >
                <path
                  d="M2 4L6 8L10 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {isSupportOpen && (
              <div
                onMouseEnter={() => setIsSupportOpen(true)}
                onMouseLeave={() => setIsSupportOpen(false)}
                className="absolute right-0 top-full w-48 rounded-lg bg-white p-4 shadow-lg"
              >
                <div className="space-y-2">
                  <Link
                    href="#"
                    className="block rounded-lg p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  >
                    Help Center
                  </Link>
                  <Link
                    href="#"
                    className="block rounded-lg p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="#"
                    className="block rounded-lg p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  >
                    FAQs
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <Link
            href="#"
            className="hidden text-gray-600 hover:text-gray-900 lg:block"
          >
            Log in
          </Link>
          <Button>Join for free</Button>

          {/* QR Code Button */}
          <button
            onClick={() => setIsQROpen(!isQROpen)}
            className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 6V2h4M18 6V2h-4M2 14v4h4M18 14v4h-4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* QR Code Modal */}
            {isQROpen && (
              <div className="absolute right-0 top-full mt-4 w-80 rounded-lg bg-white p-4 shadow-lg">
                <div className="space-y-4">
                  <Image
                    src="/images/qr-code.png"
                    alt="OROX App QR Code"
                    width={300}
                    height={300}
                    className="mx-auto"
                  />
                  <div className="text-center">
                    <span className="text-sm text-gray-500">OR</span>
                  </div>
                  <button className="flex w-full items-center justify-center space-x-2 rounded-lg border border-gray-200 px-4 py-2 text-gray-600 hover:bg-gray-50">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 15v2h2M3 5V3h2M17 15v2h-2M17 5V3h-2"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Install APK</span>
                  </button>
                </div>
              </div>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}; 