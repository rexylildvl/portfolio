"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import experiences from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden px-6 md:px-12 lg:px-20 py-20 md:py-24">
      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2.5">
            <span className="inline-flex h-6 w-0.5 rounded-full bg-gradient-to-b from-indigo-400 to-pink-400"></span>
            <p className="text-xs font-mono font-medium uppercase tracking-[3px] text-indigo-500">
              Experience
            </p>
          </div>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-gray-800 md:text-4xl">
            My{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="mt-2 text-base text-gray-500">
            Professional experience and career milestones
          </p>
        </motion.div>

        <div className="relative mt-12">
          {/* Timeline Line */}
          <div className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-indigo-400 via-purple-400 to-pink-400 rounded-full shadow-sm shadow-indigo-200/50" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative flex gap-6"
              >
                {/* Timeline Circle */}
                <div className="relative z-10 mt-1">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-indigo-200 to-purple-200 shadow-lg shadow-indigo-300/50 border-2 border-white">
                    <Briefcase className="h-4 w-4 text-indigo-600" />
                  </div>
                </div>

                {/* Card */}
                <motion.div 
                  className="group flex-1 rounded-2xl bg-white/80 p-5 backdrop-blur-sm shadow-lg shadow-indigo-100/30 border border-indigo-100/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-200/50"
                  whileHover={{ scale: 1.01 }}
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex-1">
                      <h3 className="text-base font-bold tracking-tight text-gray-800">
                        {exp.position}
                      </h3>

                      <div className="mt-1.5 flex flex-wrap items-center gap-3">
                        <p className="text-indigo-600 font-semibold text-sm">
                          {exp.company}
                        </p>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <MapPin className="h-3.5 w-3.5" />
                          <span>{exp.location || "Remote"}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-1.5">
                      <div className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 px-2.5 py-1">
                        <Calendar className="h-3 w-3 text-indigo-500" />
                        <span className="text-xs font-medium text-indigo-700">
                          {exp.year}
                        </span>
                      </div>
                      
                      <span className="rounded-full bg-gradient-to-r from-purple-100 to-pink-100 px-2.5 py-1 text-xs font-medium text-purple-700">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-6 text-gray-600 border-l-2 border-indigo-200 pl-3">
                    {exp.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 px-2.5 py-1 text-xs font-medium text-indigo-600 border border-indigo-100/50 transition-all duration-300 hover:bg-gradient-to-r hover:from-indigo-100 hover:to-purple-100 hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Decorative Line */}
                  <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-indigo-400 to-pink-400 transition-all duration-500 group-hover:w-full"></div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}