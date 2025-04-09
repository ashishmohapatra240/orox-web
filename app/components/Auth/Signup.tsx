"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signupSchema, type SignupInput } from "@/app/lib/validations/auth";
import * as z from "zod";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invitationCode, setInvitationCode] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [focusedField, setFocusedField] = useState<
    "email" | "password" | "invitation" | null
  >(null);
  const [errors, setErrors] = useState<Partial<SignupInput>>({});
  const router = useRouter();

  const validateField = (field: keyof SignupInput, value: string) => {
    try {
      signupSchema.shape[field].parse(value);
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors((prev) => ({ ...prev, [field]: error.errors[0].message }));
      }
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Image - Hidden on mobile */}
      <div className="hidden lg:flex lg:w-1/2 relative h-[100vh]">
        <Link href={"/"} className="z-[999]">
          <div className="absolute top-[32px] left-[32px]">
            <Image
              src="/images/logo-white.png"
              alt="Logo"
              width={131}
              height={40}
            />
          </div>
        </Link>
        <video
          src="/videos/Signup.mp4"
          autoPlay
          playsInline
          muted
          loop
          className="object-cover rounded-r-[24px]"
        />
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-1/2 flex flex-col px-[16px] md:px-[32px] h-screen overflow-y-auto">
        <div className="flex justify-between md:justify-end items-center mt-[16px] md:mt-[32px] mb-[48px]">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={80}
            height={24}
            className="md:hidden"
          />
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
        <div className="flex-1 flex flex-col justify-center max-w-[440px] mx-auto w-full">
          <div className="bg-white rounded-[24px] border border-[#E5E5E5] p-[24px]">
            {/* Header */}
            <div className="space-y-[16px]">
              <h1 className="text-[36px] font-bold text-[#19191B] leading-[48px]">
                Sign up to OROX
              </h1>
              <p className="text-[16px] text-[#19191B] leading-[20px] md:leading-[28px]">
                Share a few details and we&apos;ll get you set up in no time.
                Already have an account?{" "}
                <Link href="/login" className="text-[#19191B] underline">
                  Log in to OROX.
                </Link>
              </p>
            </div>

            <div className="space-y-[16px] pt-[24px]">
              {/* Email Input */}
              <div className="relative">
                <div
                  className={`relative h-[56px] rounded-[12px] border ${
                    focusedField === "email"
                      ? "border-[#19191B]"
                      : errors.email
                      ? "border-[#C91F3B]"
                      : "border-[#E5E5E5]"
                  }`}
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      validateField("email", e.target.value);
                    }}
                    onBlur={() => {
                      setFocusedField(null);
                      validateField("email", email);
                    }}
                    onFocus={() => setFocusedField("email")}
                    className="w-full h-full px-4 text-[16px] text-[#19191B] focus:outline-none bg-transparent"
                    placeholder=" "
                  />
                  <div
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      email || focusedField === "email"
                        ? "text-[12px] -top-2.5 bg-white px-1"
                        : "text-[16px] top-4"
                    } text-[#19191B]`}
                  >
                    Email<span className="text-[#C91F3B]">*</span>
                  </div>
                </div>
                {errors.email && (
                  <p className="text-[#C91F3B] text-[12px] mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password Input */}
              <div className="relative">
                <div
                  className={`relative h-[56px] rounded-[12px] border ${
                    focusedField === "password"
                      ? "border-[#19191B]"
                      : "border-[#E5E5E5]"
                  }`}
                >
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      validateField("password", e.target.value);
                    }}
                    onFocus={() => setFocusedField("password")}
                    onBlur={() => {
                      setFocusedField(null);
                      validateField("password", password);
                    }}
                    className="w-full h-full px-4 text-[16px] text-[#19191B] focus:outline-none bg-transparent"
                    placeholder=" "
                  />
                  <div
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      password || focusedField === "password"
                        ? "text-[12px] -top-2.5 bg-white px-1"
                        : "text-[16px] top-4"
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
                {errors.password && (
                  <p className="text-[#C91F3B] text-[12px] mt-1">
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Invitation Code Input */}
              <div className="relative">
                <div
                  className={`relative h-[56px] rounded-[12px] border ${
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
                        : "text-[16px] top-4"
                    } text-[#19191B]`}
                  >
                    Referral code
                  </div>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 group">
                    <Image
                      src="/icons/ic_help_outline.svg"
                      alt="Help"
                      width={24}
                      height={24}
                    />
                    <div className="absolute bottom-full -right-6 mb-0 hidden group-hover:block w-[280px] z-10">
                      <div className="relative">
                        <Image
                          src="/icons/tooltip.png"
                          alt="Tooltip background"
                          width={280}
                          height={76}
                        />
                        <div className="absolute inset-0 px-[8px] py-[12px]">
                          <p className="text-white text-[16px] leading-[20px] text-center mt-1">
                            Enter your friend&apos;s referral code<br/> below to earn
                            $25 in crypto.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div>
                <label className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    checked={agreeToTerms}
                    onChange={(e) => setAgreeToTerms(e.target.checked)}
                    className="mt-1 w-4 h-4 border-gray-300 text-[#293483] focus:ring-[#293483]"
                  />
                  <span className="text-[12px] text-[#3C3C3C]">
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
            <div className="pt-[32px] md:pt-[40px]">
              <button className="w-full h-[48px] bg-[#293483] text-white text-[16px] font-bold rounded-[72px] hover:bg-[#293483]/90">
                Continue
              </button>
            </div>
            <hr className="border-[1px] border-[#E5E5E5] mt-[40px]" />
            {/* Social Login */}
            <div className="space-y-2">
              <p className="text-[12px] text-[#3C3C3C] pt-[16px]">
                or continue with:
              </p>
              <div className="flex gap-[16px] py-[8px]">
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
              <div className="flex items-center gap-[8px]">
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
        <div className="pt-[24px] text-center text-[12px] text-[#19191B] mb-[24px]">
          © 2025 — Copyright. All Rights reserved
        </div>
      </div>
    </div>
  );
};
