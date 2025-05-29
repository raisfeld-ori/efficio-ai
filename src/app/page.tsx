"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Features from "@/components/features"
import HowItWorks from "@/components/how-it-works"
import UseCases from "@/components/use-cases"
import Testimonials from "@/components/testimonials"
import Pricing from "@/components/pricing"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Initialize GSAP animations
    if (mainRef.current) {
      gsap.fromTo(
        ".section-heading",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".section-heading",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        
        .swiper-pagination-bullet {
          width: 10px !important;
          height: 10px !important;
          background: #cbd5e1 !important;
          opacity: 1 !important;
        }

        .swiper-pagination-bullet-active {
          background: linear-gradient(to right, #3b82f6, #06b6d4) !important;
        }

        .swiper-button-next,
        .swiper-button-prev {
          color: #3b82f6 !important;
        }

        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>

      <div ref={mainRef} className="overflow-x-hidden">
        <Navbar />
        <Hero />
        <Features />
        <HowItWorks />
        <UseCases />
        <Testimonials />
        <Pricing />
        <CTA />
        <Footer />
      </div>
    </>
  )
}
