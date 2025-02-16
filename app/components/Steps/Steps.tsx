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
        <Link href="#" className="text-blue-600 hover:underline">
          App Store
        </Link>{" "}
        or{" "}
        <Link href="#" className="text-blue-600 hover:underline">
          Play Store
        </Link>
        . Or{" "}
        <Link href="#" className="text-blue-600 hover:underline">
          sign up
        </Link>{" "}
        in minutes and access, stress-free high-growth investing.
      </>
    ),
  },
];

export const Steps = () => {
  return (
    <section className="relative w-full px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl bg-gray-50/80 p-12">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-[#19191B] md:text-5xl">
                  <span className="relative inline-block">
                    {/* Blue highlight similar to hero section */}
                    <span className="absolute left-0 top-[35%] -z-10 h-[60%] w-full bg-[#293483]/10 rounded-[8px]"></span>
                    5 easy steps
                  </span>{" "}
                  with OROX.
                </h2>

                <div className="space-y-6">
                  {steps.map((step) => (
                    <div key={step.number} className="space-y-2">
                      <h3 className="text-2xl font-bold text-[#19191B]">
                        Step {step.number}: {step.title}
                      </h3>
                      <p className="text-lg text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Progress Dots */}
                <div className="flex gap-2">
                  <div className="h-1.5 w-8 rounded-full bg-[#293483]"></div>
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="h-1.5 w-1.5 rounded-full bg-gray-200"
                    ></div>
                  ))}
                </div>

                <Button
                  variant="secondary"
                  className="mt-4 border border-gray-200 hover:border-gray-300"
                >
                  Create your account
                </Button>
              </div>
            </div>

            {/* Right Content - App Screenshot */}
            <div className="relative flex items-start justify-center lg:h-full">
              <div className="relative h-[500px] w-[320px] overflow-hidden">
                <Image
                  src="/images/steps/step1.png"
                  alt="OROX App Interface"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Pause Button */}
              <button className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg">
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
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
