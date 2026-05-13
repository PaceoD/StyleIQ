"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const steps = [
  {
    number: "01",
    title: "Create Your Profile",
    description: "Answer a few questions about your style preferences, body type, and lifestyle to help our AI understand you.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80",
  },
  {
    number: "02",
    title: "AI Analysis",
    description: "Our intelligent algorithm analyzes your responses, browsing patterns, and saves to build your unique style DNA.",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80",
  },
  {
    number: "03",
    title: "Personalized Curation",
    description: "Receive daily outfit recommendations, trend alerts, and wardrobe suggestions tailored exclusively for you.",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
  },
]

export function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="how-it-works" ref={ref} className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
            Simple Process
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mt-4 text-balance">
            How <span className="italic">StyleIQ</span> Works
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mt-8" />
        </motion.div>

        {/* Steps */}
        <div className="space-y-20 lg:space-y-32">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Step number overlay */}
                <div className="absolute -top-4 -left-4 lg:-top-8 lg:-left-8 bg-primary text-primary-foreground w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center">
                  <span className="font-serif text-2xl lg:text-4xl font-light">{step.number}</span>
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1 lg:text-right" : ""}>
                <h3 className="font-serif text-3xl md:text-4xl font-light mb-6">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
