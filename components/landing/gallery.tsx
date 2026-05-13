"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Instagram } from "lucide-react"

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80",
    alt: "Fashion model in urban setting",
    className: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80",
    alt: "Makeup and beauty products",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
    alt: "Two stylish women posing",
    className: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&q=80",
    alt: "Fashion accessories flat lay",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80",
    alt: "Model with elegant styling",
    className: "col-span-1 row-span-2",
  },
]

export function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <h2 className="font-serif text-4xl md:text-5xl font-light">
              Style<span className="italic">IQ</span> Community
            </h2>
            <Instagram className="w-8 h-8 text-muted-foreground" />
          </div>
          <p className="text-muted-foreground">
            Join thousands discovering their signature style
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden group ${image.className}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Follow CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase text-muted-foreground hover:text-accent transition-colors"
          >
            <span>Follow @StyleIQ</span>
            <span className="text-accent">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
