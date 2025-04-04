import Image from "next/image";
import Link from "next/link";
import { PlayStoreButton } from "../ui/PlayStoreButton";
import { AppStoreButton } from "../ui/AppStoreButton";

const navigation = {
  social: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/oroxapp/",
      icon: "/icons/socials/Item.svg",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/oroxapp?igsh=MXJxYW5hMTY3Y3J5OQ%3D%3D&utm_source=qr",
      icon: "/icons/socials/Item-1.svg",
    },
    // {
    //   name: "Facebook",
    //   href: "#",
    //   icon: "/icons/socials/Item-2.svg",
    // },
    // {
    //   name: "Facebook",
    //   href: "#",
    //   icon: "/icons/socials/Item-3.svg",
    // },
    {
      name: "Twitter",
      href: "https://x.com/oroxapp?s=11",
      icon: "/icons/socials/Item-4.svg",
    },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-4 xl:px-0 py-8 md:py-[88px]">
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Main Content Column */}
          <div className="w-full lg:max-w-md">
            {/* Logo */}
            <Image
              src="https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/logo-footer.png"
              alt="OROX Logo"
              width={116}
              height={40}
              className="h-16 w-auto mb-6"
            />

            {/* Description */}
            <p className="text-[#19191B] max-w-[400px] mb-6 text-[16px] leading-[2]">
              OROX puts your money on autopilot with AI-powered quantitative
              investing, risk-adjusted strategies and secure blockchain-backed
              growth.
            </p>

            {/* More About Us Button */}
            <Link
              href="https://www.opusmomentus.com/"
              className="group inline-flex items-center font-bold text-[#2F5DFD] hover:text-[#6082ff] mb-12 text-[14px] gap-1 "
            >
              <span>More about us</span>
              <svg
                className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 4H12M12 4V12M12 4L4 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            {/* Download App Section */}
            <div className="lg:hidden">
              <h3 className="text-[18px] font-bold mb-4">Download app</h3>
              <div className="flex gap-2 flex-wrap mb-8">
                <PlayStoreButton href="https://play.google.com/store/apps/details?id=com.oroxlabs.app.android&hl=en_AU " />
                <AppStoreButton href="https://apps.apple.com/au/app/orox/id6452677869" />
              </div>
            </div>

            {/* Divider */}
            <hr className="lg:hidden border-t-2 border-[#999999] mb-8" />

            <div className="lg:hidden mb-[48px]">
              <div className="flex flex-col space-y-[16px]">
                <Link
                  href="/products"
                  className="text-[18px] font-semibold text-[#293483]"
                >
                  Products
                </Link>
                <Link
                  href="/our-approach"
                  className="text-[18px] font-semibold text-[#293483]"
                >
                  Our approach
                </Link>
                <Link
                  href="/blog"
                  className="text-[18px] font-semibold text-[#293483]"
                >
                  Blog
                </Link>
                <Link
                  href="/about"
                  className="text-[18px] font-semibold text-[#293483]"
                >
                  About
                </Link>
                <Link
                  href="/careers"
                  className="text-[18px] font-semibold text-[#293483]"
                >
                  Careers
                </Link>
              </div>
            </div>

            {/* Contact and Location */}
            <div className="lg:hidden mb-12">
              <div className="mb-8">
                <h3 className="text-[20px] font-bold mb-[24px]">Contact us</h3>
                <div className="space-y-2 text-black/50 text-[14px]">
                  <p>+61 295 336 214</p>
                  <p>info@oroxglobal.com</p>
                </div>
              </div>

              <div>
                <h3 className="text-[20px] font-bold mb-[24px]">Location</h3>
                <div className="text-[#19191B]/50 text-[14px]">
                  <a
                    href="https://maps.app.goo.gl/k7RVNir6k7PXLXEr6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-[#21275B]/10 p-[8px] rounded-[8px] transition-all duration-300 ease-in-out block"
                  >
                    2 Locomotive Street,
                    <br />
                    South Eveleigh NSW 2015 Australia
                  </a>
                  <a
                    href="https://maps.app.goo.gl/9rPeYPSnm7Vb5bPq5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-[#21275B]/10 p-[8px] rounded-[8px] transition-all duration-300 ease-in-out block"
                  >
                    201 Kent Street,
                    <br />
                    Sydney NSW 2000 Australia
                  </a>
                </div>
              </div>
            </div>

            {/* Social Icons and Copyright */}
            <div className="flex justify-between items-end md:mt-36 mt-24">
              <div className="grid grid-flow-col grid-rows-2 gap-x-2 gap-y-2 w-fit">
                {navigation.social.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    className={`text-gray-400 hover:text-gray-600 ${
                      index === 0 ? "col-span-2 justify-self-start" : ""
                    }`}
                  >
                    <span className="sr-only">{item.name}</span>
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={40}
                      height={40}
                    />
                  </Link>
                ))}
              </div>
              <div className="text-[12px] text-[#19191B] text-right flex flex-col justify-end mr-[24px] md:mr-0">
                <p>© 2025 — Copyright. All Rights reserved</p>
                <div className="flex flex-col md:flex-row gap-[16px] md:gap-[4px] justify-end mt-[20px] md:mt-[8px]">
                  <Link href="/privacy-policy" className="underline">
                    Privacy Policy
                  </Link>
                  <span className="hidden lg:block">|</span>
                  <Link href="/terms-of-service" className="underline">
                    Terms of Service
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="mt-4 lg:mt-0">
            {/* Download App Section */}
            <div className="hidden lg:flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-[96px]">
              <h3 className="text-[28px] font-bold">Download app</h3>
              <div className="flex gap-2 flex-wrap">
                <PlayStoreButton href="https://play.google.com/store/apps/details?id=com.oroxlabs.app.android&hl=en_AU " />
                <AppStoreButton href="https://apps.apple.com/au/app/orox/id6452677869" />
              </div>
            </div>
            <hr className="my-8 border-b-1 border-[#999999] hidden lg:block" />

            {/* Navigation Links - Desktop */}
            <div className="hidden lg:flex gap-[41px] mb-8">
              <Link
                href="/products"
                className="text-[16px] font-semibold text-[#293483]"
              >
                Products
              </Link>
              <Link
                href="/"
                className="text-[16px] font-semibold text-[#293483]"
              >
                Our approach
              </Link>
              <Link
                href="/"
                className="text-[16px] font-semibold text-[#293483]"
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="text-[16px] font-semibold text-[#293483]"
              >
                About
              </Link>
              <Link
                href="/"
                className="text-[16px] font-semibold text-[#293483]"
              >
                Careers
              </Link>
            </div>

            {/* Contact and Location Section Desktop*/}
            <div className="hidden lg:flex flex-col sm:flex-row gap-8 sm:gap-20 flex-grow mt-[200px] justify-between">
              <div>
                <h3 className="text-[20px] font-bold mb-[24px]">Contact us</h3>
                <div className="text-black/50 text-[14px] space-y-[8px]">
                  <p>+61 295 336 214</p>
                  <p>info@oroxglobal.com</p>
                </div>
              </div>
              <div className="w-[300px]">
                <h3 className="text-[20px] font-bold mb-[16px] pl-[8px]">
                  Location
                </h3>
                <div className="text-black/50 text-[14px]">
                  <a
                    href="https://maps.app.goo.gl/k7RVNir6k7PXLXEr6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-[#21275B]/10 p-[8px] rounded-[8px] transition-all duration-300 ease-in-out block"
                  >
                    2 Locomotive Street,
                    <br />
                    South Eveleigh NSW 2015 Australia
                  </a>
                  <a
                    href="https://maps.app.goo.gl/9rPeYPSnm7Vb5bPq5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-[#21275B]/10 p-[8px] rounded-[8px] transition-all duration-300 ease-in-out block"
                  >
                    201 Kent Street,
                    <br />
                    Sydney NSW 2000 Australia
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Disclaimer Section */}
      <div className="bg-[#EAF5FF] text-[#19191B]/60 text-[12px]">
        <div className="max-w-7xl mx-4 md:mx-auto py-8 md:py-8">
          <p>© 2025 Opus Momentus Proprietary Ltd. All Rights Reserved.</p>
          <br />
          <p>
            The materials on this website are for illustration and discussion
            purposes only and do not constitute an offering. An offering may be
            made only by delivery of a confidential offering memorandum to
            appropriate investors. PAST PERFORMANCE IS NO GUARANTEE OF FUTURE
            RESULTS.
          </p>
        </div>
      </div>
    </footer>
  );
};
