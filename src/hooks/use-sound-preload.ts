import { useState, useEffect } from "react";
import { toast } from "sonner";

interface UseSoundPreloadProps {
  audioUrl: string;
  maxRetries?: number;
  retryDelay?: number;
}

interface PreloadedSound {
  audio: HTMLAudioElement;
  loaded: boolean;
  error: boolean;
  retries: number;
}

export const useSoundPreload = ({
  audioUrl,
  maxRetries = 3,
  retryDelay = 1000,
}: UseSoundPreloadProps) => {
  const [sound, setSound] = useState<PreloadedSound>({
    audio: new Audio(audioUrl),
    loaded: false,
    error: false,
    retries: 0,
  });

  const retryLoad = () => {
    if (sound.retries >= maxRetries) {
      toast.error(`Failed to load audio after ${maxRetries} attempts`);
      setSound((prev) => ({ ...prev, error: true }));
      return;
    }

    setTimeout(() => {
      const newAudio = new Audio(audioUrl);
      setSound((prev) => ({
        audio: newAudio,
        loaded: false,
        error: false,
        retries: prev.retries + 1,
      }));
    }, retryDelay);
  };

  useEffect(() => {
    const audio = sound.audio;

    const handleLoad = () => {
      setSound((prev) => ({ ...prev, loaded: true, error: false }));
    };

    const handleError = () => {
      console.error(`Error loading audio: ${audioUrl}`);
      retryLoad();
    };

    audio.addEventListener("canplaythrough", handleLoad);
    audio.addEventListener("error", handleError);

    // Start loading
    audio.load();

    return () => {
      audio.removeEventListener("canplaythrough", handleLoad);
      audio.removeEventListener("error", handleError);
      audio.src = "";
    };
  }, [audioUrl, sound.audio]);

  return {
    audio: sound.audio,
    isLoaded: sound.loaded,
    hasError: sound.error,
    retryCount: sound.retries,
  };
};
