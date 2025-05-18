import { Volume2, VolumeX } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

const Header = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [masterVolume, setMasterVolume] = useState(0.7);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleVolumeToggle = () => {
    setIsMuted(!isMuted);
  };

  return (
    <header
      className={`sticky top-0 z-50 py-4 transition-all duration-300 ${
        scrolled
          ? "bg-sound-bg-dark bg-opacity-90 backdrop-blur-md shadow-md"
          : ""
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent">
            SoundFX Library
          </h1>
        </div>

        <div className="flex items-center space-x-2">
          <Button
            onClick={handleVolumeToggle}
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0"
          >
            {isMuted ? (
              <VolumeX className="h-5 w-5 text-gray-400" />
            ) : (
              <Volume2 className="h-5 w-5 text-gray-400" />
            )}
          </Button>

          <div className="w-32">
            <Slider
              defaultValue={[0.7]}
              max={1}
              step={0.01}
              value={[masterVolume]}
              onValueChange={(newValue) => setMasterVolume(newValue[0])}
              className="h-2"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
