import { motion } from "framer-motion";

export const LogoReveal = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="animate-float bg-gradient-to-r from-tech-blue to-tech-purple p-8 rounded-full">
        <svg
          className="w-32 h-32 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      </div>
    </div>
  );
};