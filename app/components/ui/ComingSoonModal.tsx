"use client";

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ComingSoonModal = ({ isOpen, onClose }: ComingSoonModalProps) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/[.72] z-40" onClick={onClose} />

      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[330px] md:w-auto">
        <div className="p-[24px] bg-white rounded-[24px] shadow-[0px_2px_16px_0px_rgba(0,0,0,0.16)] outline outline-1 outline-offset-[-1px] outline-[#E5E5E5] flex flex-col justify-start items-start gap-[48px]">
          <div className="w-96 flex flex-col justify-start items-start gap-2">
            <div className="self-stretch justify-center text-zinc-900 text-[28px] md:text-[36px] font-bold leading-[32px] md:leading-[48px]">
              Coming soon
            </div>
            <div className="self-stretch justify-center text-zinc-900 text-[16px] md:text-[20px] font-normal leading-[24px] md:leading-[32px]">
              Pre-sales will be available shortly.
            </div>
          </div>
          <div className="self-stretch inline-flex justify-end items-center gap-2">
            <button
              onClick={onClose}
              className="px-8 py-2.5 bg-indigo-900 rounded-[72px] flex justify-center items-center gap-2"
            >
              <div className="text-center justify-center text-white text-[16px] font-semibold leading-[24px] md:leading-[28px]">
                OK, got it!
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
