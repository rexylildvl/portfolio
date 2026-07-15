"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Server, 
  Database, 
  Cloud, 
  Smartphone, 
  Palette,
  Terminal,
  Layers,
  Cpu,
  Globe,
  GitBranch,
  Container,
  CloudCog,
  Monitor,
  Braces
} from "lucide-react";
import skills from "@/data/skills";

// Mapping icon berdasarkan nama skill
const iconMap: Record<string, any> = {
  "React": Code2,
  "Next.js": Layers,
  "TypeScript": Braces,
  "Tailwind CSS": Palette,
  "Node.js": Server,
  "Python": Terminal,
  "Java": Cpu,
  "PHP": Globe,
  "MySQL": Database,
  "PostgreSQL": Database,
  "MongoDB": Database,
  "Firebase": Cloud,
  "Docker": Container,
  "AWS": CloudCog,
  "Linux": Monitor,
  "React Native": Smartphone,
  "Flutter": Smartphone,
  "Kotlin": Cpu,
  "Swift": Cpu,
  "Figma": Palette,
  "JavaScript": Braces,
  "CSS": Palette,
  "HTML": Globe,
  "Git": GitBranch,
  "VSCode": Code2,
};

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
    <section id="skills" className="relative overflow-hidden px-6 py-28">
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
              Skills
            </p>
          </div>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-gray-800 md:text-5xl">
            Tech{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Stack
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-lg text-gray-500">
            Technologies and tools I use to build modern web and mobile
            applications.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, index) => {
            const IconComponent = iconMap[skill];
            const gradientColor = colorMap[skill] || "from-indigo-400 to-purple-400";
            
            return (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="group relative overflow-hidden rounded-2xl bg-white/80 p-6 text-center backdrop-blur-sm shadow-md shadow-indigo-100/30 border border-indigo-100/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-indigo-200/50"
              >
                {/* Glow Effect */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-r from-indigo-200/20 to-purple-200/20 blur-2xl transition-all duration-500 group-hover:scale-150"></div>
                
                <div className="relative">
                  {/* Icon */}
                  {IconComponent && (
                    <div className={`mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r ${gradientColor} bg-opacity-10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-indigo-200/50`}>
                      <IconComponent className={`h-7 w-7 text-transparent bg-gradient-to-r ${gradientColor} bg-clip-text`} />
                    </div>
                  )}
                  
                  {/* Skill Name */}
                  <h3 className="text-sm font-semibold text-gray-700 transition-colors duration-300 group-hover:text-indigo-600">
                    {skill}
                  </h3>
                  
                  {/* Decorative Line */}
                  <div className="mt-2 h-0.5 w-0 bg-gradient-to-r from-indigo-400 to-pink-400 transition-all duration-500 group-hover:w-full mx-auto"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}