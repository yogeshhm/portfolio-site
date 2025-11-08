import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Doctor Appointment System",
      description:
        "A full-stack platform for booking doctor appointments and managing schedules efficiently.",
      github: "https://github.com/yogeshhm/DocEase",
    },
    {
      title: "QR Code Generator",
      description:
        "A Node.js-based tool that generates QR codes instantly for URLs or text input.",
      github: "https://github.com/yogeshhm/QrCodeGenerator",
    },
    {
      title: "Pet Clinic",
      description:
        "A responsive landing page for a veterinary clinic, built using HTML, CSS, and JavaScript.",
      live: "https://yogeshhm.github.io/LeelaPetClinic/",
    },
    {
      title: "Travel Site",
      description:
        "A creative landing page design for a travel agency showcasing destinations and packages.",
      live: "https://yogeshhm.github.io/travelsite/",
    },
    {
      title: "Tic Tac Toe",
      description:
        "A fun and interactive browser-based game built using pure JavaScript and DOM manipulation.",
      live: "https://yogeshhm.github.io/TicTacToe/",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-[80vh] bg-[#1b1c22] text-gray-200 flex flex-col items-center justify-center py-16 px-8"
    >
      <h2 className="text-lg font-mono mb-8 text-gray-100">
        {"Projects ()"} 
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#22232a] rounded-xl p-6 shadow-lg hover:shadow-[#c5f82a]/20 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-[#c5f82a] text-xl font-semibold mb-3">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                {project.description}
              </p>
            </div>

            <div className="flex items-center gap-4 mt-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-[#c5f82a] transition-colors"
                >
                  <FaGithub className="text-lg" /> <span>GitHub</span>
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-[#c5f82a] transition-colors"
                >
                  <FaExternalLinkAlt className="text-sm" /> <span>Live</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
