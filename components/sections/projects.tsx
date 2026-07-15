"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import projects from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden px-6 md:px-12 lg:px-20 py-20 md:py-24">
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2.5">
            <span className="inline-flex h-6 w-0.5 rounded-full bg-gradient-to-b from-indigo-400 to-pink-400"></span>
            <p className="text-xs font-mono font-medium uppercase tracking-[3px] text-indigo-500">
              Portfolio
            </p>
          </div>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-gray-800 md:text-4xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mt-2 max-w-2xl text-base text-gray-500">
            Some of the projects I have developed during internships,
            university assignments, and personal learning.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg shadow-indigo-100/30 border border-indigo-100/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-200/50"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-bold tracking-tight text-gray-800">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600 line-clamp-2">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 px-2.5 py-1 text-xs font-medium text-indigo-600 border border-indigo-100/50 transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-indigo-100 hover:to-purple-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-2.5 pt-4 border-t border-indigo-100/50">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 px-3 py-1.5 text-indigo-600 transition-all duration-300 hover:shadow-md hover:shadow-indigo-200/50"
                    >
                      <FaGithub size={14} />
                      <span className="text-xs font-medium">Code</span>
                    </motion.a>
                  )}

                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-3 py-1.5 text-white shadow-md shadow-indigo-200/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-300/50"
                    >
                      <ExternalLink size={14} />
                      <span className="text-xs font-medium">Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}