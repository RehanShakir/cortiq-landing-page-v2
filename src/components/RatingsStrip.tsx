'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Award, Trophy, Medal } from 'lucide-react'

export default function RatingsStrip() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const ratings = [
    {
      icon: Star,
      title: 'G2 Leader',
      description: 'Top-rated analytics platform',
      rating: '4.9/5',
      color: 'from-yellow-400 to-yellow-500',
    },
    {
      icon: Award,
      title: 'Capterra Winner',
      description: 'Best in category 2025',
      rating: '4.8/5',
      color: 'from-blue-400 to-blue-500',
    },
    {
      icon: Trophy,
      title: 'TrustRadius Leader',
      description: 'Most trusted platform',
      rating: '9.2/10',
      color: 'from-green-400 to-green-500',
    },
    {
      icon: Medal,
      title: 'Software Advice',
      description: 'Top performer award',
      rating: '4.7/5',
      color: 'from-purple-400 to-purple-500',
    },
  ]

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
    <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-700 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary-600/90 to-purple-600/90" />
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Recognized by industry leaders
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Our platform has earned top ratings and awards from trusted review platforms and industry experts.
            </p>
          </motion.div>

          {/* Ratings Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {ratings.map((rating, index) => {
              const IconComponent = rating.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative"
                >
                  <div className="relative p-6 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-300 group-hover:-translate-y-2">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${rating.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white mb-2">
                      {rating.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/80 text-sm mb-4">
                      {rating.description}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-white">
                        {rating.rating}
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>

                    {/* Hover effect background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Bottom Stats */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">10,000+</div>
                <div className="text-white/80">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">4.8/5</div>
                <div className="text-white/80">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-white/80">Industry Awards</div>
              </div>
            </div>

            {/* CTA */}
            <motion.a
              href="#"
              className="inline-flex items-center px-8 py-4 bg-white rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-large"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{ color: '#000000' }}
            >
              Join Our Happy Customers
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
