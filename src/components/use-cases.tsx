"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function UseCases() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (sectionRef.current) {
      gsap.fromTo(
        ".use-case-title",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
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

  const useCases = [
    {
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/placeholder.svg?height=400&width=600",
      benefits: [
        "Lorem ipsum dolor sit amet",
        "Consectetur adipiscing elit",
        "Sed do eiusmod tempor",
      ],
    },
    {
      title: "Dolor Sit Amet",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/placeholder.svg?height=400&width=600",
      benefits: [
        "Ut enim ad minim veniam",
        "Quis nostrud exercitation",
        "Ullamco laboris nisi ut aliquip",
      ],
    },
    {
      title: "Consectetur Adipiscing",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      image: "/placeholder.svg?height=400&width=600",
      benefits: [
        "Ex ea commodo consequat",
        "Duis aute irure dolor",
        "In reprehenderit in voluptate",
      ],
    },
    {
      title: "Elit Sed Do",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
      image: "/placeholder.svg?height=400&width=600",
      benefits: [
        "Cillum dolore eu fugiat",
        "Nulla pariatur",
        "Excepteur sint occaecat cupidatat",
      ],
    },
  ]

  return (
    <section id="use-cases" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="use-case-title text-3xl md:text-4xl font-bold mb-4 relative">
            Lorem Ipsum Use Cases
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-3 w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded"></div>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </motion.div>

        <div className="mt-12">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="use-cases-swiper"
          >
            {useCases.map((useCase, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={useCase.image || "/placeholder.svg"}
                      alt={useCase.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                    <p className="text-gray-600 mb-4">{useCase.description}</p>
                    <ul className="space-y-2">
                      {useCase.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Lorem ipsum dolor sit amet</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
