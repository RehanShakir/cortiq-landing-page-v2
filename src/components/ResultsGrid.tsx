'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { BarChart3, TrendingUp, Target, Clock, Users, Zap } from 'lucide-react'
import { APP_LINKS } from '@/constants'

export default function ResultsGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const results = [
    {
      icon: BarChart3,
      title: '🧠 AI-Driven Story Engine',
      description: 'Understands pacing, emotional arcs, and hook-to-reward timing like a real storyteller.',
      metric: '97%',
      metricLabel: 'Retention Rate',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: TrendingUp,
      title: '✍️ Hook Generator',
      description: 'Get irresistible openings proven to make viewers stop scrolling.',
      metric: '3.2B+',
      metricLabel: 'Views Generated',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Target,
      title: '🎭 Emotion Layering',
      description: 'Adds conflict, curiosity, and empathy to your stories — no generic AI fluff.',
      metric: '10x',
      metricLabel: 'Faster Creation',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Clock,
      title: '📊 Performance Predictor',
      description: 'See the estimated retention rate before you even post.',
      metric: '400M+',
      metricLabel: 'Monthly Views',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Users,
      title: '🕒 Instant Script Drafts',
      description: 'From raw idea to finished voice-over-ready script in under 60 seconds.',
      metric: '60s',
      metricLabel: 'Script Draft',
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: Zap,
      title: '💡 Creator Templates',
      description: 'Built-in styles for storytelling, reaction, educational, emotional, and Reddit-style formats.',
      metric: '5+',
      metricLabel: 'Templates',
      color: 'from-indigo-500 to-indigo-600',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section id="results" className="py-24 bg-gray-800">
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
              📈 Results You Can Measure
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Measurable growth across every channel
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Feature Highlights:
            </p>
          </motion.div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {results.map((result, index) => {
              const IconComponent = result.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative"
                >
                  <div className="relative p-8 bg-gray-900 rounded-3xl shadow-soft border border-gray-700 hover:shadow-large transition-all duration-500 group-hover:-translate-y-3 h-full overflow-hidden">
                    {/* Icon with gradient background */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${result.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3">
                      {result.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {result.description}
                    </p>

                    {/* Metric */}
                    <div className="flex items-end justify-between">
                      <div>
                        <motion.div
                          className="text-3xl font-bold text-white"
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                          transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                        >
                          {result.metric}
                        </motion.div>
                        <div className="text-sm font-medium text-gray-400">
                          {result.metricLabel}
                        </div>
                      </div>

                      {/* Progress indicator */}
                      <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center group-hover:bg-primary-800 transition-colors duration-300">
                        <motion.div
                          className="w-6 h-6 rounded-full bg-primary-600"
                          initial={{ scale: 0 }}
                          animate={isInView ? { scale: 1 } : { scale: 0 }}
                          transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
                        />
                      </div>
                    </div>

                    {/* Hover effect background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${result.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`} />
                    
                    {/* Animated border */}
                    <div className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary-500/30 transition-all duration-500`} />
                    
                    {/* Floating glow effect */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-400/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10" />
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
            <div className="bg-gray-900 rounded-3xl p-8 shadow-soft border border-gray-700 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to see these results for yourself?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Join thousands of teams already using our platform to transform their data into actionable insights.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href={APP_LINKS.SIGNUP}
                  className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold hover:bg-white/20 transition-colors duration-300 shadow-large"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  target="_blank"
                >
                  ✨ Start Creating Smarter Scripts
                </motion.a>
                {/* <motion.a
                  href="#"
                  className="inline-flex items-center px-8 py-4 bg-white/10 border border-white/20 text-white rounded-full font-semibold hover:bg-white/20 transition-colors duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Case Studies
                </motion.a> */}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
