"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function Pricing() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (sectionRef.current) {
      gsap.fromTo(
        ".pricing-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
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

  const plans = [
    {
      name: "Starter",
      price: "$99",
      period: "per month",
      description: "Perfect for small architectural firms and individual professionals",
      features: [
        "Up to 10 projects per month",
        "Basic object detection",
        "Standard measurements",
        "Email support",
        "PDF reports",
      ],
      cta: "Start Free Trial",
      popular: false,
      color: "border-gray-200 hover:border-blue-500",
    },
    {
      name: "Professional",
      price: "$249",
      period: "per month",
      description: "Ideal for medium-sized architectural and construction firms",
      features: [
        "Up to 50 projects per month",
        "Advanced object detection",
        "Precise measurements",
        "Priority support",
        "Interactive reports",
        "Team collaboration",
        "API access",
      ],
      cta: "Start Free Trial",
      popular: true,
      color: "border-blue-500 shadow-xl",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "tailored pricing",
      description: "For large architectural firms and construction companies",
      features: [
        "Unlimited projects",
        "Premium object detection",
        "Ultra-precise measurements",
        "24/7 dedicated support",
        "Custom integrations",
        "Advanced analytics",
        "White-labeling options",
        "On-premise deployment",
      ],
      cta: "Contact Sales",
      popular: false,
      color: "border-gray-200 hover:border-blue-500",
    },
  ]

  return (
    <section id="pricing" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading text-3xl md:text-4xl font-bold mb-4 relative">
            Simple, Transparent Pricing
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-3 w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded"></div>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that best fits your architectural needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card relative rounded-xl border-2 ${plan.color} p-8 flex flex-col transition-all duration-300 ${plan.popular ? "transform md:-translate-y-4" : ""}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <div className="mb-8 flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-lg font-medium ${
                  plan.popular
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
                    : "bg-white border-2 border-blue-500 text-blue-600"
                }`}
              >
                {plan.cta}
              </motion.button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Need a custom solution?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-medium text-lg"
          >
            Contact Our Sales Team
          </motion.button>
        </div>
      </div>
    </section>
  )
}
