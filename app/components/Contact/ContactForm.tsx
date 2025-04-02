"use client";
import { Button } from "../ui/Button";
import { useState } from "react";
import Image from "next/image";
import {
  contactSchema,
  type ContactInput,
} from "@/app/lib/validations/contact";
import * as z from "zod";

type FormData = {
  name: string;
  email: string;
  mobile: string;
  reason: string;
  message: string;
};

type FocusedField = "name" | "email" | "mobile" | "reason" | "message" | null;

const reasons = [
  "Investor enquiry",
  "Technical support",
  "General enquiry",
  "Partnership",
  "Other",
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    mobile: "",
    reason: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<FocusedField>(null);
  const [errors, setErrors] = useState<Partial<ContactInput>>({});

  const validateField = (field: keyof ContactInput, value: string) => {
    try {
      contactSchema.shape[field].parse(value);
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors((prev) => ({ ...prev, [field]: error.errors[0].message }));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      contactSchema.parse(formData);
      console.log(formData);
      // Proceed with form submission
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<ContactInput> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactInput] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    }
  };

  return (
    <section className="w-full bg-white px-[16px] py-[44px] md:px-[80px] md:py-[88px]">
      <div className="mx-auto max-w-[880px]">
        <div className="flex flex-col items-center text-center gap-[32px]">
          {/* Header */}
          <div className="flex flex-col items-center text-center">
            <span className="text-[14px] md:text-[16px] font-semibold bg-clip-text text-transparent bg-gradient-to-b from-[#4296E4] to-[#383699] leading-[18px] md:leading-[28px]">
              GET IN TOUCH WITH US
            </span>
            <h1 className="text-[40px] md:text-[64px] font-bold text-[#19191B] leading-[40px] md:leading-[68px] mt-[8px] mb-[40px]">
              Contact OROX
            </h1>
            <p className="text-[16px] md:text-[20px] text-[#19191B] leading-[24px] md:leading-[32px] max-w-[280px] md:max-w-[700px]">
              Have questions? Need support? We&apos;re here to help.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full py-[24px] px-[24px] border border-[#E5E5E5] rounded-3xl space-y-[24px] md:space-y-[16px]"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] md:gap-[16px]">
              {/* Name Field */}
              <div className="relative">
                <div
                  className={`relative h-[56px] rounded-[12px] border ${
                    focusedField === "name"
                      ? "border-[#19191B]"
                      : errors.name
                      ? "border-[#C91F3B]"
                      : "border-[#E5E5E5]"
                  }`}
                >
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      validateField("name", e.target.value);
                    }}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => {
                      setFocusedField(null);
                      validateField("name", formData.name);
                    }}
                    className="w-full h-full px-4 text-[16px] text-[#19191B] focus:outline-none bg-transparent"
                    placeholder=" "
                  />
                  <div
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      formData.name || focusedField === "name"
                        ? "text-[12px] -top-2.5 bg-white px-1"
                        : "text-[16px] top-4"
                    } text-[#19191B]`}
                  >
                    Your name<span className="text-[#C91F3B]">*</span>
                  </div>
                </div>
                {errors.name && (
                  <p className="text-[#C91F3B] text-[12px] mt-1 text-left">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
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
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      validateField("email", e.target.value);
                    }}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => {
                      setFocusedField(null);
                      validateField("email", formData.email);
                    }}
                    className="w-full h-full px-4 text-[16px] text-[#19191B] focus:outline-none bg-transparent"
                    placeholder=" "
                  />
                  <div
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      formData.email || focusedField === "email"
                        ? "text-[12px] -top-2.5 bg-white px-1"
                        : "text-[16px] top-4"
                    } text-[#19191B]`}
                  >
                    Email<span className="text-[#C91F3B]">*</span>
                  </div>
                </div>
                {errors.email && (
                  <p className="text-[#C91F3B] text-[12px] mt-1 text-left">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Mobile Field */}
              <div className="relative">
                <div
                  className={`relative h-[56px] rounded-[12px] border ${
                    focusedField === "mobile"
                      ? "border-[#19191B]"
                      : errors.mobile
                      ? "border-[#C91F3B]"
                      : "border-[#E5E5E5]"
                  }`}
                >
                  <input
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => {
                      setFormData({ ...formData, mobile: e.target.value });
                      validateField("mobile", e.target.value);
                    }}
                    onFocus={() => setFocusedField("mobile")}
                    onBlur={() => {
                      setFocusedField(null);
                      validateField("mobile", formData.mobile);
                    }}
                    className="w-full h-full px-4 text-[16px] text-[#19191B] focus:outline-none bg-transparent"
                    placeholder=" "
                  />
                  <div
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      formData.mobile || focusedField === "mobile"
                        ? "text-[12px] -top-2.5 bg-white px-1"
                        : "text-[16px] top-4"
                    } text-[#19191B]`}
                  >
                    Mobile<span className="text-[#C91F3B]">*</span>
                  </div>
                </div>
                {errors.mobile && (
                  <p className="text-[#C91F3B] text-[12px] mt-1 text-left">
                    {errors.mobile}
                  </p>
                )}
              </div>

              {/* Reason Dropdown */}
              <div className="relative">
                <div
                  className={`relative h-[56px] rounded-[12px] border ${
                    focusedField === "reason"
                      ? "border-[#19191B]"
                      : errors.reason
                      ? "border-[#C91F3B]"
                      : "border-[#E5E5E5]"
                  }`}
                >
                  <select
                    value={formData.reason}
                    onChange={(e) => {
                      setFormData({ ...formData, reason: e.target.value });
                      validateField("reason", e.target.value);
                    }}
                    onFocus={() => setFocusedField("reason")}
                    onBlur={() => {
                      setFocusedField(null);
                      validateField("reason", formData.reason);
                    }}
                    className="w-full h-full px-4 text-[16px] text-[#19191B] focus:outline-none bg-transparent appearance-none"
                  >
                    <option value=""></option>
                    {reasons.map((reason) => (
                      <option key={reason} value={reason}>
                        {reason}
                      </option>
                    ))}
                  </select>
                  <div
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      formData.reason || focusedField === "reason"
                        ? "text-[12px] -top-2.5 bg-white px-1"
                        : "text-[16px] top-4"
                    } text-[#19191B]`}
                  >
                    Reason for contact<span className="text-[#C91F3B]">*</span>
                  </div>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <Image
                      src="/icons/down_icon.svg"
                      alt="Dropdown"
                      width={10}
                      height={10}
                    />
                  </div>
                </div>
                {errors.reason && (
                  <p className="text-[#C91F3B] text-[12px] mt-1 text-left">
                    {errors.reason}
                  </p>
                )}
              </div>
            </div>

            {/* Message Field */}
            <div className="relative">
              <div
                className={`relative rounded-[12px] border ${
                  focusedField === "message"
                    ? "border-[#19191B]"
                    : errors.message
                    ? "border-[#C91F3B]"
                    : "border-[#E5E5E5]"
                }`}
              >
                <textarea
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    validateField("message", e.target.value);
                  }}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => {
                    setFocusedField(null);
                    validateField("message", formData.message);
                  }}
                  className="w-full h-48 px-4 py-4 text-[16px] text-[#19191B] focus:outline-none bg-transparent resize-none"
                  placeholder=" "
                />
                <div
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                    formData.message || focusedField === "message"
                      ? "text-[12px] -top-2.5 bg-white px-1"
                      : "text-[16px] top-4"
                  } text-[#19191B]`}
                >
                  Type your message
                </div>
              </div>
              {errors.message && (
                <p className="text-[#C91F3B] text-[12px] mt-1 text-left">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-center md:justify-end w-full pt-[24px]">
              <Button
                variant="primary"
                type="submit"
                className="w-full md:w-auto px-[16px] py-[12px] md:px-[32px] md:py-[16px] text-[16px] md:text-[20px] font-bold"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
