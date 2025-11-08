import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#technologies", label: "Tech" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0f1117]/95 backdrop-blur-sm border-b border-[#222]">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <div className="text-[#c5f82a] font-bold font-mono">Yogesh()</div>

        {/* Desktop links */}
        <nav className="hidden md:flex gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-gray-200 hover:text-[#c5f82a]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-gray-200"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0f1117] border-t border-[#222]">
          <div className="flex flex-col px-4 py-3 space-y-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-gray-200 py-2 hover:text-[#c5f82a]"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
