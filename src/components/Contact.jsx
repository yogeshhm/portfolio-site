import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-[70vh] bg-[#1b1c22] text-gray-200 flex flex-col items-center justify-center py-16 px-8" tyle={{ scrollMarginTop: "64px" }}
    >
      <h2 className="text-lg font-mono mb-10 text-gray-100">{"Contact () "}</h2>

      <div className="bg-[#22232a] w-full max-w-2xl rounded-2xl shadow-lg p-8">
        <p className="text-gray-300 mb-6 leading-relaxed text-center">
          🚀 Open to work — Immediate joiner, actively seeking exciting opportunities in web development.
        </p>

        <div className="space-y-6">
          {/* Email */}
          <div className="flex items-center gap-4 bg-[#2b2d35] p-4 rounded-xl hover:bg-[#30323b] transition-colors">
            <Mail className="text-[#c5f82a] text-3xl" />
            <div>
              <h3 className="text-[#c5f82a] font-semibold text-sm">Mail</h3>
              <a
                href="mailto:yogeshhm22@gmail.com"
                className="text-gray-300 hover:text-white text-sm"
              >
                yogeshhm22@gmail.com
              </a>
            </div>
          </div>

          {/* GitHub */}
          <div className="flex items-center gap-4 bg-[#2b2d35] p-4 rounded-xl hover:bg-[#30323b] transition-colors">
            <Github className="text-[#c5f82a] text-3xl" />
            <div>
              <a
                href="https://github.com/yogeshhm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white text-sm"
              >
              <h3 className="text-[#c5f82a] font-semibold text-sm">GitHub</h3>
        
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-4 bg-[#2b2d35] p-4 rounded-xl hover:bg-[#30323b] transition-colors">
            <Linkedin className="text-[#c5f82a] text-3xl" />
            <div>
              <a
                href="https://www.linkedin.com/in/yogeshhm/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white text-sm"
              >
              <h3 className="text-[#c5f82a] font-semibold text-sm">LinkedIn</h3>
        
              </a>
            </div>
          </div>
        </div>
      </div>

      <p className="text-[#a6ff00] font-mono text-sm mt-8">#open_to_connect</p>
    </section>
  );
}
