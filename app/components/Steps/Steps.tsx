"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/Button";
import { PausePlayButton } from "../ui/PausePlayButton";
import { motion, AnimatePresence } from "framer-motion";

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
    image: "/images/steps/steps-1-iPhone.png",
  },
  {
    number: 2,
    title: "Create your account and get verified",
    description:
      "Sign up with your details and complete a quick verification process to keep your investments secure and compliant.",
    image: "/images/steps/steps-2-iPhone.png",
  },
  {
    number: 3,
    title: "Choose your investment type",
    description: (
      <>
        Looking for stable returns or smarter crypto exposure?{" "}
        <span className="font-bold">ODN</span> targets consistency through
        market-neutral strategies. <span className="font-bold">DVOX</span> is
        your access token to gain benefits linked to a professionally managed
        crypto ecosystem built for long-term performance.
      </>
    ),
    image: "/images/steps/steps-3-iPhone.png",
  },
  {
    number: 4,
    title: "Fund your portfolio",
    description:
      "Deposit funds, convert seamlessly between assets, and use the DVOX token to unlock exclusive benefits—all in one app.",
    image: "/images/steps/steps-4-iPhone.png",
  },
  {
    number: 5,
    title: "Sit back and grow",
    description: (
      <>
        No market timing, no day trading—just automated, data-driven strategies
        on autopilot. Track your performance anytime through the OROX app and
        stay informed as your portfolio evolves.
      </>
    ),
    image: "/images/steps/steps-5-iPhone.png",
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

  const fadeAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <section className="relative w-full px-[16px] py-[16px] md:px-[80px] md:pb-[88px] md:pt-[0px]">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl bg-[#F1F2F8] px-[24px] pt-[24px] md:px-[40px] md:pt-[72px] relative md:h-auto h-[1000px] overflow-hidden">
          <div className="grid gap-12 lg:grid-cols-5 h-full">
            {/* Left Content */}
            <div className="lg:col-span-3 flex flex-col">
              <div className="space-y-6 flex-grow">
                <AnimatePresence mode="wait">
                  <motion.h2
                    key={currentStep}
                    {...fadeAnimation}
                    className="text-[28px] md:text-[48px] font-bold text-[#19191B] leading-[34px] md:leading-[56px]"
                  >
                    {currentStep === 0 ? (
                      <>
                        <span className="relative inline-block z-10">
                          {/* Blue highlight only behind "5 easy steps" */}
                          <span className="absolute left-0 top-[35%] -z-10 h-[80%] w-full bg-[#7878FA]/40 rounded-[4px]"></span>
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
                  </motion.h2>
                </AnimatePresence>

                <div className="space-y-6 min-h-[180px] md:min-h-[0px] flex-shrink-0 w-full relative">
                  <div className="space-y-2">
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={currentStep}
                        {...fadeAnimation}
                        className="text-lg text-[#19191B] max-w-[580px]"
                      >
                        {step.description}
                      </motion.p>
                    </AnimatePresence>
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
              <div className="flex justify-between mt-[36px] pb-[0] md:pb-[72px] items-center">
                <Link href="/signup">
                  <Button
                    variant="secondary"
                    className="border border-[#78CAB9] hover:border-gray-300 py-[12px] md:py-4 text-[16px] md:text-[20px] font-[600] w-full md:w-auto text-[#293483] whitespace-nowrap "
                    style={{ fontWeight: "600 !important" }}
                  >
                    Create your account
                  </Button>
                </Link>
                <PausePlayButton
                  isPlaying={!isPaused}
                  onToggle={togglePause}
                  className="md:hidden mx-0 md:mx-[24px] text-[#293483]"
                />
              </div>
            </div>

            {/* Right Content - App Screenshot */}
            <div className="flex items-end justify-center lg:col-span-2">
              <div className="relative h-[500px] w-[300px] md:w-[380px] md:h-[600px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    {...fadeAnimation}
                    className="absolute inset-0"
                  >
                    <Image
                      src={step.image}
                      alt={`OROX App - ${step.title}`}
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 right-6 hidden md:flex gap-2">
            <PausePlayButton
              isPlaying={!isPaused}
              onToggle={togglePause}
              className="text-[#293483]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
