"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    quote: "StyleIQ completely transformed how I approach my wardrobe. The AI recommendations are incredibly accurate and have helped me discover styles I never would have tried on my own.",
    author: "Sarah Mitchell",
    location: "New York, USA",
  },
  {
    quote: "Finally, a fashion app that actually understands my style. The personalized curation saves me hours of browsing, and every recommendation feels like it was made just for me.",
    author: "Emma Chen",
    location: "London, UK",
  },
  {
    quote: "The intelligence behind StyleIQ is remarkable. It learns from every interaction and consistently delivers outfit suggestions that match my evolving taste perfectly.",
    author: "Olivia Laurent",
    location: "Paris, France",
  },
]

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" ref={ref} className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-light">
            What Clients Are <span className="italic">Saying</span>
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mt-8" />
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="flex items-center justify-between">
            {/* Prev Button */}
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-card transition-colors shrink-0"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Testimonial Content */}
            <div className="flex-1 mx-8 md:mx-16 text-center min-h-[200px] flex flex-col items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Quote marks */}
                  <div className="text-6xl text-accent/20 font-serif leading-none mb-4">&ldquo;</div>
                  <p className="font-serif text-xl md:text-2xl text-foreground/90 leading-relaxed mb-8 italic">
                    {testimonials[currentIndex].quote}
                  </p>
                  <p className="text-sm tracking-[0.2em] uppercase font-medium">
                    <span className="border-b border-accent pb-1">
                      {testimonials[currentIndex].author}, {testimonials[currentIndex].location}
                    </span>
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next Button */}
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-card transition-colors shrink-0"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-accent w-6"
                    : "bg-border hover:bg-muted-foreground"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
