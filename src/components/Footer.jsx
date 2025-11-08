import React from "react";
import { FaReact } from "react-icons/fa";

/**
 * Footer: compact single-line footer showing "Made with Vite + React • Built by Yogesh • © 2025"
 * - Uses an inline Vite SVG (small) and react-icons for the React logo.
 * - Matches the dark theme and accent color.
 */

export default function Footer() {
  return (
    <footer className="w-full bg-[#0f1117] border-t border-[#26272d] py-4">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-center text-sm text-gray-300">
        <span className="flex items-center gap-2">
          <span className="flex items-center gap-2">
            {/* Vite inline SVG (small, neutral stroke) */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-90"
            >
              <path d="M12 2L22 20H2L12 2Z" fill="#646cff" />
              <path d="M12 8L9 16H15L12 8Z" fill="#8b93ff" />
            </svg>
            <span className="text-gray-200 font-medium">Vite</span>
            <span className="mx-1 text-gray-400">+</span>
            <FaReact className="text-cyan-400" />
            <span className="text-gray-200 font-medium">React</span>
          </span>
        </span>

        <span className="mx-4 text-gray-500">•</span>

        <span className="text-gray-300">
          Built with <span className="text-[#c5f82a] font-medium">Love</span> • © 2025
        </span>
      </div>
    </footer>
  );
}
