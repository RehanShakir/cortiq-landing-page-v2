'use client'

import { useMemo } from 'react'
import { APP_LINKS } from '@/constants'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Star } from 'lucide-react'

interface HeroProps {
  scrollY?: number
}

export default function Hero({ scrollY = 0 }: HeroProps)
{
  // Calculate transform values safely for SSR
  const transformStyle = useMemo(() =>
  {
    const rotateX = Math.max(0, -8 + (scrollY * 0.02))
    const rotateY = Math.max(0, 4 - (scrollY * 0.01))
    return `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }, [scrollY])
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


  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
      },
    },
  }

    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900 pt-20 lg:pt-24">
        {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover transform rotate-6 scale-110"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            {/* Fallback for browsers that don't support video */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-purple-600 to-primary-700" />
          </video>
          
          {/* Video Overlay */}
          <div className="absolute inset-0 bg-black/40" />
          
          {/* Floating Elements */}
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl"
            variants={floatingVariants}
            animate="animate"
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 2 }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 1 }}
          />
        </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full shadow-soft">
              <Star className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-sm font-medium text-white">
              Real data. Real creators. Real results.
            </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-display-2xl font-bold leading-tight">
              <span className="text-white">Turn Ideas Into</span>
              <br />
              <motion.span
                className="bg-gradient-to-r from-primary-400 via-blue-400 to-primary-400 bg-clip-text text-transparent"
                style={{
                  backgroundSize: '200% 200%',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                Viral Scripts in Seconds 🚀
              </motion.span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Stop wasting hours brainstorming hooks and storylines. Cortiq uses AI trained on millions of viral videos to write scroll-stopping YouTube Shorts, TikToks, and Reels that keep viewers hooked till the end.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href={APP_LINKS.LOGIN}
              className="group inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 shadow-soft"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              👉 Generate My First Script
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
            
            <motion.button
              className="group inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 shadow-soft"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              🎬 Watch It Write a Viral Script Live
            </motion.button>
          </motion.div>

          {/* Numbers Row */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8"
          >
            <div className="text-sm text-white">
              <span className="font-semibold text-white">3.2B+</span> total views generated
            </div>
            
            <div className="hidden sm:block w-px h-6 bg-white/30" />
            
            <div className="text-sm text-white">
              <span className="font-semibold text-white">400M+</span> monthly views
            </div>
            
            <div className="hidden sm:block w-px h-6 bg-white/30" />
            
            <div className="text-sm text-white">
              <span className="font-semibold text-white">97%</span> improved retention
            </div>
            
            <div className="hidden sm:block w-px h-6 bg-white/30" />
            
            <div className="text-sm text-white">
              <span className="font-semibold text-white">10x</span> faster creation
            </div>
          </motion.div>

          {/* Loom Video Demo */}
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
                  transform: transformStyle,
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.1s ease-out'
                }}
              >
                {/* Video Frame */}
                <div className="relative bg-white rounded-3xl p-1 shadow-2xl border border-gray-200">
                  {/* Loom Video Embed */}
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden" >
                      <video
                        src="/hero.mp4"
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
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
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
