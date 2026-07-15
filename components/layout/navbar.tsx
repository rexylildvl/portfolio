"use client";

import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const menus = [
  { name: "About", icon: "✦" },
  { name: "Experience", icon: "◈" },
  { name: "Projects", icon: "◆" },
  { name: "Skills", icon: "◇" },
  { name: "Contact", icon: "✧" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
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
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-700 ${
        scrolled
          ? "border-b border-indigo-200/30 bg-white/85 backdrop-blur-xl shadow-xl shadow-indigo-100/20"
          : "bg-white/60 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
        <Link
          href="/"
          className="group relative flex items-center gap-1.5 text-xl font-black tracking-tight transition-all duration-300"
        >
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:scale-105 transition-transform">
            RAIA
          </span>
          <Sparkles className="h-4 w-4 text-indigo-400 group-hover:rotate-180 transition-transform duration-500" />
          <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 transition-all duration-500 group-hover:w-full"></span>
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {menus.map((item) => (
            <li key={item.name}>
              <a
                href={`#${item.name.toLowerCase()}`}
                className="group relative flex items-center gap-1.5 text-xs font-medium text-gray-600 transition-all duration-300 hover:text-indigo-600"
              >
                <span className="text-[10px] text-indigo-300 group-hover:text-indigo-500 transition-colors">
                  {item.icon}
                </span>
                <span className="font-mono tracking-wide">{item.name}</span>
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-indigo-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setOpen(!open)}
            className="group relative rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 p-2 text-indigo-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-200/50 md:hidden"
            aria-label="Toggle menu"
          >
            <div className="relative">
              {open ? (
                <X size={18} className="transition-all duration-300 group-hover:rotate-90" />
              ) : (
                <Menu size={18} className="transition-all duration-300 group-hover:rotate-90" />
              )}
            </div>
          </button>

          <div className="hidden md:flex items-center gap-3">
            <div className="h-5 w-px bg-gradient-to-b from-transparent via-indigo-200 to-transparent"></div>
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-1.5 text-xs font-medium text-white shadow-md shadow-indigo-200/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-300/50"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out md:hidden ${
          open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-indigo-100/30 bg-white/95 backdrop-blur-xl">
          <div className="space-y-0.5 px-3 py-3">
            {menus.map((item, index) => (
              <a
                key={item.name}
                href={`#${item.name.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-xs font-medium text-gray-700 transition-all duration-300 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:pl-5 hover:text-indigo-600"
                style={{
                  animationDelay: `${index * 60}ms`,
                }}
              >
                <span className="text-indigo-300 group-hover:text-indigo-500 transition-colors text-sm">
                  {item.icon}
                </span>
                <span className="font-mono tracking-wide">{item.name}</span>
                <span className="ml-auto text-indigo-200 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
                  →
                </span>
              </a>
            ))}

            <div className="mt-3 px-3 pt-3 border-t border-indigo-100/30">
              <a
                href="#contact"
                className="flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 px-3 py-2.5 text-xs font-medium text-white shadow-md shadow-indigo-200/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-indigo-300/50"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}