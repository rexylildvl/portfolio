"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";

import profile from "@/data/profile";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 md:px-12 lg:px-20">
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col-reverse items-center justify-between gap-12 pt-28 pb-12 lg:flex-row lg:gap-16">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 px-3.5 py-1.5 mb-5 shadow-sm shadow-indigo-200/50">
            <Sparkles className="h-3.5 w-3.5 text-indigo-500" />
            <span className="text-xs font-medium text-indigo-700">
              Hello, I'm
            </span>
          </div>

          <h1 className="text-4xl font-black leading-tight text-gray-800 md:text-5xl lg:text-6xl">
            {profile.name}
          </h1>

          <h2 className="mt-3 text-xl font-semibold text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text md:text-2xl">
            {profile.title}
          </h2>

          <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mx-auto lg:mx-0" />

          <p className="mt-6 max-w-lg text-base leading-7 text-gray-600 mx-auto lg:mx-0">
            {profile.description}
          </p>

          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-300/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-300/60"
            >
              View Projects
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.a>

            <motion.a
              href={profile.cv}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 rounded-full border-2 border-indigo-300 bg-white/90 px-6 py-3 text-sm font-semibold text-indigo-600 backdrop-blur-sm transition-all duration-300 hover:border-indigo-400 hover:bg-indigo-50 hover:shadow-lg hover:shadow-indigo-200/40"
            >
              Download CV
              <Download
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-1"
              />
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex-shrink-0"
        >
          {/* Decorative Rings */}
          <div className="absolute -inset-6 rounded-full border-2 border-indigo-300/40 animate-[spin_20s_linear_infinite]" />
          <div className="absolute -inset-12 rounded-full border-2 border-dashed border-purple-300/40 animate-[spin_30s_linear_infinite_reverse]" />
          <div className="absolute -inset-18 rounded-full border border-pink-200/30 animate-[spin_45s_linear_infinite]" />

          <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-indigo-300/40 via-purple-300/40 to-pink-300/40 blur-3xl" />

          {/* Glow Effect */}
          <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-indigo-400/20 via-purple-400/15 to-pink-400/20 blur-2xl animate-pulse" />

          <div className="relative rounded-full p-1 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 shadow-2xl shadow-purple-300/50">
            <Image
              src={profile.image}
              alt={profile.name}
              width={400}
              height={400}
              priority
              className="relative h-[200px] w-[200px] rounded-full object-cover ring-4 ring-white md:h-[280px] md:w-[280px] lg:h-[320px] lg:w-[320px]"
            />
          </div>

          {/* Decorative Badge */}
          <div className="absolute -bottom-3 -right-3 rounded-full bg-white px-3 py-1.5 shadow-lg shadow-purple-200/60 border border-indigo-100">
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-xs font-medium text-gray-700">
                Available
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}