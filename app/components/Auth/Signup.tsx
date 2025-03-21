"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invitationCode, setInvitationCode] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [focusedField, setFocusedField] = useState<
    "email" | "password" | "invitation" | null
  >(null);
  const router = useRouter();
  return (
    <div className="flex min-h-screen">
      {/* Left Image - Hidden on mobile */}
      <div className="hidden lg:flex lg:w-1/2 relative h-[120vh]">
        <video
          src="/videos/Signup.mp4"
          autoPlay
          muted
          loop
          className="object-cover rounded-r-[24px]"
        />
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-1/2 flex flex-col px-4 lg:px-12 h-screen">
        <div className="flex justify-end items-center pt-4">
          <button
            onClick={() => router.push("/")}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="#293483"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center max-w-[440px] mx-auto w-full py-4">
          <div className="bg-white rounded-[24px] border border-[#E5E5E5] p-[24px] space-y-4">
            {/* Header */}
            <div className="space-y-[16px]">
              <h1 className="text-[28px] font-bold text-[#19191B] leading-[36px]">
                Sign up to OROX
              </h1>
              <p className="text-[16px] text-[#19191B] leading-[1.4]">
                Share a few details and we’ll get you set up in no time. Already
                have an account?{" "}
                <Link href="/login" className="text-[#19191B] underline">
                  Log in to OROX.
                </Link>
              </p>
            </div>

            <div className="space-y-3 pt-[16px]">
              {/* Email Input */}
              <div className="relative">
                <div
                  className={`relative h-[48px] rounded-xl border ${
                    focusedField === "email"
                      ? "border-[#19191B]"
                      : "border-[#E5E5E5]"
                  }`}
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full h-full px-4 text-[16px] text-[#19191B] focus:outline-none bg-transparent"
                    placeholder=" "
                  />
                  <div
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      email || focusedField === "email"
                        ? "text-[12px] -top-2.5 bg-white px-1"
                        : "text-[16px] top-2.5"
                    } text-[#19191B]`}
                  >
                    Email<span className="text-[#C91F3B]">*</span>
                  </div>
                </div>
              </div>

              {/* Password Input */}
              <div className="relative">
                <div
                  className={`relative h-[48px] rounded-xl border ${
                    focusedField === "password"
                      ? "border-[#19191B]"
                      : "border-[#E5E5E5]"
                  }`}
                >
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setFocusedField("password")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full h-full px-4 text-[16px] text-[#19191B] focus:outline-none bg-transparent"
                    placeholder=" "
                  />
                  <div
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      password || focusedField === "password"
                        ? "text-[12px] -top-2.5 bg-white px-1"
                        : "text-[16px] top-2.5"
                    } text-[#19191B]`}
                  >
                    Password<span className="text-[#C91F3B]">*</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M3.99902 7.47656C7.19902 13.4766 16.799 13.4766 19.999 7.47656M6.86002 11.0766L4.00002 14.4766M17.14 11.0766L20 14.4766M11.39 12.6766L9.00002 16.4766M12.61 12.6766L15 16.4766"
                          stroke="#293483"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <Image
                        src="/icons/ic_visibility.svg"
                        alt="Show Password"
                        width={24}
                        height={24}
                      />
                    )}
                  </button>
                </div>
              </div>

              {/* Invitation Code Input */}
              <div className="relative">
                <div
                  className={`relative h-[48px] rounded-xl border ${
                    focusedField === "invitation"
                      ? "border-[#19191B]"
                      : "border-[#E5E5E5]"
                  }`}
                >
                  <input
                    type="text"
                    value={invitationCode}
                    onChange={(e) => setInvitationCode(e.target.value)}
                    onFocus={() => setFocusedField("invitation")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full h-full px-4 text-[16px] text-[#19191B] focus:outline-none bg-transparent"
                    placeholder=" "
                  />
                  <div
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      invitationCode || focusedField === "invitation"
                        ? "text-[12px] -top-2.5 bg-white px-1"
                        : "text-[16px] top-2.5"
                    } text-[#19191B]`}
                  >
                    Invitation code
                  </div>
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    <Image
                      src="/icons/ic_help_outline.svg"
                      alt="Show Password"
                      width={24}
                      height={24}
                    />
                  </button>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="pt-[16px]">
                <label className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    checked={agreeToTerms}
                    onChange={(e) => setAgreeToTerms(e.target.checked)}
                    className="mt-1 w-4 h-4 border-gray-300 text-[#293483] focus:ring-[#293483]"
                  />
                  <span className="text-[12px] text-[#19191B]">
                    Read our{" "}
                    <Link
                      href="/privacy-policy"
                      className="text-[#2F5DFD] underline"
                    >
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/terms-of-service"
                      className="text-[#2F5DFD] underline"
                    >
                      Terms of Service
                    </Link>{" "}
                    for more information on how we may benefit your financial
                    needs.
                  </span>
                </label>
              </div>
            </div>

            {/* Continue Button */}
            <div className="pt-[16px]">
              <button className="w-full h-[48px] bg-[#293483] text-white text-[16px] font-bold rounded-[72px] hover:bg-[#293483]/90">
                Continue
              </button>
            </div>

            {/* Social Login */}
            <div className="space-y-2 border-t border-[#E5E5E5] pt-3">
              <p className="text-[12px] text-[#3C3C3C] pt-[16px]">
                or continue with:
              </p>
              <div className="flex gap-3 py-[4px]">
                <button className="w-[48px] h-[48px] flex items-center justify-center border border-[#E5E5E5] rounded-full hover:bg-gray-50">
                  <Image
                    src="/icons/google.svg"
                    alt="Google"
                    width={20}
                    height={20}
                  />
                </button>
                <button className="w-[48px] h-[48px] flex items-center justify-center border border-[#E5E5E5] rounded-full hover:bg-gray-50">
                  <Image
                    src="/icons/microsoft.svg"
                    alt="Microsoft"
                    width={20}
                    height={20}
                  />
                </button>
                <button className="w-[48px] h-[48px] flex items-center justify-center border border-[#E5E5E5] rounded-full hover:bg-gray-50">
                  <Image
                    src="/icons/apple.svg"
                    alt="Apple"
                    width={20}
                    height={20}
                  />
                </button>
              </div>

              {/* Login Link */}
              <div className="flex items-center gap-2">
                <span className="text-[14px] text-[#19191B]">
                  Already have an OROX account?
                </span>
                <Link
                  href="/login"
                  className="text-[14px] font-bold text-[#2F5DFD] hover:underline flex items-center gap-1"
                >
                  Log in
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M6.44 13.5L10.94 9L6.44 4.5"
                      stroke="#2F5DFD"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-[24px] text-center text-[12px] text-[#19191B]">
          © 2025 — Copyright. All Rights reserved
        </div>
      </div>
    </div>
  );
};
