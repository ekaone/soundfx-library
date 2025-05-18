import { useState } from "react";
import { Volume2, VolumeX, Download } from "lucide-react";
import { SoundEffect } from "@/models/sound-effects";
import { useSoundPlayback } from "@/hooks/use-sound-playback";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import Waveform from "@/components/waveform";
import { toast } from "sonner";

interface SoundCardProps {
  sound: SoundEffect;
}

const SoundCard = ({ sound }: SoundCardProps) => {
  const { isPlaying, duration, currentTime, volume, togglePlay, adjustVolume } =
    useSoundPlayback({
      audioUrl: sound.audioUrl,
    });

  const [isMuted, setIsMuted] = useState(false);

  const handleVolumeToggle = () => {
    if (isMuted) {
      adjustVolume(0.7); // Return to default volume
    } else {
      adjustVolume(0);
    }
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (newVolume: number[]) => {
    adjustVolume(newVolume[0]);
    setIsMuted(newVolume[0] === 0);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };
  const handleDownload = () => {
    // Create an anchor element
    const link = document.createElement("a");
    link.href = sound.audioUrl;
    link.download = sound.name + ".mp3"; // Assuming MP3 format, adjust if needed
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast.success(`Downloading ${sound.name}`);
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="bg-gray-900 rounded-lg p-4 transition-all hover:shadow-md hover:shadow-purple-500/20">
      <div className="flex items-start justify-between mb-2">
        <div>
          <h3 className="font-medium text-white text-lg">{sound.name}</h3>
          <p className="text-gray-400 text-sm">{sound.description}</p>
        </div>
        <span className="px-2 py-1 rounded-full text-xs bg-sound-purple bg-opacity-20 text-sound-purple">
          {sound.category}
        </span>
      </div>

      <div className="my-3 relative">
        <div
          className="absolute bottom-0 left-0 h-full bg-sound-purple/20 rounded-md z-0"
          style={{ width: `${progress}%` }}
        />
        <Waveform
          waveform={sound.waveform}
          isPlaying={isPlaying}
          className="relative z-10"
        />
      </div>

      <div className="flex items-center justify-between mt-2 text-xs text-gray-400">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center space-x-2">
          <Button
            onClick={togglePlay}
            variant="default"
            size="sm"
            className={`h-8 w-20 transition-all hover:bg-purple-500 cursor-pointer ${
              isPlaying ? "bg-purple-500 text-white" : ""
            }`}
          >
            {isPlaying ? "Stop" : "Play"}
          </Button>

          <Button
            onClick={handleVolumeToggle}
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0"
          >
            {isMuted ? (
              <VolumeX className="h-4 w-4 text-gray-400" />
            ) : (
              <Volume2 className="h-4 w-4 text-gray-400" />
            )}
          </Button>

          <div className="w-20">
            <Slider
              defaultValue={[0.7]}
              max={1}
              step={0.01}
              value={[volume]}
              onValueChange={handleVolumeChange}
              className="h-2 bg-purple-500 rounded-full"
            />
          </div>
        </div>

        <div className="flex items-center space-x-1 text-xs text-gray-400">
          <span>{sound.downloads}</span>
          <Button
            onClick={handleDownload}
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0"
          >
            <Download className="h-4 w-4 text-gray-400" />
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-1 mt-3">
        {sound.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 rounded-full bg-sound-bg-dark text-gray-400"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SoundCard;
