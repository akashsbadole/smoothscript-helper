import { AbsoluteFill, Sequence } from "@remotion/player";
import { CodeSnippet } from "./CodeSnippet";
import { LogoReveal } from "./LogoReveal";
import { TextTransition } from "./TextTransition";
import { ParticleBackground } from "./ParticleBackground";

export const VideoComposition = () => {
  return (
    <AbsoluteFill className="bg-tech-dark">
      <ParticleBackground />
      
      <Sequence from={0} durationInFrames={120}>
        <LogoReveal />
      </Sequence>

      <Sequence from={90} durationInFrames={120}>
        <TextTransition
          text="Building the future with code"
          className="text-4xl font-sans text-white"
        />
      </Sequence>

      <Sequence from={180} durationInFrames={150}>
        <CodeSnippet
          code={`function createMagic() {
  return "✨ Something amazing";
}`}
        />
      </Sequence>
    </AbsoluteFill>
  );
};