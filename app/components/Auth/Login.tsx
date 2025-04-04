"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { loginSchema, type LoginInput } from "@/app/lib/validations/auth";
import * as z from "zod";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [focusedField, setFocusedField] = useState<"email" | "password" | null>(
    null
  );
  const router = useRouter();
  const [errors, setErrors] = useState<Partial<LoginInput>>({});

  const validateField = (field: keyof LoginInput, value: string) => {
    try {
      loginSchema.shape[field].parse(value);
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors((prev) => ({ ...prev, [field]: error.errors[0].message }));
      }
    }
  };

  return (
    <div className="flex min-h-screen">
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
          src="/videos/Login.mp4"
          autoPlay
          muted
          loop
          className="object-cover object-left lg:object-[20%] rounded-r-[24px]"
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
        <div className="flex-1 flex flex-col justify-center max-w-[440px] mx-auto w-full py-4">
          <div className="bg-white rounded-[24px] border border-[#E5E5E5] p-[24px]">
            {/* Header */}
            <div className="space-y-[16px]">
              <h1 className="text-[28px] font-bold text-[#19191B] leading-[36px]">
                Log in to OROX
              </h1>
              <p className="text-[16px] text-[#19191B] leading-[28px]">
                Welcome back! Enter your details to get started.
              </p>
            </div>

            <div className="space-y-[16px] pt-[24px]">
              {/* Email Input */}
              <div className="relative">
                <div
                  className={`relative h-[56px] rounded-xl border ${
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
                  className={`relative h-[56px] rounded-xl border ${
                    focusedField === "password"
                      ? "border-[#19191B]"
                      : errors.password
                      ? "border-[#C91F3B]"
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
                    onBlur={() => {
                      setFocusedField(null);
                      validateField("password", password);
                    }}
                    onFocus={() => setFocusedField("password")}
                    className="w-full h-full px-4 text-[16px] text-[#19191B] leading-7 focus:outline-none bg-transparent"
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

              {/* Remember Me and Forgot Password */}
              <div className="flex items-center justify-between px-2 pt-[8px]">
                <div className="flex items-center gap-2">
                  <label className="relative w-[20px] h-[20px]">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="peer appearance-none w-full h-full border border-gray-300 rounded-full bg-white checked:bg-[#293483] checked:border-[#293483] transition-colors duration-200"
                    />
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 peer-checked:opacity-100 transition-opacity duration-200">
                      <div className="w-[6px] h-[10px] border-white border-r-[2.5px] border-b-[2.5px] rotate-45 translate-y-[-1px]" />
                    </div>
                  </label>
                  <span className="text-[14px] font-bold text-[#19191B] leading-[20px]">
                    Remember me
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Image
                    src="/icons/ic_help_outline.svg"
                    alt="Lock"
                    width={18}
                    height={18}
                  />
                  <Link
                    href="/forgot-password"
                    className="text-[14px] font-bold text-[#293483] hover:underline flex items-center gap-1"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
            </div>

            {/* Continue Button */}
            <div className="pt-[32px] pb-[40px]">
              <button className="w-full h-[48px] bg-[#293483] text-white text-[16px] font-bold rounded-[72px] hover:bg-[#293483]/90">
                Continue
              </button>
            </div>

            {/* Social Login */}
            <div className="border-t border-[#E5E5E5] pt-[8px]">
              <p className="text-[12px] text-[#3C3C3C] pt-[16px]">
                or continue with:
              </p>
              <div className="flex gap-[16px] pt-[8px] pb-[18px]">
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

              {/* Sign Up Link */}
              <div className="flex flex-col md:flex-row gap-[4px]">
                <span className="text-[14px] text-[#19191B] leading-[20px] whitespace-nowrap">
                  Haven&apos;t joined OROX yet?
                </span>
                <Link
                  href="/signup"
                  className="text-[14px] font-bold text-[#2F5DFD] hover:underline flex items-center gap-1 whitespace-nowrap"
                >
                  Create an account
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
