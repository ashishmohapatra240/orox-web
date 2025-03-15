"use client";
import { Button } from "../ui/Button";
import { useState } from "react";
import Image from "next/image";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="w-full bg-white py-12 md:py-22 lg:py-[88px]">
      <div className="mx-auto max-w-[880px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Header */}
          <div className="space-y-2">
            <span className="text-sm md:text-base font-semibold bg-clip-text text-transparent bg-gradient-to-b from-[#4296E4] to-[#383699]">
              GET IN TOUCH WITH US
            </span>
            <h1 className="text-[40px] md:text-[64px] font-bold text-[#19191B] leading-tight">
              Contact OROX
            </h1>
            <p className="text-base md:text-xl text-[#19191B]">
              Have questions? Need support? We&apos;re here to help.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full p-6 md:p-8 border border-[#E5E5E5] rounded-3xl space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name Field */}
              <div className="relative">
                <div
                  className={`relative h-[48px] rounded-xl border ${
                    focusedField === "name"
                      ? "border-[#19191B]"
                      : "border-[#E5E5E5]"
                  }`}
                >
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full h-full px-4 text-[16px] text-[#19191B] focus:outline-none bg-transparent"
                    placeholder=" "
                  />
                  <div
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      formData.name || focusedField === "name"
                        ? "text-[12px] -top-2.5 bg-white px-1"
                        : "text-[16px] top-2.5"
                    } text-[#19191B]`}
                  >
                    Your name<span className="text-[#C91F3B]">*</span>
                  </div>
                </div>
              </div>

              {/* Email Field */}
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
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full h-full px-4 text-[16px] text-[#19191B] focus:outline-none bg-transparent"
                    placeholder=" "
                  />
                  <div
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      formData.email || focusedField === "email"
                        ? "text-[12px] -top-2.5 bg-white px-1"
                        : "text-[16px] top-2.5"
                    } text-[#19191B]`}
                  >
                    Email<span className="text-[#C91F3B]">*</span>
                  </div>
                </div>
              </div>

              {/* Mobile Field */}
              <div className="relative">
                <div
                  className={`relative h-[48px] rounded-xl border ${
                    focusedField === "mobile"
                      ? "border-[#19191B]"
                      : "border-[#E5E5E5]"
                  }`}
                >
                  <input
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) =>
                      setFormData({ ...formData, mobile: e.target.value })
                    }
                    onFocus={() => setFocusedField("mobile")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full h-full px-4 text-[16px] text-[#19191B] focus:outline-none bg-transparent"
                    placeholder=" "
                  />
                  <div
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      formData.mobile || focusedField === "mobile"
                        ? "text-[12px] -top-2.5 bg-white px-1"
                        : "text-[16px] top-2.5"
                    } text-[#19191B]`}
                  >
                    Mobile<span className="text-[#C91F3B]">*</span>
                  </div>
                </div>
              </div>

              {/* Reason Dropdown */}
              <div className="relative">
                <div
                  className={`relative h-[48px] rounded-xl border ${
                    focusedField === "reason"
                      ? "border-[#19191B]"
                      : "border-[#E5E5E5]"
                  }`}
                >
                  <select
                    value={formData.reason}
                    onChange={(e) =>
                      setFormData({ ...formData, reason: e.target.value })
                    }
                    onFocus={() => setFocusedField("reason")}
                    onBlur={() => setFocusedField(null)}
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
                        : "text-[16px] top-2.5"
                    } text-[#19191B]`}
                  >
                    Reason for contact<span className="text-[#C91F3B]">*</span>
                  </div>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <Image
                      src="/icons/ic_chevron_right.svg"
                      alt="Dropdown"
                      width={24}
                      height={24}
                      className="rotate-90"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Message Field */}
            <div className="relative">
              <div
                className={`relative rounded-xl border ${
                  focusedField === "message"
                    ? "border-[#19191B]"
                    : "border-[#E5E5E5]"
                }`}
              >
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full h-48 px-4 py-4 text-[16px] text-[#19191B] focus:outline-none bg-transparent resize-none"
                  placeholder=" "
                />
                <div
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                    formData.message || focusedField === "message"
                      ? "text-[12px] -top-2.5 bg-white px-1"
                      : "text-[16px] top-2.5"
                  } text-[#19191B]`}
                >
                  Type your message
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
