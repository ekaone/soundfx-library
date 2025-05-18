export interface SoundEffect {
  id: string;
  name: string;
  description: string;
  category: SoundCategory;
  tags: string[];
  duration: number; // in seconds
  audioUrl: string;
  waveform: number[]; // Values between 0-1 representing the waveform
  createdAt: string;
  featured: boolean;
  downloads: number;
}

export type SoundCategory =
  | "UI"
  | "Notifications"
  | "Transitions"
  | "Buttons"
  | "Success"
  | "Error"
  | "Loading"
  | "Ambient";

export const ALL_CATEGORIES: SoundCategory[] = [
  "UI",
  "Notifications",
  "Transitions",
  "Buttons",
  "Success",
  "Error",
  "Loading",
  "Ambient",
];

export const mockSoundEffects: SoundEffect[] = [
  {
    id: "1",
    name: "Simple Click",
    description: "A clean, crisp button click sound",
    category: "Buttons",
    tags: ["click", "button", "UI", "minimal"],
    duration: 0.8,
    audioUrl: "/sounds/simple_click_button_1.mp3",
    waveform: [0.2, 0.5, 0.8, 0.6, 0.4, 0.3, 0.2, 0.1],
    createdAt: "2023-04-15",
    featured: true,
    downloads: 1245,
  },
  {
    id: "2",
    name: "Success Chime",
    description: "A pleasant notification sound for successful operations",
    category: "Success",
    tags: ["success", "complete", "positive", "chime"],
    duration: 1.5,
    audioUrl:
      "https://assets.mixkit.co/sfx/preview/mixkit-correct-answer-reward-952.mp3",
    waveform: [0.1, 0.3, 0.5, 0.7, 0.9, 0.7, 0.5, 0.3, 0.1],
    createdAt: "2023-04-10",
    featured: true,
    downloads: 983,
  },
  {
    id: "3",
    name: "Error Alert",
    description: "An attention-grabbing error notification sound",
    category: "Error",
    tags: ["error", "alert", "warning", "negative"],
    duration: 1.2,
    audioUrl:
      "https://assets.mixkit.co/sfx/preview/mixkit-wrong-answer-bass-buzzer-948.mp3",
    waveform: [0.5, 0.8, 0.3, 0.7, 0.4, 0.6, 0.2],
    createdAt: "2023-04-05",
    featured: false,
    downloads: 754,
  },
  {
    id: "4",
    name: "Notification Pop",
    description: "A subtle pop sound for notifications",
    category: "Notifications",
    tags: ["notification", "pop", "alert", "subtle"],
    duration: 0.6,
    audioUrl:
      "https://assets.mixkit.co/sfx/preview/mixkit-software-interface-start-2574.mp3",
    waveform: [0.3, 0.6, 0.9, 0.7, 0.5, 0.3, 0.1],
    createdAt: "2023-03-28",
    featured: false,
    downloads: 621,
  },
  {
    id: "5",
    name: "Slide Transition",
    description: "Smooth transition sound for sliding elements",
    category: "Transitions",
    tags: ["transition", "slide", "smooth", "swipe"],
    duration: 1.1,
    audioUrl:
      "https://assets.mixkit.co/sfx/preview/mixkit-fast-small-sweep-transition-166.mp3",
    waveform: [0.1, 0.2, 0.4, 0.6, 0.8, 0.6, 0.4, 0.2, 0.1],
    createdAt: "2023-03-20",
    featured: true,
    downloads: 845,
  },
  {
    id: "6",
    name: "Toggle Switch",
    description: "A satisfying toggle switch sound",
    category: "UI",
    tags: ["toggle", "switch", "UI", "interaction"],
    duration: 0.7,
    audioUrl:
      "https://assets.mixkit.co/sfx/preview/mixkit-fast-simple-click-tone-2566.mp3",
    waveform: [0.4, 0.7, 0.5, 0.3, 0.2, 0.1],
    createdAt: "2023-03-15",
    featured: false,
    downloads: 532,
  },
  {
    id: "7",
    name: "Loading Loop",
    description: "A loopable sound for loading states",
    category: "Loading",
    tags: ["loading", "loop", "wait", "process"],
    duration: 2.5,
    audioUrl:
      "https://assets.mixkit.co/sfx/preview/mixkit-game-ball-tap-2073.mp3",
    waveform: [0.2, 0.4, 0.6, 0.5, 0.3, 0.5, 0.7, 0.6, 0.4, 0.2],
    createdAt: "2023-03-10",
    featured: false,
    downloads: 487,
  },
  {
    id: "8",
    name: "Ambient Hum",
    description: "Subtle background ambient sound",
    category: "Ambient",
    tags: ["ambient", "background", "subtle", "atmosphere"],
    duration: 4.0,
    audioUrl:
      "https://assets.mixkit.co/sfx/preview/mixkit-game-flute-bonus-2313.mp3",
    waveform: [0.3, 0.4, 0.5, 0.4, 0.3, 0.4, 0.5, 0.6, 0.5, 0.4, 0.3],
    createdAt: "2023-03-05",
    featured: true,
    downloads: 692,
  },
  {
    id: "9",
    name: "Quick Tap",
    description: "A quick tap sound for touch interactions",
    category: "UI",
    tags: ["tap", "touch", "quick", "interaction"],
    duration: 0.5,
    audioUrl:
      "https://assets.mixkit.co/sfx/preview/mixkit-video-game-retro-click-237.mp3",
    waveform: [0.6, 0.8, 0.4, 0.2, 0.1],
    createdAt: "2023-02-28",
    featured: false,
    downloads: 523,
  },
  {
    id: "10",
    name: "Message Received",
    description: "A cheerful notification for incoming messages",
    category: "Notifications",
    tags: ["message", "notification", "cheerful", "alert"],
    duration: 1.3,
    audioUrl:
      "https://assets.mixkit.co/sfx/preview/mixkit-happy-bells-notification-937.mp3",
    waveform: [0.2, 0.5, 0.7, 0.9, 0.8, 0.6, 0.4, 0.2, 0.1],
    createdAt: "2023-02-25",
    featured: true,
    downloads: 876,
  },
  {
    id: "11",
    name: "Hover Effect",
    description: "Subtle sound for hover interactions",
    category: "UI",
    tags: ["hover", "interface", "subtle", "UI"],
    duration: 0.4,
    audioUrl:
      "https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3",
    waveform: [0.3, 0.5, 0.3, 0.1],
    createdAt: "2023-02-20",
    featured: false,
    downloads: 412,
  },
  {
    id: "12",
    name: "App Launch",
    description: "An uplifting sound for app launches",
    category: "Transitions",
    tags: ["launch", "start", "app", "begin"],
    duration: 2.0,
    audioUrl:
      "https://assets.mixkit.co/sfx/preview/mixkit-magic-sweep-game-trophy-257.mp3",
    waveform: [0.1, 0.3, 0.5, 0.7, 0.9, 0.8, 0.6, 0.4, 0.2],
    createdAt: "2023-02-15",
    featured: true,
    downloads: 745,
  },
];
