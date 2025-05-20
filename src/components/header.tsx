import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 py-4 transition-all duration-300 ${
        scrolled
          ? "bg-sound-bg-dark bg-opacity-90 backdrop-blur-md shadow-md"
          : ""
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent">
            UI SoundFX Library
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
