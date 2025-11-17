import React from "react";
import ReactPlayer from "react-player/youtube";
import { useAudioControls } from "../context/AudioControlContext";

const YOUTUBE_VIDEO_URL = "https://www.youtube.com/watch?v=bsTKnwrFcOA";

const YouTubeSpotlight: React.FC = () => {
  const { pauseBackground, resumeBackground } = useAudioControls();

  return (
    <section className="px-6 py-16 bg-black">
      <div className="max-w-5xl mx-auto">
        <header className="mb-6 text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-violet-400">
            Reel destacado
          </p>
          <h2 className="text-3xl font-semibold text-white mt-2">
            Escena en foco
          </h2>
          <p className="text-gray-400 mt-2">
            Disfrutá este reel exclusivo a pantalla completa.
          </p>
        </header>
        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-violet-500/20">
          <ReactPlayer
            url={YOUTUBE_VIDEO_URL}
            width="100%"
            height="100%"
            controls
            playing={false}
            onPlay={pauseBackground}
            onPause={resumeBackground}
            onEnded={resumeBackground}
            className="react-player"
          />
        </div>
      </div>
    </section>
  );
};

export default YouTubeSpotlight;


