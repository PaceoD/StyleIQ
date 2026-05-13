"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Play, X } from "lucide-react"

export function VideoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section ref={ref} className="relative py-0">
      {/* Video Background */}
      <div className="relative h-[70vh] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/3753716/3753716-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/30" />

        {/* Play Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <button
            onClick={() => setIsPlaying(true)}
            className="group relative"
            aria-label="Watch brand video"
          >
            {/* Rotating text circle */}
            <svg
              className="w-40 h-40 animate-spin-slow"
              viewBox="0 0 200 200"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
                />
              </defs>
              <text className="fill-white text-[14px] tracking-[0.3em] uppercase">
                <textPath href="#circlePath" startOffset="0%">
                  Watch Our Brand Video • StyleIQ •
                </textPath>
              </text>
            </svg>
            {/* Center play icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <Play className="w-6 h-6 text-white fill-white ml-1" />
              </div>
            </div>
          </button>
        </motion.div>
      </div>

      {/* Video Modal */}
      {isPlaying && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
        >
          <button
            onClick={() => setIsPlaying(false)}
            className="absolute top-6 right-6 text-white hover:text-accent transition-colors"
            aria-label="Close video"
          >
            <X size={32} />
          </button>
          <div className="w-full max-w-5xl aspect-video">
            <video
              autoPlay
              controls
              className="w-full h-full"
            >
              <source
                src="https://videos.pexels.com/video-files/3753716/3753716-uhd_2560_1440_25fps.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </motion.div>
      )}

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  )
}
