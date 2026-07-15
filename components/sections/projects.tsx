"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import projects from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden px-6 py-28">
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex h-8 w-1 rounded-full bg-gradient-to-b from-indigo-400 to-pink-400"></span>
            <p className="text-sm font-mono font-medium uppercase tracking-[4px] text-indigo-500">
              Portfolio
            </p>
          </div>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-gray-800 md:text-5xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-lg text-gray-500">
            Some of the projects I have developed during internships,
            university assignments, and personal learning.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group overflow-hidden rounded-3xl bg-white/80 backdrop-blur-sm shadow-lg shadow-indigo-100/30 border border-indigo-100/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-xl hover:shadow-indigo-200/50"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold tracking-tight text-gray-800">
                  {project.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600 line-clamp-3">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 px-3.5 py-1.5 text-sm font-medium text-indigo-600 border border-indigo-100/50 transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-indigo-100 hover:to-purple-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3 pt-6 border-t border-indigo-100/50">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 px-4 py-2 text-indigo-600 transition-all duration-300 hover:shadow-md hover:shadow-indigo-200/50"
                    >
                      <FaGithub size={18} />
                      <span className="text-sm font-medium">Code</span>
                    </motion.a>
                  )}

                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2 text-white shadow-md shadow-indigo-200/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-300/50"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm font-medium">Demo</span>
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