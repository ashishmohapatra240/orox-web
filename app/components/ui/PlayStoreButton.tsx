import Image from "next/image";
interface PlayStoreProps {
  href: string;
  target?: string;
  rel?: string;
}
export const PlayStoreButton = ({ href, target, rel }: PlayStoreProps) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className="inline-block transition-opacity hover:opacity-80"
    >
      <Image
        src="/PlayStore.svg"
        alt="Get it on Google Play"
        width={540}
        height={160}
        className="h-[48px] w-auto"
        quality={100}
      />
    </a>
  );
};
