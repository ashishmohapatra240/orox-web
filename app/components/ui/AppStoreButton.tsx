import Image from "next/image";

interface StoreButtonProps {
  href: string;
  target?: string;
  rel?: string;
}

export const AppStoreButton = ({ href, target, rel }: StoreButtonProps) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className="inline-block transition-opacity hover:opacity-80"
    >
      <Image
        src="/AppStore.svg"
        alt="Download on the App Store"
        width={540}
        height={160}
        className="h-[48px] w-auto"
        quality={100}
      />
    </a>
  );
};
