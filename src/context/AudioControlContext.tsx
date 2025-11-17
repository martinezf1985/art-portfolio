import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  type ReactNode,
} from "react";

interface BackgroundController {
  pause: () => void;
  resume: () => void;
}

interface AudioControlContextValue {
  pauseBackground: () => void;
  resumeBackground: () => void;
  registerBackgroundController: (controller: BackgroundController) => void;
}

const AudioControlContext = createContext<AudioControlContextValue>({
  pauseBackground: () => {},
  resumeBackground: () => {},
  registerBackgroundController: () => {},
});

export const AudioControlProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const controllerRef = useRef<BackgroundController | null>(null);

  const pauseBackground = useCallback(() => {
    controllerRef.current?.pause();
  }, []);

  const resumeBackground = useCallback(() => {
    controllerRef.current?.resume();
  }, []);

  const registerBackgroundController = useCallback(
    (controller: BackgroundController) => {
      controllerRef.current = controller;
    },
    []
  );

  const value = useMemo(
    () => ({
      pauseBackground,
      resumeBackground,
      registerBackgroundController,
    }),
    [pauseBackground, resumeBackground, registerBackgroundController]
  );

  return (
    <AudioControlContext.Provider value={value}>
      {children}
    </AudioControlContext.Provider>
  );
};

export const useAudioControls = () => useContext(AudioControlContext);


