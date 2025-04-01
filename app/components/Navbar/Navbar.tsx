"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Dropdown, DropdownItem } from "../ui/Dropdown";
import { Button } from "../ui/Button";
import { motion } from "framer-motion";

// Product dropdown content component
const ProductsDropdown = () => (
  <div className="flex flex-col lg:flex-row gap-6">
    <div className="space-y-2 w-full lg:w-1/3">
      <DropdownItem index={0}>
        <h3 className="font-semibold text-lg text-[#19191B] mb-6 pl-1 md:pl-4">
          Our product suite
        </h3>
      </DropdownItem>
      <div className="space-y-4">
        <DropdownItem index={1}>
          <div className="hover:bg-[#21275B]/10 rounded-lg p-1 md:p-4">
            <h4 className="font-medium text-[#19191B] text-[16px] font-regular">
              OROX App
            </h4>
            <p className="text-sm text-[#999999] font-regular text-[14px]">
              Download from App and Play Store
            </p>
          </div>
        </DropdownItem>
        <DropdownItem index={2}>
          <div className="hover:bg-[#21275B]/10 rounded-lg p-1 md:p-4">
            <h4 className="font-medium text-[#19191B] text-[16px] font-regular">
              Opus Diversified Nexus
            </h4>
            <p className="text-sm text-[#999999] font-regular text-[14px]">
              Subscription
            </p>
          </div>
        </DropdownItem>
        <DropdownItem index={3}>
          <div className="hover:bg-[#21275B]/10 rounded-lg p-1 md:p-4">
            <h4 className="font-medium text-[#19191B] text-[16px] font-regular">
              DVOX — Digital Coin
            </h4>
            <p className="text-sm text-[#999999] font-regular text-[14px]">
              Utility Token
            </p>
          </div>
        </DropdownItem>
      </div>
    </div>

    <div className="space-y-2 w-full lg:w-1/3">
      <DropdownItem index={4}>
        <h3 className="font-semibold text-lg text-[#19191B] mb-4 pl-1 md:pl-4">
          Latest from our Blog
        </h3>
      </DropdownItem>
      <div className="space-y-0">
        <DropdownItem index={5}>
          <div className="hover:bg-[#21275B]/10 rounded-lg p-1 md:p-4">
            <span className="text-xs font-semibold text-[#999999]">
              UPDATES
            </span>
            <h4 className="font-medium mt-1 text-[#19191B] text-[16px] font-regular">
              Trump Earned Millions From Meme Coin, 810000 Others Lost.
            </h4>
          </div>
        </DropdownItem>

        <DropdownItem index={6}>
          <div className="hover:bg-[#21275B]/10 rounded-lg p-1 md:p-4">
            <span className="text-xs font-semibold text-[#999999]">
              ADVICE & TIPS
            </span>
            <h4 className="font-medium mt-1 text-[#19191B] text-[16px] font-regular">
              Never Invest More Than You Can Afford to Lose.
            </h4>
          </div>
        </DropdownItem>

        <DropdownItem index={7}>
          <div className="hover:bg-[#21275B]/10 rounded-lg p-1 md:p-4">
            <span className="text-xs font-semibold text-[#999999]">
              INSIGHTS
            </span>
            <h4 className="font-medium mt-1 text-[#19191B] text-[16px] font-regular">
              The best crypto research tools for traders and investors.
            </h4>
          </div>
        </DropdownItem>
      </div>
    </div>

    {/* Divider - only visible on desktop */}
    <div className="hidden lg:block w-0.5 self-stretch bg-neutral-200 mx-4" />

    {/* Image section - only visible on larger screens */}
    <DropdownItem index={8}>
      <div className="hidden lg:block space-y-2 w-full">
        <div className="flex justify-center items-center w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <Image
              src="https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/products/blog.png"
              alt="Blog Image"
              width={600}
              height={400}
              className="w-[600px] h-auto"
            />
          </motion.div>
        </div>
      </div>
    </DropdownItem>
  </div>
);

