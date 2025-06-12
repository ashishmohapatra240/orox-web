"use client";
import Link from "next/link";
import Image from "next/image";

const locations = [
  {
    title: "OROX Sydney CBD office - Barangaroo",
    address: "201 Kent St, Sydney NSW 2000",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.394987500118!2d151.20369689999998!3d-33.8637375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12af09ce593473%3A0x2435debf1c5cfaf5!2s201%20Kent%20St%2C%20Sydney%20NSW%202000%2C%20Australia!5e1!3m2!1sen!2sin!4v1749706733356!5m2!1sen!2sin",
    mapsUrl: "https://goo.gl/maps/your-sydney-office-link",
  },
  {
    title: "OROX head office - Locomotive Workshops",
    address: "2 Locomotive St, Eveleigh, NSW 2015",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.237874941234!2d151.19474639999999!3d-33.8950549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b1d1c4e09809%3A0x78e77cb1807a71b7!2s2%20Locomotive%20St%2C%20Eveleigh%20NSW%202015%2C%20Australia!5e1!3m2!1sen!2sin!4v1749706755066!5m2!1sen!2sin",
    mapsUrl: "https://goo.gl/maps/your-eveleigh-office-link",
  },
];

export default function ContactLocations() {
  return (
    <section className="w-full bg-[#F1F2F8] px-[16px] py-[44px] md:px-[80px] md:py-[88px]">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px]">
          {locations.map((location, index) => (
            <div key={index} className="flex flex-col gap-[32px]">
              {/* Map Container */}
              <div className="relative w-full aspect-[16/9] rounded-[32px] border border-[#E5E5E5] overflow-hidden">
                <iframe
                  src={location.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Location Details */}
              <div className="space-y-[24px]">
                <div className="space-y-[8px]">
                  <h2 className="text-[28px] font-bold text-[#19191B] leading-[40px]">
                    {location.title}
                  </h2>
                  <p className="text-[20px] text-[#19191B] leading-[32px]">
                    {location.address}
                  </p>
                </div>
                <Link
                  href={location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-[8px] text-[#2F5DFD] font-bold text-[14px] leading-[20px]"
                >
                  Get directions
                  <Image
                    src="/icons/arrow.svg"
                    alt="Arrow"
                    width={18}
                    height={18}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
