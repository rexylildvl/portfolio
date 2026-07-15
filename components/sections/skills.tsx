"use client";

import { motion } from "framer-motion";
import skills from "@/data/skills";

// Warna gradient untuk setiap skill
const colorMap: Record<string, string> = {
  "React": "from-cyan-400 to-blue-400",
  "Next.js": "from-gray-500 to-gray-700",
  "TypeScript": "from-blue-500 to-blue-700",
  "Tailwind CSS": "from-cyan-400 to-teal-400",
  "Node.js": "from-green-400 to-emerald-400",
  "Python": "from-yellow-400 to-orange-400",
  "Java": "from-red-400 to-orange-400",
  "PHP": "from-purple-400 to-indigo-400",
  "MySQL": "from-blue-400 to-indigo-400",
  "PostgreSQL": "from-blue-500 to-sky-500",
  "MongoDB": "from-green-500 to-emerald-500",
  "Firebase": "from-yellow-500 to-orange-500",
  "Docker": "from-blue-400 to-sky-400",
  "AWS": "from-orange-400 to-yellow-400",
  "Linux": "from-yellow-500 to-amber-500",
  "React Native": "from-cyan-400 to-blue-400",
  "Flutter": "from-blue-400 to-sky-400",
  "Kotlin": "from-purple-400 to-pink-400",
  "Swift": "from-red-400 to-orange-400",
  "Figma": "from-purple-400 to-pink-400",
  "JavaScript": "from-yellow-400 to-amber-400",
  "CSS": "from-blue-400 to-indigo-400",
  "HTML": "from-orange-400 to-red-400",
  "Git": "from-red-400 to-orange-400",
  "VSCode": "from-blue-400 to-indigo-400",
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
            Tech{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Stack
            </span>
          </h2>

          <p className="mt-2 max-w-2xl text-base text-gray-500">
            Technologies and tools I use to build modern web and mobile
            applications.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, index) => {
            const gradientColor = colorMap[skill] || "from-indigo-400 to-purple-400";
            
            return (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="group relative overflow-hidden rounded-lg bg-white/80 px-4 py-3 text-center backdrop-blur-sm shadow-md shadow-indigo-100/30 border border-indigo-100/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-200/50"
              >
                {/* Glow Effect */}
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-r from-indigo-200/20 to-purple-200/20 blur-2xl transition-all duration-500 group-hover:scale-150"></div>
                
                <div className="relative">
                  {/* Skill Name with gradient */}
                  <h3 className={`text-sm font-medium bg-gradient-to-r ${gradientColor} bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105`}>
                    {skill}
                  </h3>
                  
                  {/* Decorative Line */}
                  <div className="mt-1.5 h-0.5 w-0 bg-gradient-to-r from-indigo-400 to-pink-400 transition-all duration-500 group-hover:w-full mx-auto"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}