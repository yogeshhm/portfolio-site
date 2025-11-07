import React from "react";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-6 md:px-20 py-5 bg-[#1e1f26] text-white">
      <h1 className="font-bold text-[#c5f82a] text-lg font-mono">Yogesh()</h1>

      <nav className="flex gap-6 font-mono">
        <a href="#hero" className="hover:text-[#c5f82a]">Home</a>
        <a href="#about" className="hover:text-[#c5f82a]">About</a>
        <a href="#technologies" className="hover:text-[#c5f82a]">Tech</a>
        <a href="#projects" className="hover:text-[#c5f82a]">Projects</a>
        <a href="#contact" className="hover:text-[#c5f82a]">Contact</a>
      </nav>
    </header>
  );
}
