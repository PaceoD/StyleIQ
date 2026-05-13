"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"

export function Newsletter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <section id="get-started" ref={ref} className="relative">
      <div className="grid lg:grid-cols-2">
        {/* Left - Dark CTA */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-primary text-primary-foreground py-20 lg:py-32 px-6 lg:px-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-primary-foreground/60">
            Get Started Today
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light mt-4 mb-8 leading-tight">
            Join StyleIQ
            <br />
            <span className="italic">& Discover Your Style</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="youremail@example.com"
              required
              className="w-full px-6 py-4 bg-transparent border border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-accent focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="w-full px-6 py-4 bg-accent text-accent-foreground text-sm tracking-[0.2em] uppercase hover:bg-accent/90 transition-colors"
            >
              Get Started Now
            </button>
          </form>

          <p className="mt-8 text-sm text-primary-foreground/60">
            Free to start. No credit card required.
          </p>
        </motion.div>

        {/* Right - Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[400px] lg:h-auto"
        >
          <Image
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80"
            alt="Fashion and beauty products"
            fill
            className="object-cover"
          />
          {/* Floating card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute bottom-8 right-8 bg-card p-6 shadow-xl max-w-[280px]"
          >
            <p className="font-serif text-lg italic mb-2">
              &quot;Shop with Confidence&quot;
            </p>
            <p className="text-sm text-muted-foreground">
              AI-curated recommendations you can trust
            </p>
            {/* Signature */}
            <p className="font-serif text-2xl italic mt-4 text-accent">StyleIQ</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
