"use client";

interface PausePlayButtonProps {
  isPlaying: boolean;
  onToggle: () => void;
  className?: string;
}

export const PausePlayButton = ({
  isPlaying,
  onToggle,
  className = "",
}: PausePlayButtonProps) => {
  return (
    <button
      onClick={onToggle}
      className={`flex h-12 w-12 items-center justify-center rounded-full bg-white border border-[#E5E5E5] ${className}`}
    >
      {!isPlaying ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 16 16"
          fill="#293483"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 3L12 8L4 13V3Z" />
        </svg>
      ) : (
        <div className="h-4 w-4">
          <svg
            viewBox="0 0 16 16"
            fill="#293483"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="3" y="2" width="4" height="12" rx="1" />
            <rect x="9" y="2" width="4" height="12" rx="1" />
          </svg>
        </div>
      )}
    </button>
  );
};
