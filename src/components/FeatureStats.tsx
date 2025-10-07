'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { TrendingUp, Users, Zap, Award } from 'lucide-react'
import { APP_LINKS } from '@/constants'

export default function FeatureStats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    {
      icon: TrendingUp,
      value: '300%',
      label: 'Average ROI Increase',
      description: 'Teams see significant returns within the first quarter',
    },
    {
      icon: Users,
      value: '10K+',
      label: 'Active Users',
      description: 'Growing community of data-driven professionals',
    },
    {
      icon: Zap,
      value: '50%',
      label: 'Faster Decisions',
      description: 'Reduce time-to-insight with real-time analytics',
    },
    {
      icon: Award,
      value: '99.9%',
      label: 'Uptime Guarantee',
      description: 'Enterprise-grade reliability you can count on',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="features" className="py-24 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800">
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
              <TrendingUp className="w-4 h-4 mr-2" />
              Performance Metrics
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Numbers that speak for themselves
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how teams are transforming their business with data-driven insights and measurable results.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative"
                >
                  <div className="relative p-8 bg-gray-800 rounded-3xl shadow-soft border border-gray-700 hover:shadow-large transition-all duration-500 group-hover:-translate-y-3 overflow-hidden">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-primary-600" />
                    </div>

                    {/* Value */}
                    <motion.div
                      className="text-3xl lg:text-4xl font-bold text-white mb-2"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    >
                      {stat.value}
                    </motion.div>

                    {/* Label */}
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {stat.label}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {stat.description}
                    </p>

                    {/* Hover effect background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-blue-900/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                    
                    {/* Animated background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-primary-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 -z-20" />
                    
                    {/* Floating particles effect */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-primary-400 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-500 group-hover:animate-pulse" />
                    <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-primary-300 rounded-full opacity-0 group-hover:opacity-40 transition-all duration-700 delay-100 group-hover:animate-pulse" />
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center pt-8"
          >
            <p className="text-gray-300 mb-6">
              Ready to join thousands of teams already seeing results?
            </p>
            <motion.a
            href={APP_LINKS.SIGNUP}
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold hover:bg-white/20 transition-colors duration-300 shadow-large"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              target="_blank"
            >
              Start Your Free Trial
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
