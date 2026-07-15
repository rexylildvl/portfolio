"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import socials from "@/data/socials";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-28">
      <div className="relative mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3">
            <span className="inline-flex h-8 w-1 rounded-full bg-gradient-to-b from-indigo-400 to-pink-400"></span>
            <p className="text-sm font-mono font-medium uppercase tracking-[4px] text-indigo-500">
              Contact
            </p>
            <span className="inline-flex h-8 w-1 rounded-full bg-gradient-to-b from-pink-400 to-indigo-400"></span>
          </div>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-gray-800 md:text-5xl">
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Together
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
            I'm always open to internship opportunities, collaborations,
            and exciting software development projects.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <motion.a
            href={socials.email}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="group relative overflow-hidden rounded-2xl bg-white/80 p-8 backdrop-blur-sm shadow-lg shadow-indigo-100/30 border border-indigo-100/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-200/50 hover:-translate-y-1"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-r from-indigo-200/20 to-purple-200/20 blur-2xl transition-all duration-500 group-hover:scale-150"></div>
            
            <div className="relative">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-100 to-purple-100 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-indigo-200/50">
                <Mail className="h-6 w-6 text-indigo-600" />
              </div>
              
              <h3 className="text-base font-semibold text-gray-700">Email</h3>
              <p className="mt-1 text-sm text-gray-400">Send me a message</p>
            </div>
          </motion.a>

          <motion.a
            href={socials.whatsapp}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="group relative overflow-hidden rounded-2xl bg-white/80 p-8 backdrop-blur-sm shadow-lg shadow-indigo-100/30 border border-indigo-100/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-200/50 hover:-translate-y-1"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-r from-purple-200/20 to-pink-200/20 blur-2xl transition-all duration-500 group-hover:scale-150"></div>
            
            <div className="relative">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r from-purple-100 to-pink-100 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-200/50">
                <Phone className="h-6 w-6 text-purple-600" />
              </div>
              
              <h3 className="text-base font-semibold text-gray-700">WhatsApp</h3>
              <p className="mt-1 text-sm text-gray-400">Chat with me</p>
            </div>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="group relative overflow-hidden rounded-2xl bg-white/80 p-8 backdrop-blur-sm shadow-lg shadow-indigo-100/30 border border-indigo-100/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-200/50 hover:-translate-y-1"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-r from-pink-200/20 to-rose-200/20 blur-2xl transition-all duration-500 group-hover:scale-150"></div>
            
            <div className="relative">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r from-pink-100 to-rose-100 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-pink-200/50">
                <MapPin className="h-6 w-6 text-rose-600" />
              </div>
              
              <h3 className="text-base font-semibold text-gray-700">Location</h3>
              <p className="mt-1 text-sm text-gray-400">Indonesia</p>
            </div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-12"
        >
          <a
            href={socials.email}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-8 py-4 text-sm font-medium text-white shadow-lg shadow-indigo-300/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-300/60 hover:-translate-y-0.5"
          >
            <Send className="h-4 w-4" />
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}