// Support dropdown content component
const SupportDropdown = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <DropdownItem index={0}>
      <div className="space-y-4">
        <h3 className="font-semibold text-lg text-[#293483]">Help Center</h3>
        <ul className="space-y-2">
          <li>
            <Link href="/" className="hover:text-[#2F5DFD]">
              FAQ
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-[#2F5DFD]">
              Contact Us
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-[#2F5DFD]">
              Submit a Ticket
            </Link>
          </li>
        </ul>
      </div>
    </DropdownItem>

    <DropdownItem index={1}>
      <div className="space-y-4">
        <h3 className="font-semibold text-lg text-[#293483]">Resources</h3>
        <ul className="space-y-2">
          <li>
            <Link href="/" className="hover:text-[#2F5DFD]">
              User Guides
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-[#2F5DFD]">
              Video Tutorials
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-[#2F5DFD]">
              Crypto Glossary
            </Link>
          </li>
        </ul>
      </div>
    </DropdownItem>

    <DropdownItem index={2}>
      <div className="space-y-4">
        <h3 className="font-semibold text-lg text-[#293483]">Community</h3>
        <ul className="space-y-2">
          <li>
            <Link
              href="https://discord.gg/orox"
              className="hover:text-[#2F5DFD]"
            >
              Discord
            </Link>
          </li>
          <li>
            <Link
              href="https://t.me/oroxofficial"
              className="hover:text-[#2F5DFD]"
            >
              Telegram
            </Link>
          </li>
          <li>
            <Link
              href="https://twitter.com/orox"
              className="hover:text-[#2F5DFD]"
            >
              Twitter
            </Link>
          </li>
        </ul>
      </div>
    </DropdownItem>
  </div>
);

export const Navbar = () => {
  const [isQROpen, setIsQROpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const qrModalRef = useRef<HTMLDivElement>(null);
  const [, setNavbarHeight] = useState(70);
  const navbarRef = useRef<HTMLDivElement>(null);

  // Measure navbar height for dropdown positioning
  useEffect(() => {
    if (navbarRef.current) {
      const updateHeight = () => {
        if (navbarRef.current) {
          setNavbarHeight(navbarRef.current.offsetHeight);
        }
      };

      updateHeight();
      window.addEventListener("resize", updateHeight);
      return () => window.removeEventListener("resize", updateHeight);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        qrModalRef.current &&
        !qrModalRef.current.contains(event.target as Node)
      ) {
        setIsQROpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu when dropdown is opened
  useEffect(() => {
    if (activeDropdown) {
      setIsMobileMenuOpen(false);
    }
  }, [activeDropdown]);

  // // Handle body scroll lock when mobile menu is open
  // useEffect(() => {
  //   if (isMobileMenuOpen || activeDropdown || isQROpen) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "";
  //   }

  //   return () => {
  //     document.body.style.overflow = "";
  //   };
  // }, [isMobileMenuOpen, activeDropdown, isQROpen]);

  // const toggleMobileDropdown = (dropdown: string) => {
  //   setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  // };

  return (
    <header
      className="fixed top-0 z-50 w-full bg-white border-b border-[#F4F4F4]"
      ref={navbarRef}
    >
      <nav className="mx-auto max-w-7xl flex items-center justify-between py-5 px-4 md:px-6 lg:px-0">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/logo.png"
            alt="OROX"
            width={116}
            height={40}
            className="h-8 sm:h-10 w-auto"
          />
        </Link>

        {/* Mobile menu button and QR section */}
        <div className="flex items-center space-x-4">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              setActiveDropdown(null);
            }}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
          {/* <hr className="md:hidden h-[24px] w-[2px] bg-[#C9CCE0]" /> */}

          {/* Mobile QR Button - only visible on mobile
          <button
            onClick={() => setIsQROpen(!isQROpen)}
            className="md:hidden relative flex h-10 w-10 items-center justify-center hover:bg-[#E9E9EF] rounded-[8px] p-2"
            aria-label="QR code"
          >
            <Image
              src="/icons/QR.svg"
              alt="QR Icon"
              width={20}
              height={20}
              className="h-6 w-6"
            />
          </button> */}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1 md:space-x-3 lg:space-x-5">
          <Link href="/products">
            <Dropdown
              label="Products"
              trigger={
                <div className="flex items-center space-x-1">
                  <span>Products</span>
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              }
            >
              <ProductsDropdown />
            </Dropdown>
          </Link>

          <Link
            href="/"
            className="px-3 py-2 rounded-md hover:bg-[#E9E9EF] transition-colors"
          >
            Blog
          </Link>

          <Link
            href="/about"
            className="px-3 py-2 rounded-md hover:bg-[#E9E9EF] transition-colors"
          >
            About
          </Link>

          <Dropdown
            label="Support"
            trigger={
              <div className="flex items-center space-x-1">
                <span>Support</span>
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            }
          >
            <SupportDropdown />
          </Dropdown>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-y-0 right-0 z-[60] bg-white md:hidden w-[280px] shadow-lg flex flex-col h-screen overflow-y-auto overscroll-contain"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {/* Close button header */}
            <div className="fixed top-0 right-0 w-[280px] h-[70px] bg-white border-b border-[#F4F4F4] flex items-center justify-end px-4 z-[61]">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2"
                aria-label="Close menu"
              >
                <svg
                  className="h-6 w-6 text-[#19191B]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Menu content */}
            <div className="pt-[70px]" />

            <div
              className="flex flex-col flex-1"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="px-6 pt-8">
                {/* Navigation Links */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between text-[16px] text-[#19191B]">
                    <Link href="/products">Products</Link>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      className="text-[#999999]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <hr className="border-t border-[#F4F4F4]" />

                  <Link href="/" className="block text-[16px] text-[#19191B]">
                    Blog
                  </Link>
                  <hr className="border-t border-[#F4F4F4]" />

                  <Link
                    href="/about"
                    className="block text-[16px] text-[#19191B]"
                  >
                    About
                  </Link>
                  <hr className="border-t border-[#F4F4F4]" />
                  <div className="flex items-center justify-between text-[16px] text-[#19191B] mb-[16px]">
                    <Link href="/">Support</Link>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      className="text-[#999999]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
                {/* Auth Buttons */}
                <div className="space-y-3 mt-[64px] mb-[24px]">
                  <Link href="/">
                    <Button
                      variant="secondary"
                      className="w-full block border border-[#78CAB9] hover:border-gray-300 whitespace-nowrap"
                    >
                      Log in
                    </Button>
                  </Link>
                  <Link href="/signup" className="w-full block">
                    <Button className="w-full bg-[#293483] rounded-full whitespace-nowrap">
                      Join for free
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* QR Code section */}
            <div className="px-6 pb-8 mt-auto">
              <hr className="border-t border-[#F4F4F4] mb-[24px]" />
              <div className="mb-[32px]">
                <Image
                  src="https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/qr-code.png"
                  alt="QR Code"
                  width={160}
                  height={160}
                  className="mx-auto rounded-2xl bg-white shadow-sm"
                />
              </div>
            </div>
          </div>
        )}

        {/* Mobile menu backdrop */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/30 z-[55]"
            style={{ top: "0px" }}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-2 md:space-x-3 lg:space-x-4">
          <Link href="/">
            <Button
              variant="secondary"
              className="px-3 md:px-4 lg:px-6 whitespace-nowrap"
            >
              Log in
            </Button>
          </Link>
          <Link href="/">
            <Button className="px-3 md:px-4 lg:px-6 whitespace-nowrap">
              Join for free
            </Button>
          </Link>

          <hr className="h-[36px] w-[2px] bg-[#C9CCE0]" />

          {/* QR Code Button */}
          <button
            onClick={() => setIsQROpen(!isQROpen)}
            className="relative flex h-10 w-10 items-center justify-center hover:bg-[#E9E9EF] rounded-[8px] md:p-1.5 lg:p-2"
            aria-label="QR code"
          >
            <Image
              src="/icons/QR.svg"
              alt="QR Icon"
              width={20}
              height={20}
              className="h-6 w-6 lg:h-[24px] lg:w-[24px]"
            />
          </button>
        </div>

        {isQROpen && (
          <>
            {/* Mobile QR dropdown - positioned below the navbar */}
            <div className="md:hidden fixed top-[70px] right-0 bg-white z-[9999] rounded-bl-xl shadow-lg w-[280px] p-6">
              <div className="flex flex-col">
                {/* QR Code */}
                <div className="block mb-8">
                  <Image
                    src="https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/qr-code.png"
                    alt="OROX App QR Code"
                    width={300}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>

                {/* Close button */}
                <button
                  onClick={() => setIsQROpen(false)}
                  className="flex w-full items-center justify-end space-x-1 text-sm text-[#2F5DFD]"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span className="font-semibold">Close</span>
                </button>
              </div>
            </div>

            {/* Desktop QR dropdown - unchanged */}
            <div
              ref={qrModalRef}
              className="hidden md:block absolute right-[120px] top-[60px] bg-white
                        mt-5 w-64 md:w-80 rounded-b-xl border border-[#F4F4F4] p-8
                        shadow-xl z-50"
            >
              <div className="w-full">
                <div className="bg-white h-full">
                  <div className="flex flex-col">
                    {/* QR Code */}
                    <div className="block mb-8">
                      <Image
                        src="https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/qr-code.png"
                        alt="OROX App QR Code"
                        width={300}
                        height={300}
                        className="w-full h-auto"
                      />
                    </div>

                    {/* Close button */}
                    <button
                      onClick={() => setIsQROpen(false)}
                      className="flex w-full items-center justify-end space-x-1 text-sm text-[#2F5DFD]"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      <span className="font-semibold">Close</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="fixed inset-0 bg-transparent z-[9998]"
              onClick={() => setIsQROpen(false)}
            />
          </>
        )}
      </nav>
    </header>
  );
};
