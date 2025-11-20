import React, { useCallback, useEffect, useMemo, useState, useRef } from "react";
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
    title: "Track 1",
    artist: "YouTube",
    src: "https://www.youtube.com/watch?v=o0kmeLN3Vys",
    cover: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=400&q=60",
  },
  {
    title: "Track 2",
    artist: "YouTube",
    src: "https://www.youtube.com/watch?v=p_Lop3880Kw",
    cover: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=60",
  },
  {
    title: "Track 3",
    artist: "YouTube",
    src: "https://www.youtube.com/watch?v=BGlj8wiAUwI",
    cover: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=400&q=60",
  },
  {
    title: "Track 4",
    artist: "YouTube",
    src: "https://www.youtube.com/watch?v=CwTw-AF2nHo",
    cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=400&q=60",
  },
  {
    title: "Track 5",
    artist: "YouTube",
    src: "https://www.youtube.com/watch?v=2u0BujSenmU",
    cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=400&q=60",
  },
  {
    title: "Track 6",
    artist: "YouTube",
    src: "https://www.youtube.com/watch?v=s4DEe5Yv4L0",
    cover: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=400&q=60",
  },
];

const BackgroundMusicPlayer: React.FC = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isUserPaused, setIsUserPaused] = useState(false);
  const [isExternallyPaused, setIsExternallyPaused] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const playerRef = useRef<ReactPlayer>(null);
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
    setIsPlaying(true);
    setIsExternallyPaused(false);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentTrackIndex((prev) =>
      prev === 0 ? PLAYLIST.length - 1 : prev - 1
    );
    setIsPlaying(true);
    setIsExternallyPaused(false);
  }, []);

  const handleToggle = () => {
    if (isPlaying && !isExternallyPaused) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  const handleReady = () => {
    setIsReady(true);
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

  // Resetear cuando cambia el track
  useEffect(() => {
    setIsReady(false);
    if (isPlaying && !isExternallyPaused) {
      // Pequeño delay para asegurar que el player esté listo
      const timer = setTimeout(() => {
        setIsReady(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentTrackIndex]);

  return (
    <>
      <ReactPlayer
        ref={playerRef}
        url={currentTrack.src}
        playing={isPlaying && !isExternallyPaused && isReady}
        volume={0.4}
        height={0}
        width={0}
        loop={false}
        onEnded={handleNext}
        onReady={handleReady}
        onError={(error) => {
          console.error("Error en reproductor:", error);
          // Intentar siguiente track si hay error
          setTimeout(() => handleNext(), 2000);
        }}
        config={{
          youtube: {
            playerVars: {
              autoplay: 0,
              controls: 0,
              modestbranding: 1,
              rel: 0,
              enablejsapi: 1,
            },
          },
        }}
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

