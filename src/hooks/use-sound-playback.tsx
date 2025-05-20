import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { useSoundPreload } from "./use-sound-preload";

interface UseSoundPlaybackProps {
  audioUrl: string;
}

export const useSoundPlayback = ({ audioUrl }: UseSoundPlaybackProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const { audio, isLoaded, hasError } = useSoundPreload({ audioUrl });
  const audioRef = useRef<HTMLAudioElement | null>(audio);

  useEffect(() => {
    audioRef.current = audio;

    if (isLoaded) {
      setDuration(audio.duration);
    }

    audio.ontimeupdate = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.onended = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, [audio, isLoaded]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (!audioRef.current || hasError) return;

    if (!isLoaded) {
      toast.error("Audio is still loading...");
      return;
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      // Reset to beginning if ended
      if (audioRef.current.currentTime === audioRef.current.duration) {
        audioRef.current.currentTime = 0;
      }

      audioRef.current.play().catch((error) => {
        console.error("Playback error:", error);
        toast.error("Playback failed");
      });
    }

    setIsPlaying(!isPlaying);
  };

  const stop = () => {
    if (!audioRef.current || hasError) return;
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const adjustVolume = (newVolume: number) => {
    setVolume(newVolume);
  };

  return {
    isPlaying,
    duration,
    currentTime,
    volume,
    isLoaded,
    hasError,
    togglePlay,
    stop,
    adjustVolume,
  };
};
