import { Player } from "@remotion/player";
import { VideoComposition } from "../components/VideoComposition";

const Index = () => {
  return (
    <div className="min-h-screen bg-tech-dark flex items-center justify-center p-8">
      <div className="w-full max-w-4xl">
        <Player
          component={VideoComposition}
          durationInFrames={450}
          compositionWidth={1920}
          compositionHeight={1080}
          fps={60}
          controls
          style={{
            width: "100%",
            aspectRatio: "16/9",
          }}
        />
      </div>
    </div>
  );
};

export default Index;