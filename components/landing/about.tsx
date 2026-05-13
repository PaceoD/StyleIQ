"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80"
                alt="Fashion model in elegant attire"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary -z-10" />
            {/* Floating label */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 left-8 bg-primary text-primary-foreground px-8 py-6"
            >
              <span className="font-serif text-4xl font-light">AI</span>
              <p className="text-xs tracking-widest uppercase mt-1">Powered</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
              StyleIQ Intelligence
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mt-4 mb-8 leading-[1.1] text-balance">
              Making Every Look
              <br />
              <span className="italic">Perfectly Yours</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our advanced AI learns from your preferences, lifestyle, and body type
              to deliver fashion recommendations that feel authentically you. No more
              endless scrolling through options that don&apos;t fit your style — StyleIQ
              curates a wardrobe that evolves with you.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              From everyday essentials to statement pieces, discover how artificial
              intelligence can transform your relationship with fashion, making
              personal styling accessible, intuitive, and genuinely personal.
            </p>
            <Link
              href="#features"
              className="inline-block px-8 py-4 bg-accent text-accent-foreground text-sm tracking-[0.2em] uppercase hover:bg-accent/90 transition-colors"
            >
              Explore Features
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
