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
        src="/google-play-badge.png"
        alt="Get it on Google Play"
        width={270}
        height={80}
        className="h-10 w-auto"
      />
    </a>
  );
};
