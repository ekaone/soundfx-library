
import { useState, useEffect, useRef } from 'react';
import { toast } from "sonner";

interface UseSoundPlaybackProps {
  audioUrl: string;
}

export const useSoundPlayback = ({ audioUrl }: UseSoundPlaybackProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(audioUrl);
    audioRef.current = audio;
    
    audio.onloadedmetadata = () => {
      setDuration(audio.duration);
    };
    
    audio.ontimeupdate = () => {
      setCurrentTime(audio.currentTime);
    };
    
    audio.onended = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };
    
    audio.onerror = () => {
      toast.error("Failed to load audio");
      setIsPlaying(false);
    };
    
    return () => {
      audio.pause();
      audio.src = '';
      audioRef.current = null;
    };
  }, [audioUrl]);
  
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      // Reset to beginning if ended
      if (audioRef.current.currentTime === audioRef.current.duration) {
        audioRef.current.currentTime = 0;
      }
      
      audioRef.current.play()
        .catch(error => {
          console.error('Playback error:', error);
          toast.error("Playback failed");
        });
    }
    
    setIsPlaying(!isPlaying);
  };

  const stop = () => {
    if (!audioRef.current) return;
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
    togglePlay,
    stop,
    adjustVolume
  };
};
