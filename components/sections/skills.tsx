"use client";

import { motion } from "framer-motion";
import skillCategories from "@/data/skills";

// Warna gradient untuk setiap skill
const colorMap: Record<string, string> = {
  "React": "from-cyan-400 to-blue-400",
  "Next.js": "from-gray-500 to-gray-700",
  "TypeScript": "from-blue-500 to-blue-700",
  "Laravel": "from-red-500 to-amber-500",
  "PHP": "from-purple-400 to-indigo-400",
  "MySQL": "from-blue-400 to-indigo-400",
  "Git": "from-red-400 to-orange-400",
  "GitHub": "from-slate-600 to-slate-900",
  "REST API": "from-teal-400 to-cyan-500",
  "Figma": "from-purple-400 to-pink-400",
  "Canva": "from-cyan-400 to-blue-500",
  "Flutter": "from-blue-400 to-sky-400",
  "Kotlin": "from-purple-400 to-pink-400",
  "JavaScript": "from-yellow-400 to-amber-400",
  "CSS": "from-blue-400 to-indigo-400",
  "HTML": "from-orange-400 to-red-400",
};

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden px-6 md:px-12 lg:px-20 py-20 md:py-24">
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
              Skills
            </p>
          </div>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-gray-800 md:text-4xl">
            Skillset
          </h2>

          <p className="mt-2 max-w-2xl text-base text-gray-500">
            Technologies and design tools I use to build modern web, mobile, and visual experiences.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              className="rounded-3xl border border-indigo-100/50 bg-white/70 p-6 shadow-lg shadow-indigo-100/40 backdrop-blur-xl"
            >
              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-[2px] text-indigo-500">
                  {category.title}
                </p>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {category.skills.map((skill, index) => {
                  const gradientColor = colorMap[skill] || "from-indigo-400 to-purple-400";
                  return (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.04, duration: 0.45 }}
                      className="group relative overflow-hidden rounded-2xl bg-white/80 px-3 py-3 text-center backdrop-blur-sm shadow-sm shadow-indigo-100/20 border border-indigo-100/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-indigo-200/30"
                    >
                      <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-r from-indigo-200/20 to-purple-200/20 blur-2xl transition-all duration-500 group-hover:scale-125"></div>
                      <div className="relative">
                        <h3 className={`text-sm font-medium bg-gradient-to-r ${gradientColor} bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105`}>
                          {skill}
                        </h3>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}