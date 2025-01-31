import { useEffect, useRef } from "react";
import Prism from "prismjs";

export const CodeSnippet = ({ code }: { code: string }) => {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code]);

  return (
    <div className="flex items-center justify-center w-full h-full p-8">
      <pre className="animate-fade-slide-up rounded-lg bg-black/50 p-6">
        <code ref={codeRef} className="font-mono text-lg">
          {code}
        </code>
      </pre>
    </div>
  );
};