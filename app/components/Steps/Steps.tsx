"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/Button";

const steps = [
  {
    number: 1,
    title: "Download the app",
    description: (
      <>
        Get started by downloading the OROX app from the{" "}
        <Link href="#" className="text-[#2F5DFD] underline">
          App Store
        </Link>{" "}
        or{" "}
        <Link href="#" className="text-[#2F5DFD] underline">
          Play Store
        </Link>
        . Or{" "}
        <Link href="#" className="text-[#2F5DFD] underline">
          sign up
        </Link>{" "}
        in minutes and access, stress-free high-growth investing.
      </>
    ),
    image:
      "https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/steps/step1.png",
  },
  {
    number: 2,
    title: "Create your account and get verified",
    description:
      "Sign up with your details and complete a quick verification process to keep your investments secure and compliant.",
    image:
      "https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/steps/step2.png",
  },
  {
    number: 3,
    title: "Choose your investment type",
    description: (
      <>
        Want steady, stress-free returns? ODN offers a 90-day cycle with
        market-neutral strategies for stable, risk-adjusted investment.
        high-growth digital assets.
        <br />
        <br />
        Looking for crypto exposure with less volatility? DVOX offers the
        benefits of a professionally managed, auto-balanced portfolio of
        high-quality, high-growth digital assets.
      </>
    ),
    image:
      "https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/steps/step3.png",
  },
  {
    number: 4,
    title: "Fund your portfolio",
    description:
      "Deposit funds via fiat or crypto, convert seamlessly between assets, and use the DVOX token to unlock exclusive benefits—all in one app.",
    image:
      "https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/steps/step4.png",
  },
  {
    number: 5,
    title: "Sit back and grow",
    description: (
      <>
        No market timing, no day trading—just automated, smart investing on
        autopilot. Track your progress anytime through the OROX app and let your
        money work for you.
        <br />
        <br />
        <Link
          href="https://onelink.to/65gpe9"
          className="text-[#2F5DFD] underline"
        >
          Download OROX
        </Link>{" "}
        today and start investing smarter!
      </>
    ),
    image:
      "https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/steps/step5.png",
  },
];

export const Steps = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const animationRef = useRef<number | null>(null);
  const lastUpdateTimeRef = useRef<number | null>(null);

  const STEP_DURATION = 7000; // 7 seconds per step

  useEffect(() => {
    startProgressAnimation();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [currentStep, isPaused]);

  const startProgressAnimation = () => {
    if (isPaused) return;

    setProgress(0);
    lastUpdateTimeRef.current = Date.now();

    const animate = () => {
      const now = Date.now();
      const elapsed = now - (lastUpdateTimeRef.current || now);
      lastUpdateTimeRef.current = now;

      setProgress((prev) => {
        const newProgress = prev + (elapsed / STEP_DURATION) * 100;

        if (newProgress >= 100) {
          goToNextStep();
          return 0;
        }

        return newProgress;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  const goToNextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  // const goToPrevStep = () => {
  //   setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  // };

  const handleStepClick = (index: number) => {
    setCurrentStep(index);
    resetAnimation();
  };

  const togglePause = () => {
    setIsPaused((prev) => !prev);
    if (isPaused) {
      lastUpdateTimeRef.current = Date.now();
      requestAnimationFrame(startProgressAnimation);
    } else if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const resetAnimation = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    setProgress(0);
    startProgressAnimation();
  };

  const step = steps[currentStep];

  return (
    <section className="relative w-full px-[16px] py-[16px] md:px-[80px] md:pb-[88px] md:pt-[0px]">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl bg-[#F1F2F8] px-[24px] pt-[24px] md:px-[40px] md:pt-[72px] relative">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Left Content */}
            <div className="lg:col-span-3 flex flex-col min-h-[600px]">
              <div className="space-y-6 flex-grow">
                <h2 className="text-4xl font-bold text-[#19191B] md:text-[48px] leading-[1.1]">
                  {currentStep === 0 ? (
                    <>
                      <span className="relative inline-block z-10">
                        {/* Blue highlight only behind "5 easy steps" */}
                        <span className="absolute left-0 top-[35%] -z-10 h-[80%] w-full bg-[#7878FA]/40 rounded-[8px]"></span>
                        5 easy steps
                      </span>{" "}
                      with OROX.
                      <br />
                      Step {step.number}: {step.title}
                    </>
                  ) : (
                    <>
                      <p className="max-w-[580px]">
                        Step {step.number}: {step.title}
                      </p>
                    </>
                  )}
                </h2>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-lg text-[#19191B] max-w-[580px]">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Progress Dots */}
                <div className="flex gap-2 items-center">
                  {steps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => handleStepClick(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === currentStep
                          ? "w-8 bg-[#999999] relative overflow-hidden"
                          : "w-1.5 bg-[#999999]"
                      }`}
                    >
                      {i === currentStep && !isPaused && (
                        <span
                          className="absolute top-0 left-0 h-full bg-[#000000] rounded"
                          style={{ width: `${progress}%` }}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex justify-between mt-auto pb-[24px] md:pb-[72px] items-center">
                <Link href="/">
                  <Button
                    variant="secondary"
                    className="border border-[#78CAB9] hover:border-gray-300 py-[12px] md:py-4 text-[16px] md:text-[20px] font-[600] w-full md:w-auto text-[#293483] whitespace-nowrap"
                    style={{fontWeight: '600 !important'}}
                  >
                    Create your account
                  </Button>
                </Link>
                <button
                  onClick={togglePause}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white border border-[#E5E5E5] md:hidden mx-0 md:mx-[24px]"
                >
                  {isPaused ? (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M4 3L12 8L4 13V3Z" fill="#293483" />
                    </svg>
                  ) : (
                    <div className="h-4 w-4">
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="3"
                          y="2"
                          width="4"
                          height="12"
                          rx="1"
                          fill="#293483"
                        />
                        <rect
                          x="9"
                          y="2"
                          width="4"
                          height="12"
                          rx="1"
                          fill="#293483"
                        />
                      </svg>
                    </div>
                  )}
                </button>
              </div>
            </div>

            {/* Right Content - App Screenshot */}
            <div className="flex items-end justify-center lg:col-span-2">
              <div className="relative h-[500px] w-[320px] overflow-hidden">
                <Image
                  src={step.image}
                  alt={`OROX App - ${step.title}`}
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 right-6 hidden md:flex gap-2">
            <button
              onClick={togglePause}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white border border-[#E5E5E5]"
            >
              {isPaused ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 3L12 8L4 13V3Z" fill="#293483" />
                </svg>
              ) : (
                <div className="h-4 w-4">
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="3"
                      y="2"
                      width="4"
                      height="12"
                      rx="1"
                      fill="#293483"
                    />
                    <rect
                      x="9"
                      y="2"
                      width="4"
                      height="12"
                      rx="1"
                      fill="#293483"
                    />
                  </svg>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
