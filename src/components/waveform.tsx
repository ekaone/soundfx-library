import { cn } from "@/lib/utils";

interface WaveformProps {
  waveform: number[];
  isPlaying?: boolean;
  className?: string;
}

const Waveform = ({
  waveform,
  isPlaying = false,
  className,
}: WaveformProps) => {
  return (
    <div className={cn("flex items-end h-10 gap-[1px]", className)}>
      {waveform.map((value, index) => (
        <div
          key={index}
          className={cn(
            "bg-purple-500 h-full w-1 mx-[1px] rounded-full transition-all duration-100 ease-in-out",
            isPlaying ? "animate-pulse" : "opacity-70"
          )}
          style={{
            height: `${Math.max(15, value * 100)}%`,
          }}
        />
      ))}
    </div>
  );
};

export default Waveform;
