'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { APP_LINKS } from '@/constants'

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Head of Data Analytics',
      company: 'TechFlow Inc.',
      avatar: 'SC',
      rating: 5,
      content: 'Cortiq has completely transformed how we approach data analysis. The insights we&apos;ve gained have led to a 40% increase in our operational efficiency.',
      results: '40% efficiency increase'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO',
      company: 'InnovateLab',
      avatar: 'MR',
      rating: 5,
      content: 'The platform&apos;s predictive analytics capabilities are outstanding. We can now forecast trends months in advance and make proactive business decisions.',
      results: '3x faster decision making'
    },
    {
      name: 'Emily Watson',
      role: 'VP of Operations',
      company: 'DataSync Corp.',
      avatar: 'EW',
      rating: 5,
      content: 'Implementation was seamless and the ROI was immediate. Our team was up and running within days, not weeks. The support team is exceptional.',
      results: 'ROI in first month'
    },
    {
      name: 'David Kim',
      role: 'Founder & CEO',
      company: 'CloudBase Solutions',
      avatar: 'DK',
      rating: 5,
      content: 'The automation features have saved us countless hours. What used to take our team days now happens automatically. It&apos;s been a game-changer.',
      results: '80% time savings'
    },
    {
      name: 'Lisa Thompson',
      role: 'Head of Marketing',
      company: 'SmartSys Ltd.',
      avatar: 'LT',
      rating: 5,
      content: 'The real-time dashboards give us the visibility we needed. We can now track campaign performance and adjust strategies on the fly.',
      results: '60% better campaign performance'
    },
    {
      name: 'James Wilson',
      role: 'Data Science Lead',
      company: 'NextGen Analytics',
      avatar: 'JW',
      rating: 5,
      content: 'The machine learning capabilities are impressive. We&apos;ve been able to build models that would have taken months to develop from scratch.',
      results: '5x faster model development'
    }
  ]

  useEffect(() => {
    if (!emblaApi) return

    const updateScrollSnaps = () => {
      setScrollSnaps(emblaApi.scrollSnapList())
    }

    updateScrollSnaps()
    emblaApi.on('select', () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    })
    emblaApi.on('reInit', updateScrollSnaps)

    return () => {
      emblaApi.off('select', () => {})
      emblaApi.off('reInit', updateScrollSnaps)
    }
  }, [emblaApi])

  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-gray-800 via-gray-700 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
              <Star className="w-4 h-4 mr-2" />
              Testimonials
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              What our customers say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don&apos;t just take our word for it. Hear from teams who have transformed their business with our platform.
            </p>
          </motion.div>

          {/* Carousel */}
          <motion.div variants={itemVariants} className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {testimonials.map((testimonial, index) => (
                  <motion.div 
                    key={index} 
                    className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="h-full">
                      <div className="group bg-gray-800 rounded-3xl p-8 h-full flex flex-col hover:bg-gray-750 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 relative overflow-hidden">
                        {/* Rating */}
                        <div className="flex items-center space-x-1 mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>

                        {/* Content */}
                        <blockquote className="text-gray-300 text-lg leading-relaxed mb-6 flex-1">
                          &ldquo;{testimonial.content}&rdquo;
                        </blockquote>

                        {/* Results */}
                        <div className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6 inline-block w-fit">
                          {testimonial.results}
                        </div>

                        {/* Author */}
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm">
                              {testimonial.avatar}
                            </span>
                          </div>
                          <div>
                            <div className="font-semibold text-white">
                              {testimonial.name}
                            </div>
                            <div className="text-sm text-gray-400">
                              {testimonial.role} at {testimonial.company}
                            </div>
                          </div>
                        </div>
                        
                        {/* Hover effects */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-primary-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                        <div className="absolute top-0 right-0 w-16 h-16 bg-primary-400/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-20" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <motion.button
              onClick={scrollPrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800 rounded-full shadow-large border border-gray-700 flex items-center justify-center hover:bg-gray-700 transition-all duration-300 z-10 group"
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:text-primary-400 transition-colors duration-300" />
            </motion.button>
            <motion.button
              onClick={scrollNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800 rounded-full shadow-large border border-gray-700 flex items-center justify-center hover:bg-gray-700 transition-all duration-300 z-10 group"
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:text-primary-400 transition-colors duration-300" />
            </motion.button>
          </motion.div>

          {/* Progress Bar */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="flex space-x-2">
              {scrollSnaps.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === selectedIndex ? 'bg-primary-600' : 'bg-gray-600'
                  }`}
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.8 }}
                  animate={{
                    scale: index === selectedIndex ? 1.2 : 1,
                    opacity: index === selectedIndex ? 1 : 0.6
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-6"
          >
            <h3 className="text-2xl font-bold text-white">
              Ready to join our satisfied customers?
            </h3>
            <p className="text-white max-w-2xl mx-auto">
              Start your free trial today and see why thousands of teams trust us with their data.
            </p>
            <motion.a
             href={APP_LINKS.SIGNUP}
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold hover:bg-white/20 transition-colors duration-300 shadow-large"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              target="_blank"
            >
              Start Free Trial
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
