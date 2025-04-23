"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Dropdown, DropdownItem } from "../ui/Dropdown";
import { Button } from "../ui/Button";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { PlayStoreButton } from "../ui/PlayStoreButton";
import { AppStoreButton } from "../ui/AppStoreButton";

// Product dropdown content component
const ProductsDropdown = ({ isDarkTheme }: { isDarkTheme?: boolean }) => (
  <div className="flex flex-col lg:flex-row gap-6">
    <div className="space-y-2 lg:w-1/3">
      <DropdownItem index={0}>
        <h3
          className={`font-semibold text-lg ${
            isDarkTheme ? "text-white" : "text-[#19191B]"
          } mb-6 pl-1 md:pl-4`}
        >
          Our product suite
        </h3>
      </DropdownItem>
      <div className="space-y-4">
        <DropdownItem index={1}>
          <Link href="/products-orox-app">
            <div
              className={`${
                isDarkTheme ? "hover:bg-white/10" : "hover:bg-[#21275B]/10"
              } rounded-lg p-1 md:p-4`}
            >
              <h4
                className={`font-medium ${
                  isDarkTheme ? "text-white" : "text-[#19191B]"
                } text-[16px] font-regular`}
              >
                OROX App
              </h4>
              <p className="text-sm text-[#999999] font-regular text-[14px]">
                Download from App and Play Store
              </p>
            </div>
          </Link>
        </DropdownItem>
        <DropdownItem index={2}>
          <Link href="/products-odn">
            <div
              className={`${
                isDarkTheme ? "hover:bg-white/10" : "hover:bg-[#21275B]/10"
              } rounded-lg p-1 md:p-4`}
            >
              <h4
                className={`font-medium ${
                  isDarkTheme ? "text-white" : "text-[#19191B]"
                } text-[16px] font-regular`}
              >
                Opus Diversified Nexus
              </h4>
              <p className="text-sm text-[#999999] font-regular text-[14px]">
                Subscription
              </p>
            </div>
          </Link>
        </DropdownItem>
        <DropdownItem index={3}>
          <div
            className={`${
              isDarkTheme ? "hover:bg-white/10" : "hover:bg-[#21275B]/10"
            } rounded-lg p-1 md:p-4`}
          >
            <h4
              className={`font-medium ${
                isDarkTheme ? "text-white" : "text-[#19191B]"
              } text-[16px] font-regular`}
            >
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
        <h3
          className={`font-semibold text-lg ${
            isDarkTheme ? "text-white" : "text-[#19191B]"
          } mb-4 pl-1 md:pl-4`}
        >
          Latest from our Blog
        </h3>
      </DropdownItem>
      <div className="space-y-0">
        <DropdownItem index={5}>
          <div
            className={`${
              isDarkTheme ? "hover:bg-white/10" : "hover:bg-[#21275B]/10"
            } rounded-lg p-1 md:p-4`}
          >
            <span className="text-xs font-semibold text-[#999999]">
              UPDATES
            </span>
            <h4
              className={`font-medium mt-1 ${
                isDarkTheme ? "text-white" : "text-[#19191B]"
              } text-[16px] font-regular`}
            >
              Trump Earned Millions From Meme Coin, 810000 Others Lost.
            </h4>
          </div>
        </DropdownItem>

        <DropdownItem index={6}>
          <div
            className={`${
              isDarkTheme ? "hover:bg-white/10" : "hover:bg-[#21275B]/10"
            } rounded-lg p-1 md:p-4`}
          >
            <span className="text-xs font-semibold text-[#999999]">
              ADVICE & TIPS
            </span>
            <h4
              className={`font-medium mt-1 ${
                isDarkTheme ? "text-white" : "text-[#19191B]"
              } text-[16px] font-regular`}
            >
              Never Invest More Than You Can Afford to Lose.
            </h4>
          </div>
        </DropdownItem>

        <DropdownItem index={7}>
          <div
            className={`${
              isDarkTheme ? "hover:bg-white/10" : "hover:bg-[#21275B]/10"
            } rounded-lg p-1 md:p-4`}
          >
            <span className="text-xs font-semibold text-[#999999]">
              INSIGHTS
            </span>
            <h4
              className={`font-medium mt-1 ${
                isDarkTheme ? "text-white" : "text-[#19191B]"
              } text-[16px] font-regular`}
            >
              The best crypto research tools for traders and investors.
            </h4>
          </div>
        </DropdownItem>
      </div>
    </div>

    {/* Divider - only visible on desktop */}
    <div
      className={`hidden lg:block w-0.5 self-stretch ${
        isDarkTheme ? "bg-[#3C3C3C]" : "bg-neutral-200"
      } mx-4`}
    />

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
// const SupportDropdown = () => (
//   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//     <DropdownItem index={0}>
//       <div className="space-y-4">
//         <h3 className="font-semibold text-lg text-[#293483]">Help Center</h3>
//         <ul className="space-y-2">
//           <li>
//             <Link href="/" className="hover:text-[#2F5DFD]">
//               FAQ
//             </Link>
//           </li>
//           <li>
//             <Link href="/contact" className="hover:text-[#2F5DFD]">
//               Contact Us
//             </Link>
//           </li>
//           <li>
//             <Link href="/" className="hover:text-[#2F5DFD]">
//               Submit a Ticket
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </DropdownItem>

//     <DropdownItem index={1}>
//       <div className="space-y-4">
//         <h3 className="font-semibold text-lg text-[#293483]">Resources</h3>
//         <ul className="space-y-2">
//           <li>
//             <Link href="/" className="hover:text-[#2F5DFD]">
//               User Guides
//             </Link>
//           </li>
//           <li>
//             <Link href="/" className="hover:text-[#2F5DFD]">
//               Video Tutorials
//             </Link>
//           </li>
//           <li>
//             <Link href="/" className="hover:text-[#2F5DFD]">
//               Crypto Glossary
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </DropdownItem>

//     <DropdownItem index={2}>
//       <div className="space-y-4">
//         <h3 className="font-semibold text-lg text-[#293483]">Community</h3>
//         <ul className="space-y-2">
//           <li>
//             <Link
//               href="https://discord.gg/orox"
//               className="hover:text-[#2F5DFD]"
//             >
//               Discord
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="https://t.me/oroxofficial"
//               className="hover:text-[#2F5DFD]"
//             >
//               Telegram
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="https://twitter.com/orox"
//               className="hover:text-[#2F5DFD]"
//             >
//               Twitter
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </DropdownItem>
//   </div>
// );

export const Navbar = () => {
  const pathname = usePathname();
  const isDarkTheme = pathname === "/products-dvox";
  const [isQROpen, setIsQROpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const qrModalRef = useRef<HTMLDivElement>(null);
  const [, setNavbarHeight] = useState(70);
  const navbarRef = useRef<HTMLDivElement>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

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

  const renderProductsSubmenu = () => (
    <div
      className={`fixed inset-y-0 right-0 z-[60] ${
        isDarkTheme ? "bg-[#000000]" : "bg-white"
      } md:hidden w-[280px] shadow-lg flex flex-col h-screen`}
    >
      {/* Header with back button and close icon */}
      <div
        className={`fixed top-0 right-0 w-[280px] h-[70px] ${
          isDarkTheme
            ? "bg-[#000000] border-[#3C3C3C]"
            : "bg-white border-[#F4F4F4]"
        } border-b flex items-center justify-between px-2 z-[61]`}
      >
        <button
          onClick={() => setActiveSubmenu(null)}
          className={`flex items-center space-x-2 p-2 ${
            isDarkTheme ? "hover:bg-white/10" : "hover:bg-[#E9E9EF]"
          } rounded-full`}
          aria-label="Back to menu"
        >
          <Image
            src={
              isDarkTheme
                ? "/icons/ic_arrow_back_white.svg"
                : "/icons/ic_arrow_back.svg"
            }
            alt="Back"
            width={24}
            height={24}
          />
        </button>

        <button
          onClick={() => {
            setActiveSubmenu(null);
            setIsMobileMenuOpen(false);
          }}
          className={`p-2 ${
            isDarkTheme ? "hover:bg-white/10" : "hover:bg-[#E9E9EF]"
          } rounded-full`}
          aria-label="Close menu"
        >
          <svg
            className={`h-6 w-6 ${
              isDarkTheme ? "text-white" : "text-[#293483]"
            }`}
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
      <div className="pt-[100px]">
        <div>
          <Link
            href="/products"
            className={`block text-[16px] ${
              isDarkTheme
                ? "text-white hover:bg-white/10"
                : "text-[#19191B] hover:bg-[#E9E9EF]"
            } transition-colors px-[8px] py-2 rounded-md mx-[8px]`}
          >
            Our Products
          </Link>
          <hr
            className={`border-t ${
              isDarkTheme ? "border-[#3C3C3C]" : "border-[#F4F4F4]"
            } mt-[16px]`}
          />

          <Link
            href="/products-orox-app"
            className={`block text-[16px] ${
              isDarkTheme
                ? "text-white hover:bg-white/10"
                : "text-[#19191B] hover:bg-[#E9E9EF]"
            } mt-[16px] transition-colors px-[8px] py-2 rounded-md mx-[8px]`}
          >
            OROX App
          </Link>
          <hr
            className={`border-t ${
              isDarkTheme ? "border-[#3C3C3C]" : "border-[#F4F4F4]"
            } mt-[16px]`}
          />

          <Link
            href="/products-odn"
            className={`block text-[16px] ${
              isDarkTheme
                ? "text-white hover:bg-white/10"
                : "text-[#19191B] hover:bg-[#E9E9EF]"
            } mt-[16px] transition-colors px-[8px] py-2 rounded-md mx-[8px]`}
          >
            Opus Diversified Nexus
          </Link>
          <hr
            className={`border-t ${
              isDarkTheme ? "border-[#3C3C3C]" : "border-[#F4F4F4]"
            } mt-[16px]`}
          />

          <Link
            href="/products-dvox"
            className={`block text-[16px] ${
              isDarkTheme
                ? "text-white hover:bg-white/10"
                : "text-[#19191B] hover:bg-[#E9E9EF]"
            } mt-[16px] transition-colors px-[8px] py-2 rounded-md mx-[8px]`}
          >
            DVOX Token
          </Link>
        </div>
      </div>
    </div>
  );

  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setActiveSubmenu(null);
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b ${
        isDarkTheme
          ? "bg-[#000000] text-white border-[#3C3C3C]"
          : "bg-white border-[#F4F4F4]"
      }`}
      ref={navbarRef}
    >
      <nav className="relative mx-auto max-w-7xl flex items-center justify-between my-[16px] md:my-[32px] px-4 md:px-6 lg:px-0">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src={isDarkTheme ? "/images/logo-white.png" : "/images/logo.png"}
            alt="OROX"
            width={100}
            height={100}
            className="w-[132px] h-auto"
          />
        </Link>

        {/* Mobile menu button and QR section */}
        <div className="flex items-center space-x-4">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 hover:bg-[#E9E9EF] rounded-full transition-colors"
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
              isDarkTheme={isDarkTheme}
              trigger={
                <div
                  className={`flex items-center space-x-1 ${
                    isDarkTheme ? "hover:bg-white/10" : "hover:bg-[#E9E9EF]"
                  } rounded-md px-3 py-2 transition-colors`}
                >
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
              <ProductsDropdown isDarkTheme={isDarkTheme} />
            </Dropdown>
          </Link>

          <Link
            href="/"
            className={`px-3 py-2 rounded-md ${
              isDarkTheme ? "hover:bg-white/10" : "hover:bg-[#E9E9EF]"
            } transition-colors`}
          >
            Blog
          </Link>

          <Link
            href="/about"
            className={`px-3 py-2 rounded-md ${
              isDarkTheme ? "hover:bg-white/10" : "hover:bg-[#E9E9EF]"
            } transition-colors`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`px-3 py-2 rounded-md ${
              isDarkTheme ? "hover:bg-white/10" : "hover:bg-[#E9E9EF]"
            } transition-colors`}
          >
            Contact
            {/* <Dropdown
              label="Contact"
              trigger={
                <div className="flex items-center space-x-1">
                  <span>Contact</span>
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
            </Dropdown> */}
          </Link>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div
            className={`fixed inset-y-0 right-0 z-[60] ${
              isDarkTheme ? "bg-[#000000]" : "bg-white"
            } md:hidden w-[280px] shadow-lg flex flex-col h-screen overflow-y-auto overscroll-contain`}
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {/* Close button header */}
            <div
              className={`fixed top-0 right-0 w-[280px] h-[70px] ${
                isDarkTheme
                  ? "bg-[#000000] border-[#3C3C3C]"
                  : "bg-white border-[#F4F4F4]"
              } border-b flex items-center justify-end px-2 z-[61]`}
            >
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className={`p-2 ${
                  isDarkTheme ? "hover:bg-white/10" : "hover:bg-[#E9E9EF]"
                } rounded-full transition-colors`}
                aria-label="Close menu"
              >
                <svg
                  className={`h-6 w-6 ${
                    isDarkTheme ? "text-white" : "text-[#293483]"
                  }`}
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
              <div className="pt-8">
                {/* Navigation Links */}
                <div className="space-y-3">
                  <div
                    className={`flex items-center justify-between text-[16px] ${
                      isDarkTheme
                        ? "text-white hover:bg-white/10"
                        : "text-[#19191B] hover:bg-[#E9E9EF]"
                    } transition-colors px-[8px] py-2 rounded-lg mx-[8px]`}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setActiveSubmenu("products");
                    }}
                  >
                    <span>Products</span>
                    <Image
                      src={
                        isDarkTheme
                          ? "/icons/ic_chevron_right_dvox.svg"
                          : "/icons/ic_chevron_right.svg"
                      }
                      alt="right-icon"
                      width={24}
                      height={24}
                    />
                  </div>
                  <hr
                    className={`border-t ${
                      isDarkTheme ? "border-[#3C3C3C]" : "border-[#F4F4F4]"
                    }`}
                  />

                  <Link
                    href="/"
                    className={`block text-[16px] ${
                      isDarkTheme
                        ? "text-white hover:bg-white/10"
                        : "text-[#19191B] hover:bg-[#E9E9EF]"
                    } transition-colors px-[8px] py-2 rounded-lg mx-[8px]`}
                  >
                    Blog
                  </Link>
                  <hr
                    className={`border-t ${
                      isDarkTheme ? "border-[#3C3C3C]" : "border-[#F4F4F4]"
                    }`}
                  />

                  <Link
                    href="/about"
                    className={`block text-[16px] ${
                      isDarkTheme
                        ? "text-white hover:bg-white/10"
                        : "text-[#19191B] hover:bg-[#E9E9EF]"
                    } transition-colors px-[8px] py-2 rounded-lg mx-[8px]`}
                  >
                    About
                  </Link>
                  <hr
                    className={`border-t ${
                      isDarkTheme ? "border-[#3C3C3C]" : "border-[#F4F4F4]"
                    }`}
                  />
                  <div
                    className={`flex items-center justify-between text-[16px] ${
                      isDarkTheme
                        ? "text-white hover:bg-white/10"
                        : "text-[#19191B] hover:bg-[#E9E9EF]"
                    } mb-[16px] transition-colors px-[8px] py-2 rounded-lg mx-[8px]`}
                  >
                    <Link href="/contact">Contact</Link>
                  </div>
                  <hr
                    className={`border-t ${
                      isDarkTheme ? "border-[#3C3C3C]" : "border-[#F4F4F4]"
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* QR Code section */}
            <div className="px-6 pb-8 mt-[24px]">
              <div className="space-y-3 mt-[64px] mb-[24px]">
                <Link href="/login">
                  <Button
                    variant={isDarkTheme ? "dvox" : "secondary"}
                    className={`w-full block ${
                      isDarkTheme
                        ? "border-[#78CAB9] hover:border-gray-500"
                        : "border-[#78CAB9] hover:border-gray-300"
                    } whitespace-nowrap`}
                  >
                    Log in
                  </Button>
                </Link>
                <Link href="/signup" className="w-full block">
                  <Button
                    variant={isDarkTheme ? "secondary" : "primary"}
                    className={`w-full rounded-full whitespace-nowrap`}
                  >

                    Join for free
                  </Button>
                </Link>
              </div>
              <hr
                className={`border-t ${
                  isDarkTheme ? "border-[#3C3C3C]" : "border-[#F4F4F4]"
                } mb-[24px]`}
              />
              <div className="mb-[32px]">
                <div className="flex flex-col items-center gap-[8px]">
                  <PlayStoreButton href="https://play.google.com/store/apps/details?id=com.oroxlabs.app.android&hl=en_AU" />
                  <AppStoreButton href="https://apps.apple.com/au/app/orox/id6452677869" />
                </div>

                {/* <Image
                  src="https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/qr-code.png"
                  alt="QR Code"
                  width={220}
                  height={220}
                  className={`mx-auto rounded-2xl ${
                    isDarkTheme ? "bg-white/10" : "bg-white"
                  } shadow-sm`}
                /> */}
              </div>
            </div>
          </div>
        )}

        {/* Mobile menu backdrop */}
        {(isMobileMenuOpen || activeSubmenu) && (
          <div
            className="fixed inset-0 bg-black/30 z-[55]"
            style={{ top: "0px" }}
            onClick={closeAllMenus}
          />
        )}

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-2 md:space-x-3 lg:space-x-4">
          <Link href="/login">
            <Button
              variant={isDarkTheme ? "dvox" : "secondary"}
              className="whitespace-nowrap"
            >
              Log in
            </Button>
          </Link>
          <Link href="/signup">
            <Button
              variant={isDarkTheme ? "secondary" : "primary"}
              className="px-3 md:px-4 lg:px-6 whitespace-nowrap"
            >
              Join for free
            </Button>
          </Link>

          <hr className="h-[36px] w-[2px] bg-[#C9CCE0]" />

          {/* QR Code Button */}
          <button
            onClick={() => setIsQROpen(!isQROpen)}
            className={`relative flex h-10 w-10 items-center justify-center rounded-[8px] md:p-1.5 lg:p-2 ${
              isDarkTheme ? "hover:bg-[#3C3C3C]" : "hover:bg-[#E9E9EF]"
            }`}
            aria-label="QR code"
          >
            <Image
              src={isDarkTheme ? "/icons/QR-light.svg" : "/icons/QR.svg"}
              alt="QR Icon"
              width={20}
              height={20}
              className="h-6 w-6 lg:h-[24px] lg:w-[24px]"
            />
          </button>
        </div>

        {isQROpen && (
          <>
            {/* Mobile QR dropdown - updated for dark theme */}
            <div
              className={`md:hidden fixed top-[70px] right-0 ${
                isDarkTheme ? "bg-[#000000]" : "bg-white"
              } z-[9999] rounded-bl-xl shadow-lg w-[280px] p-6 ${
                isDarkTheme ? "border-[#3C3C3C]" : "border-[#F4F4F4]"
              } border-l border-b`}
            >
              <div className="flex flex-col">
                {/* QR Code */}
                <div className="block mb-8">
                  <Image
                    src="https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/qr-code.png"
                    alt="OROX App QR Code"
                    width={300}
                    height={300}
                    className={`w-full h-auto ${
                      isDarkTheme ? "bg-white/10 p-4" : ""
                    } rounded-xl`}
                  />
                </div>

                {/* Close button */}
                <button
                  onClick={() => setIsQROpen(false)}
                  className={`flex w-full items-center justify-end space-x-1 text-sm ${
                    isDarkTheme ? "text-[#FFDE82]" : "text-[#2F5DFD]"
                  }`}
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

            {/* Desktop QR dropdown - updated positioning and dark theme support */}
            <div
              ref={qrModalRef}
              className={`hidden md:block absolute right-0 ${
                isDarkTheme ? "top-[74px]" : "top-[64px]"
              } ${
                isDarkTheme ? "bg-[#000000]" : "bg-white"
              } mt-2 w-64 md:w-80 rounded-xl border ${
                isDarkTheme ? "border-[#3C3C3C]" : "border-[#F4F4F4]"
              } p-8 shadow-xl z-50`}
            >
              <div className="w-full">
                <div
                  className={`${
                    isDarkTheme ? "bg-[#000000]" : "bg-white"
                  } h-full`}
                >
                  <div className="flex flex-col">
                    {/* QR Code */}
                    <div className="block mb-8">
                      <Image
                        src="https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/qr-code.png"
                        alt="OROX App QR Code"
                        width={300}
                        height={300}
                        className={`w-full h-auto ${
                          isDarkTheme ? "bg-white/10 p-4" : ""
                        } rounded-xl`}
                      />
                    </div>

                    {/* Close button */}
                    <button
                      onClick={() => setIsQROpen(false)}
                      className={`flex w-full items-center justify-end space-x-1 text-sm ${
                        isDarkTheme ? "text-[#FFDE82]" : "text-[#2F5DFD]"
                      }`}
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

        {activeSubmenu === "products" && renderProductsSubmenu()}
      </nav>
    </header>
  );
};
