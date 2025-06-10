"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import siteContent from "./siteContent.json"

export default function CTA() {
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current.querySelector(".cta-content"),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 },
      )
    }
  }, [])
  const { cta } = siteContent

  return (
    <section ref={ctaRef} className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="cta-content max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {cta.heading}
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-blue-100">
            {cta.description}
          </p>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-medium text-lg shadow-lg"
            >
              {cta.primaryCta}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-medium text-lg"
            >
              {cta.secondaryCta}
            </motion.button>
          </div>

          <p className="mt-8 text-blue-100">{cta.note}</p>
        </div>
      </div>
    </section>
  )
}
