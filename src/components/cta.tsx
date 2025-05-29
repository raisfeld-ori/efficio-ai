"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"

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

  return (
    <section ref={ctaRef} className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="cta-content max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Architectural Workflow?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-blue-100">
            Join thousands of architects and construction professionals who are saving time and improving accuracy with
            our AI solution.
          </p>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-medium text-lg shadow-lg"
            >
              Start Free 14-Day Trial
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-medium text-lg"
            >
              Schedule Demo
            </motion.button>
          </div>

          <p className="mt-8 text-blue-100">No credit card required. Cancel anytime.</p>
        </div>
      </div>
    </section>
  )
}
