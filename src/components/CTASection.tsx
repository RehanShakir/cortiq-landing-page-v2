'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Download, Users, FileText } from 'lucide-react'
import { APP_LINKS } from '@/constants'

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-600/90 via-blue-700/50 to-primary-700/90" />
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-16"
        >
          {/* Main CTA */}
          <motion.div variants={itemVariants} className="text-center space-y-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              You already have ideas. Now let Cortiq make them viral.
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Join 10,000+ creators who turned their thoughts into millions of views.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href={APP_LINKS.SIGNUP}
                target="_blank"
                className="group inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-colors duration-300 shadow-large"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                ✨ Generate My First Viral Script
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
              <motion.a
                href="#"
                className="group inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full font-semibold text-lg hover:bg-white/30 transition-colors duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                👀 Watch Live Demo
              </motion.a>
            </div>
          </motion.div>

          {/* Resources Section */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Templates */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Free Templates
              </h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Get started quickly with our collection of pre-built templates and dashboards.
              </p>
              <motion.a
                href="#"
                className="inline-flex items-center text-white font-medium hover:text-white/80 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                Browse Templates
                <ArrowRight className="ml-2 w-4 h-4" />
              </motion.a>
            </div>

            {/* Community */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Join Community
              </h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Connect with other users, share insights, and get help from our community.
              </p>
              <motion.a
                href="#"
                className="inline-flex items-center text-white font-medium hover:text-white/80 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                Join Community
                <ArrowRight className="ml-2 w-4 h-4" />
              </motion.a>
            </div>

            {/* Resources */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Download className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Resources
              </h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Access guides, tutorials, and best practices to maximize your success.
              </p>
              <motion.a
                href="#"
                className="inline-flex items-center text-white font-medium hover:text-white/80 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                View Resources
                <ArrowRight className="ml-2 w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">14-day</div>
                <div className="text-white/80">Free Trial</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">No Credit Card</div>
                <div className="text-white/80">Required</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-white/80">Support</div>
              </div>
            </div>

            <div className="text-white/80 text-sm">
              No credit card required. Just pure creativity, amplified by AI.
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
