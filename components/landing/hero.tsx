"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
        >
          <source
            src="https://videos.pexels.com/video-files/4499940/4499940-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 border border-white/30 text-white/80 text-xs tracking-[0.3em] uppercase">
            AI-Powered Fashion Intelligence
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-light leading-[1.1] mb-8"
        >
          <span className="italic">Discover</span> Your
          <br />
          <span className="text-accent">Signature Style</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-2xl mx-auto text-white/70 text-lg md:text-xl leading-relaxed mb-12"
        >
          StyleIQ learns your unique preferences and curates personalized fashion
          recommendations that evolve with your taste.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#get-started"
            className="group relative px-10 py-4 bg-accent text-accent-foreground text-sm tracking-[0.2em] uppercase overflow-hidden transition-all hover:shadow-lg hover:shadow-accent/20"
          >
            <span className="relative z-10">Get Started</span>
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            />
          </Link>
          <Link
            href="#how-it-works"
            className="px-10 py-4 border border-white/40 text-white text-sm tracking-[0.2em] uppercase hover:bg-white/10 transition-colors"
          >
            Learn More
          </Link>
        </motion.div>

        {/* Value Props */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16"
        >
          {[
            { label: "Personalized", icon: "✦" },
            { label: "Intelligent", icon: "✦" },
            { label: "Yours", icon: "✦" },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3 text-white/60">
              <span className="text-accent">{item.icon}</span>
              <span className="text-sm tracking-[0.2em] uppercase">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
