"use client";
import { useState, useRef, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DropdownProps {
  trigger: ReactNode;
  children: ReactNode;
  label: string;
}

export const Dropdown = ({ trigger, children, label }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle mouse enter - open with a small delay
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsOpen(true);
    }, 100);
  };

  // Handle mouse leave - close with a small delay
  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // For mobile, we still need click handling
  const handleClick = () => {
    if (window.innerWidth < 768) {
      setIsOpen(!isOpen);
    }
  };

  // Animation variants for the dropdown
  const dropdownVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.1,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -5,
      transition: {
        duration: 0.1,
        ease: "easeIn",
      },
    },
  };

  return (
    <div
      className="static"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={handleClick}
        className="flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-[#E9E9EF] transition-colors"
        aria-expanded={isOpen}
        aria-label={`${label} menu`}
      >
        {trigger}
      </button>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isOpen && window.innerWidth < 768 && (
          <motion.div
            className="fixed inset-0 z-50 bg-white/80 backdrop-blur-sm md:hidden"
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-x-0 top-[70px] p-4 bg-white shadow-lg overflow-y-auto max-h-[calc(100vh-70px)]"
              onClick={(e) => e.stopPropagation()}
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold text-[#293483]">
                    {label}
                  </h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-gray-500"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <motion.div
                  className="staggered-container"
                  initial="hidden"
                  animate="visible"
                  custom={0}
                >
                  {children}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed left-0 right-0 z-50 hidden md:block"
            style={{ top: "70px" }}
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="w-full border-t border-[#F4F4F4] bg-white shadow-lg">
              <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 relative">
                <motion.div
                  className="staggered-container"
                  initial="hidden"
                  animate="visible"
                  custom={0}
                >
                  {children}
                  <hr className="my-10 h-[1px] bg-[#E5E5E5]" />
                  <div className="absolute right-8 bottom-0 flex flex-col items-center">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-2 mb-6 text-[#2F5DFD] hover:opacity-80 transition-opacity"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      <span className="text-[#2F5DFD] font-semibold text-[16px]">
                        Close
                      </span>
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Wrapper component to apply staggered animations to dropdown items
export const DropdownItem = ({
  children,
  index = 0,
}: {
  children: ReactNode;
  index?: number;
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            delay: index * 0.05,
            duration: 0.1,
            ease: "easeOut",
          },
        },
      }}
      initial="hidden"
      animate="visible"
      custom={index}
    >
      {children}
    </motion.div>
  );
};
