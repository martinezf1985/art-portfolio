import React, { useCallback, useEffect, useMemo, useState } from "react";
import ReactPlayer from "react-player";
import { useAudioControls } from "../context/AudioControlContext";

interface Track {
  title: string;
  artist: string;
  src: string;
  cover: string;
}

const PLAYLIST: Track[] = [
  {
    title: "Evening Glow",
    artist: "Pixabay",
    src: "https://cdn.pixabay.com/download/audio/2023/09/02/audio_932ce9ff6e.mp3?filename=evening-glow-172496.mp3",
    cover: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=400&q=60",
  },
  {
    title: "New Beginnings",
    artist: "Pixabay",
    src: "https://cdn.pixabay.com/download/audio/2023/10/26/audio_156450fe7c.mp3?filename=new-beginnings-173344.mp3",
    cover: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=60",
  },
  {
    title: "Serene Horizon",
    artist: "Pixabay",
    src: "https://cdn.pixabay.com/download/audio/2023/08/28/audio_0b3839b9d3.mp3?filename=serene-horizon-172230.mp3",
    cover: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=400&q=60",
  },
];

const BackgroundMusicPlayer: React.FC = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isUserPaused, setIsUserPaused] = useState(false);
  const [isExternallyPaused, setIsExternallyPaused] = useState(false);
  const { registerBackgroundController } = useAudioControls();

  const currentTrack = useMemo(
    () => PLAYLIST[currentTrackIndex],
    [currentTrackIndex]
  );

  const handlePlay = useCallback(() => {
    setIsPlaying(true);
    setIsUserPaused(false);
    setIsExternallyPaused(false);
  }, []);

  const handlePause = useCallback(() => {
    setIsPlaying(false);
    setIsUserPaused(true);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentTrackIndex((prev) => (prev + 1) % PLAYLIST.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentTrackIndex((prev) =>
      prev === 0 ? PLAYLIST.length - 1 : prev - 1
    );
  }, []);

  const handleToggle = () => {
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  useEffect(() => {
    registerBackgroundController({
      pause: () => {
        setIsExternallyPaused(true);
      },
      resume: () => {
        if (!isUserPaused) {
          setIsExternallyPaused(false);
          setIsPlaying(true);
        }
      },
    });
  }, [isUserPaused, registerBackgroundController]);

  return (
    <>
      <ReactPlayer
        url={currentTrack.src}
        playing={isPlaying && !isExternallyPaused}
        volume={0.4}
        height={0}
        width={0}
        loop={false}
        onEnded={handleNext}
        config={{ file: { forceAudio: true } }}
      />
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 md:left-6 md:translate-x-0 z-40">
        <div className="bg-black/80 backdrop-blur rounded-2xl shadow-2xl border border-violet-500/40 w-[320px] max-w-[90vw] p-4 flex items-center gap-4">
          <img
            src={currentTrack.cover}
            alt={currentTrack.title}
            className="w-16 h-16 rounded-xl object-cover border border-white/20"
            loading="lazy"
          />
          <div className="flex-1">
            <p className="text-sm font-semibold text-white">
              {currentTrack.title}
            </p>
            <p className="text-xs text-gray-300">{currentTrack.artist}</p>
            <div className="flex items-center gap-2 mt-2">
              <button
                onClick={handlePrev}
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Anterior"
              >
                ‹
              </button>
              <button
                onClick={handleToggle}
                className="px-3 py-1 bg-violet-500/80 hover:bg-violet-400 text-sm rounded-full text-white transition-all"
              >
                {isPlaying && !isExternallyPaused ? "Pausar" : "Reproducir"}
              </button>
              <button
                onClick={handleNext}
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Siguiente"
              >
                ›
              </button>
            </div>
            {isExternallyPaused && !isUserPaused && (
              <p className="text-[11px] text-yellow-300 mt-1">
                Pausado por reproducción de video
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BackgroundMusicPlayer;

