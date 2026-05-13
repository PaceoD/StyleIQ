"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Sparkles, Brain, Palette, Shirt, Heart, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI Learning",
    description: "Our algorithm adapts to your evolving taste, becoming smarter with every interaction.",
  },
  {
    icon: Sparkles,
    title: "Style Discovery",
    description: "Uncover new aesthetics that align with your personality and lifestyle preferences.",
  },
  {
    icon: Palette,
    title: "Color Analysis",
    description: "Personalized color recommendations based on your skin tone and preferences.",
  },
  {
    icon: Shirt,
    title: "Outfit Curation",
    description: "Complete looks assembled from your existing wardrobe and new recommendations.",
  },
  {
    icon: Heart,
    title: "Wishlist Intelligence",
    description: "Smart wishlist that tracks price drops and availability of your saved items.",
  },
  {
    icon: TrendingUp,
    title: "Trend Forecasting",
    description: "Stay ahead with AI-predicted trends tailored to your personal style profile.",
  },
]

export function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="features" ref={ref} className="py-24 md:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
            Intelligent Features
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mt-4 text-balance">
            Fashion Meets <span className="italic">Intelligence</span>
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mt-8" />
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-card p-8 hover:shadow-xl transition-all duration-500"
            >
              <div className="w-16 h-16 bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-foreground group-hover:text-accent-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-2xl font-medium mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="font-serif text-2xl italic text-muted-foreground mb-2">
            &quot;Discover the best illuminating fashion intelligence&quot;
          </p>
          <p className="text-sm text-muted-foreground">
            Your personal AI stylist, available 24/7
          </p>
        </motion.div>
      </div>
    </section>
  )
}
