'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Play, Pause } from 'lucide-react'
import { APP_LINKS } from '@/constants'

export default function ExplainerVideo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isPlaying, setIsPlaying] = useState(false)

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

  const handlePlayToggle = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <section id="how-it-works" className="py-24 bg-gray-900">
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
              🎥 See Cortiq in Action
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Watch how creators go from idea → viral script → published short in minutes.
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cortiq doesn't just write — it predicts what performs.
            </p>
          </motion.div>

          {/* Video Container */}
          <motion.div
            variants={itemVariants}
            className="mt-20 mb-16 flex justify-center w-full"
          >
            <div className="relative">
              {/* Video Container with Tilt Effect */}
              <motion.div
                className="relative w-full max-w-7xl mx-auto px-4"
                style={{
                  width: '90vw',
                  maxWidth: '1200px',
                  transform: `Cortiq(1000px) rotateX(${Math.max(0, -8 + (scrollY * 0.02))}deg) rotateY(${Math.max(0, 4 - (scrollY * 0.01))}deg)`,
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.1s ease-out'
                }}
              >
                {/* Video Frame */}
                <div className="relative bg-white rounded-3xl p-1 shadow-2xl border border-gray-200">
                  {/* Loom Video Embed */}
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden" >
                    <iframe
                        src="https://www.loom.com/embed/82749cb3c84c4a128df20e375c37a664?sid=bf98a452-bc3a-49d9-a53f-0d04adbe489a&hide_owner=true&hide_title=true&hideEmbedTopBar=true"
                        allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </div>
                
                {/* Enhanced shadow for 3D effect */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-blue-600/30 rounded-3xl blur-2xl -z-10"
                  style={{
                    transform: 'translateZ(-15px)',
                    filter: 'blur(30px)',
                    width: '110%',
                    height: '110%',
                    left: '-5%',
                    top: '-5%'
                  }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Bottom Text */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-4"
          >
            <p className="text-gray-300 max-w-2xl mx-auto">
              See how easy it is to get started. Our platform is designed for teams of all sizes, 
              from startups to enterprise organizations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="#"
                className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-medium hover:bg-white/20 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ▶ Play Demo
              </motion.a>
              <motion.a
                href={APP_LINKS.SIGNUP}
                className="inline-flex items-center px-6 py-3 bg-white/10 border border-white/20 text-white rounded-full font-medium hover:bg-white/20 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                target="_blank"
              >
                ✨ Start Creating Smarter Scripts
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
