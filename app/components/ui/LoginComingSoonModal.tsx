"use client";

import Image from "next/image";

interface LoginComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginComingSoonModal = ({
  isOpen,
  onClose,
}: LoginComingSoonModalProps) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/[.72] z-40" onClick={onClose} />

      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[330px] md:w-[680px]">
        <div className="p-[24px] bg-white rounded-[24px] shadow-[0px_2px_16px_0px_rgba(0,0,0,0.16)] outline outline-1 outline-offset-[-1px] outline-[#E5E5E5] flex flex-col justify-start items-start gap-[24px]">
          <div className="flex flex-col justify-start items-start gap-4">
            <div className="justify-center text-zinc-900 text-[28px] md:text-[36px] font-bold leading-[36px] md:leading-[48px]">
              Coming soon
            </div>
            <div className="justify-center text-zinc-900 text-[16px] md:text-[20px] font-normal leading-[28px] md:leading-[32px]">
              Our team is building a great web experience. In the meantime,{" "}
              <span className="md:hidden">
                download the OROX mobile app and start investing today.
              </span>
              <span className="hidden md:inline">
                scan the QR code below to download the OROX mobile app and start
                investing today.
              </span>
            </div>
          </div>

          {/* QR Code - Only show on desktop */}
          <div className="w-full hidden md:flex justify-center">
            <div className="p-4 bg-white rounded-2xl">
              <Image
                src="/images/qr-code.png"
                alt="QR Code"
                width={200}
                height={200}
              />
            </div>
          </div>

          <div className="self-stretch flex flex-col md:flex-row justify-end items-stretch md:items-center gap-2">
            <button
              onClick={onClose}
              className="md:hidden w-full h-[48px] bg-[#293483] text-white text-[16px] font-bold rounded-[72px] hover:bg-[#212A69]"
            >
              Download now
            </button>

            <button
              onClick={onClose}
              className="w-full md:w-auto px-8 py-2.5 bg-transparent md:bg-[#293483] border border-[#293483] md:border-none text-[#293483] md:text-white text-[16px] font-semibold rounded-[72px] hover:bg-[#293483]/5 md:hover:bg-[#212A69]"
            >
              OK, got it!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
