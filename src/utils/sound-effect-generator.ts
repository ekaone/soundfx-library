const descriptions = [
  "A crisp and subtle interaction sound that provides instant feedback",
  "An elegant and minimalist tone perfect for modern interfaces",
  "A soft and gentle sound that enhances user experience",
  "A clean and professional audio cue for seamless interaction",
  "A smooth and responsive sound that feels natural and intuitive",
  "A delicate and precise audio feedback for precise interactions",
  "A refined and polished sound that adds sophistication",
  "A light and airy tone that maintains user focus",
  "A swift and efficient sound for quick interactions",
  "A balanced and harmonious audio cue for consistent feedback",
];

const tagSets = [
  ["minimal", "modern", "clean", "professional"],
  ["subtle", "soft", "gentle", "smooth"],
  ["crisp", "sharp", "precise", "clear"],
  ["elegant", "refined", "sophisticated", "polished"],
  ["quick", "responsive", "efficient", "fast"],
  ["light", "airy", "delicate", "subtle"],
  ["balanced", "harmonious", "natural", "organic"],
  ["tech", "digital", "modern", "interface"],
  ["simple", "minimalist", "clean", "pure"],
  ["professional", "premium", "quality", "refined"],
];

export function generateRandomSoundProperties() {
  // Random description
  const description =
    descriptions[Math.floor(Math.random() * descriptions.length)];

  // Random tags
  const tags = tagSets[Math.floor(Math.random() * tagSets.length)];

  // Random duration (between 0.1 and 0.5)
  const duration = Number((Math.random() * 0.4 + 0.1).toFixed(2));

  // Random waveform (8 points between 0.1 and 0.9)
  const waveform = Array.from({ length: 8 }, () =>
    Number((Math.random() * 0.8 + 0.1).toFixed(2))
  );

  // Random createdAt date (between April 2025 and December 2025)
  const startDate = new Date("2025-04-01").getTime();
  const endDate = new Date("2025-12-31").getTime();
  const randomDate = new Date(
    startDate + Math.random() * (endDate - startDate)
  );
  const createdAt = randomDate.toISOString().split("T")[0];

  // Random downloads (between 100 and 10000)
  const downloads = Math.floor(Math.random() * 9900) + 100;

  return {
    description,
    tags,
    duration,
    waveform,
    createdAt,
    downloads,
  };
}
