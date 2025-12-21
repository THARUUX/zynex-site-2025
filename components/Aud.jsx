"use client";
import { useEffect, useRef, useState } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const fadeInterval = useRef(null);
  const [playing, setPlaying] = useState(false);
  const MAX_VOLUME = 0.2;

  // ---------- Fade In ----------
  const fadeIn = () => {
    if (!audioRef.current) return;

    clearInterval(fadeInterval.current);
    audioRef.current.volume = 0;
    audioRef.current.play();

    fadeInterval.current = setInterval(() => {
      if (audioRef.current.volume < MAX_VOLUME) {
        audioRef.current.volume += 0.02;
      } else {
        audioRef.current.volume = MAX_VOLUME;
        clearInterval(fadeInterval.current);
      }
    }, 100);
  };

  // ---------- Fade Out ----------
  const fadeOut = () => {
    if (!audioRef.current) return;

    clearInterval(fadeInterval.current);

    fadeInterval.current = setInterval(() => {
      if (audioRef.current.volume > 0.02) {
        audioRef.current.volume -= 0.02;
      } else {
        audioRef.current.volume = 0;
        audioRef.current.pause();
        clearInterval(fadeInterval.current);
      }
    }, 100);
  };

  // ---------- Toggle ----------
  const toggleMusic = () => {
    if (playing) {
      fadeOut();
    } else {
      fadeIn();
    }
    setPlaying(!playing);
  };

  // ---------- Auto-play after first interaction ----------
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!playing) {
        fadeIn();
        setPlaying(true);
      }

      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
    };

    window.addEventListener("click", handleFirstInteraction);
    window.addEventListener("keydown", handleFirstInteraction);

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
    };
  }, [playing]);

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/Audio/aud.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 bg-black/70 text-white px-4 py-2 rounded-full backdrop-blur-md"
      >
        {playing ? "🔊 Mute" : "🔇 Play"}
      </button>
    </>
  );
}
