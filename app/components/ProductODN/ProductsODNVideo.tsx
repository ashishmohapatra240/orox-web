"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const products = [
  {
    tag: "PLACEHOLDER",
    title: (
      <>
        <span className="relative inline-block z-10">
          <span className="absolute left-0 top-[35%] -z-10 h-[80%] w-full bg-[#C9CCE0]/40 rounded-[4px]" />
          Placeholder
        </span>
      </>
    ),
    description: (
      <>
        Love crypto but hate the chaos? DVOX is your access token to a
        professionally managed, auto-balanced crypto ecosystem that&apos;s built
        for long-term confidence, not just short-term hype. Stake DVOX in the
        OROX app to unlock benefits and gain exposure to a curated portfolio of
        high-grade digital assets, actively managed by experts. Forget diamond
        hands—this is strategy over stress.
      </>
    ),
    firstVideo: "/videos/OROXAnimation1.mp4",
    loopVideo: "/videos/OROXAnimation2.mp4",
    link: "/products-odn",
  },
];

// how early to start the looping clip (in seconds)
const SWITCH_OFFSET = 0.36;

export const ProductODNVideo = () => {
  const [showLoopVideo, setShowLoopVideo] = useState(false);
  const firstRef = useRef<HTMLVideoElement>(null);
  const loopRef = useRef<HTMLVideoElement>(null);

  /* ---------- clip-swap logic ---------- */
  useEffect(() => {
    const first = firstRef.current;
    const loop = loopRef.current;
    if (!first || !loop) return;

    const onTimeUpdate = () => {
      if (
        first.duration > 0 &&
        first.currentTime >= first.duration - SWITCH_OFFSET
      ) {
        // Start playing the second video
        loop
          .play()
          .then(() => {
            // Only hide first video once second has started playing
            setShowLoopVideo(true);
          })
          .catch((e) => console.error("Failed to play loop video:", e));

        first.removeEventListener("timeupdate", onTimeUpdate);
      }
    };

    // Preload the loop video to avoid any loading delay
    loop.preload = "auto";
    first.addEventListener("timeupdate", onTimeUpdate);
    return () => first.removeEventListener("timeupdate", onTimeUpdate);
  }, []);

  /* ---------- UI ---------- */
  return (
    <section className="w-full bg-[#070926] px-[16px] py-[40px] md:px-[80px] md:py-[88px]">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-8 sm:space-y-12 lg:space-y-44">
          {products.map((p, i) => (
            <div
              key={i}
              className="flex items-center gap-[40px] lg:gap-[80px] flex-col-reverse lg:flex-row"
            >
              <div className="max-w-[600px]">
                <span className="text-[14px] md:text-[16px] font-semibold text-white leading-[18px] md:leading-[28px]">
                  {p.tag}
                </span>
                <h2 className="mt-2 text-[32px] md:text-[56px] font-bold leading-[40px] md:leading-[68px] text-white">
                  {p.title}
                </h2>
                <p className="mt-6 mb-10 text-[16px] md:text-[20px] leading-[24px] md:leading-[32px] text-white/80">
                  {p.description}
                </p>
                <Link
                  href={p.link}
                  className="inline-flex h-[56px] w-[56px] items-center justify-center rounded-full bg-white hover:bg-gray-100 text-[#293483] transition-transform hover:scale-110"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>

              {/* ---------- video ---------- */}
              <div className="flex items-center justify-center w-full">
                <div className="relative w-full rounded-[32px] overflow-hidden">
                  {/* first (intro) clip */}
                  <video
                    ref={firstRef}
                    src={p.firstVideo}
                    className={`w-full h-auto rounded-[32px] absolute inset-0 transition-opacity duration-300 ${
                      showLoopVideo ? "opacity-0" : "opacity-100"
                    }`}
                    playsInline
                    muted
                    autoPlay
                  />

                  {/* looping clip */}
                  <video
                    ref={loopRef}
                    src={p.loopVideo}
                    className={`w-full h-auto rounded-[32px] ${
                      showLoopVideo ? "opacity-100" : "opacity-0"
                    }`}
                    playsInline
                    muted
                    loop
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
