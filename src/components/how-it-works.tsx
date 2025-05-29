"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (sectionRef.current) {
      const steps = sectionRef.current.querySelectorAll(".step-item")

      gsap.fromTo(
        steps,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        },
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  const steps = [
    {
      number: "01",
      title: "Upload Your Plans",
      description: "Upload your architectural drawings, blueprints, or 3D models to our secure platform.",
      color: "from-blue-400 to-blue-600",
    },
    {
      number: "02",
      title: "AI Processing",
      description: "Our advanced AI algorithms analyze your plans to identify and count all architectural objects.",
      color: "from-cyan-400 to-cyan-600",
    },
    {
      number: "03",
      title: "Automated Measurements",
      description: "The system automatically calculates dimensions and sizes of all detected objects.",
      color: "from-teal-400 to-teal-600",
    },
    {
      number: "04",
      title: "Review Results",
      description: "Access detailed reports with object counts, measurements, and visual annotations.",
      color: "from-blue-500 to-cyan-500",
    },
  ]

  return (
    <section id="how-it-works" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading text-3xl md:text-4xl font-bold mb-4 relative">
            How It Works
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-3 w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded"></div>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process makes architectural object counting and sizing effortless
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="step-item flex flex-col md:flex-row items-start md:items-center mb-12 last:mb-0"
            >
              <div
                className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-xl mb-4 md:mb-0 md:mr-6`}
              >
                {step.number}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-full font-medium text-lg shadow-lg"
          >
            Try It Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
