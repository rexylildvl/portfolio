"use client";

import { motion } from "framer-motion";
import { Sparkles, GraduationCap, Award, Code, Users } from "lucide-react";
import profile from "@/data/profile";

const stats = [
  {
    value: "3.72",
    label: "GPA",
    icon: Award,
    iconColor: "text-indigo-500",
    bgColor: "from-indigo-100 to-purple-100",
    textColor: "from-indigo-400 to-purple-400",
  },
  {
    value: "10+",
    label: "Projects",
    icon: Code,
    iconColor: "text-purple-500",
    bgColor: "from-purple-100 to-pink-100",
    textColor: "from-purple-400 to-pink-400",
  },
  {
    value: "2",
    label: "Internships",
    icon: Users,
    iconColor: "text-pink-500",
    bgColor: "from-pink-100 to-rose-100",
    textColor: "from-pink-400 to-rose-400",
  },
  {
    value: "2023",
    label: "Since",
    icon: Sparkles,
    iconColor: "text-rose-500",
    bgColor: "from-rose-100 to-orange-100",
    textColor: "from-rose-400 to-orange-400",
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-28">
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
              About Me
            </p>
          </div>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-gray-800 md:text-5xl">
            Get to know{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              me.
            </span>
          </h2>
          <p className="mt-3 text-lg text-gray-500">
            A passionate developer & creative problem solver
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="rounded-3xl bg-white/80 p-8 backdrop-blur-sm shadow-lg shadow-indigo-100/30 border border-indigo-100/50">
              <p className="text-base leading-8 text-gray-600">
                {profile.description}
              </p>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-white to-indigo-50/50 p-8 backdrop-blur-sm shadow-lg shadow-indigo-100/30 border border-indigo-100/50">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-gradient-to-r from-indigo-100 to-purple-100 p-2.5">
                  <GraduationCap className="h-5 w-5 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-gray-800">
                  Education
                </h3>
              </div>

              <div className="mt-6 space-y-3">
                <p className="text-lg font-semibold text-gray-800">
                  {profile.university}
                </p>
                <p className="text-gray-600">
                  Bachelor of Informatics
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-indigo-100/50">
                  <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 px-4 py-1.5">
                    <Award className="h-4 w-4 text-indigo-600" />
                    <span className="text-sm font-semibold text-indigo-700">
                      GPA {profile.gpa}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative overflow-hidden rounded-3xl bg-white/80 p-8 text-center backdrop-blur-sm shadow-lg shadow-indigo-100/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-200/50 border border-indigo-100/50"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-r from-indigo-200/20 to-purple-200/20 blur-2xl transition-all duration-500 group-hover:scale-150"></div>
                
                <div className="relative">
                  <div className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${item.bgColor} transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-indigo-200/50`}>
                    <item.icon className={`h-7 w-7 ${item.iconColor}`} />
                  </div>
                  
                  <h3 className={`text-4xl font-black tracking-tight bg-gradient-to-r ${item.textColor} bg-clip-text text-transparent`}>
                    {item.value}
                  </h3>
                  
                  <p className="mt-2 text-sm font-medium text-gray-500">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}