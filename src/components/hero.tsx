"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(".hero-image", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1, delay: 0.5 })
    }
  }, [])

  return (
    <div ref={heroRef} className="pt-28 pb-20 md:pt-32 md:pb-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              <span className="block">Lorem Ipsum Dolor</span>
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Sit Amet Consectetur Adipiscing
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-full font-medium text-lg shadow-lg"
              >
                Lorem Trial
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 border border-blue-600 px-8 py-3 rounded-full font-medium text-lg"
              >
                Watch Ipsum
              </motion.button>
            </motion.div>
          </div>

          <div className="md:w-1/2 pl-0 md:pl-10">
            <div className="hero-image relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full filter blur-3xl opacity-70"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-100 rounded-full filter blur-3xl opacity-70"></div>
              <img
                src="/logo.png"
                alt="AI Architecture Object Counter"
                className="w-full h-auto rounded-xl shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16"
        >
          <div className="text-center">
            <p className="text-gray-500 text-sm uppercase font-medium">Lorem Trusted</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-4">
              <img src="/placeholder.svg?height=30&width=120" alt="Company 1" className="h-8 opacity-70" />
              <img src="/placeholder.svg?height=30&width=120" alt="Company 2" className="h-8 opacity-70" />
              <img src="/placeholder.svg?height=30&width=120" alt="Company 3" className="h-8 opacity-70" />
              <img src="/placeholder.svg?height=30&width=120" alt="Company 4" className="h-8 opacity-70" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
