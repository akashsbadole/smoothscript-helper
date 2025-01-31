import { useEffect, useState } from "react";

export const TextTransition = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div
        className={`font-mono overflow-hidden whitespace-nowrap ${className}`}
        style={{ borderRight: displayText.length < text.length ? "2px solid white" : "none" }}
      >
        {displayText}
      </div>
    </div>
  );
};