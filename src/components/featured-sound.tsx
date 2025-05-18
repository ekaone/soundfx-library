import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SoundEffect } from "@/models/sound-effects";
import { useSoundPlayback } from "@/hooks/use-sound-playback";
import Waveform from "./waveform";

interface FeaturedSoundProps {
  sound: SoundEffect;
}

const FeaturedSound = ({ sound }: FeaturedSoundProps) => {
  const { isPlaying, togglePlay } = useSoundPlayback({
    audioUrl: sound.audioUrl,
  });

  return (
    <div className="bg-gradient-to-br from-[#3a276a] to-[#23364d] rounded-3xl p-10 shadow-2xl relative overflow-hidden group border border-[#2d2e4a]/40">
      <div className="relative z-10">
        <span className="px-4 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-500 to-blue-400 shadow-md text-white mb-6 inline-block tracking-wide glow">
          Featured
        </span>
        <h2 className="text-4xl font-extrabold text-gradient mb-3 drop-shadow-lg">
          {sound.name}
        </h2>
        <p className="text-gray-200 text-lg mb-6 max-w-xl">
          {sound.description}
        </p>
        <div className="flex items-center space-x-6 mb-8">
          <Button
            onClick={togglePlay}
            className="bg-white text-purple-500 hover:bg-gray-100 hover:text-purple-500/90 flex items-center rounded-full shadow-lg px-6 py-2 text-lg font-semibold transition-all duration-150"
          >
            <Play className="mr-2 h-5 w-5" />
            {isPlaying ? "Playing" : "Play"}
          </Button>
          <div className="text-base text-white/80">
            <span className="font-semibold">{sound.downloads}</span> downloads
          </div>
        </div>
        <div className="w-full">
          <Waveform
            waveform={sound.waveform}
            isPlaying={isPlaying}
            className="h-20"
          />
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute -right-24 -bottom-24 w-80 h-80 rounded-full bg-[#3a276a]/30 blur-3xl"></div>
      <div className="absolute -left-24 -top-24 w-64 h-64 rounded-full bg-[#23364d]/30 blur-3xl"></div>
    </div>
  );
};

export default FeaturedSound;
