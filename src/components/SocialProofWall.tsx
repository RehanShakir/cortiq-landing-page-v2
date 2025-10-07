'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, MessageCircle, Share2, Twitter } from 'lucide-react'

export default function SocialProofWall() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const socialPosts = [
    {
      author: 'StoryReactor',
      handle: '@StoryReactor',
      avatar: 'SR',
      platform: 'Twitter',
      content: 'Wrote my best-performing script in 45 seconds. 1.2M views in 2 days.',
      likes: 324,
      comments: 89,
      shares: 156,
      time: '2h',
      verified: true,
    },
    {
      author: 'TaleTrailz',
      handle: '@TaleTrailz',
      avatar: 'TT',
      platform: 'Twitter',
      content: 'Feels like having a professional writer who knows what goes viral.',
      likes: 267,
      comments: 45,
      shares: 98,
      time: '4h',
      verified: true,
    },
    {
      author: 'ViralLoop',
      handle: '@ViralLoop',
      avatar: 'VL',
      platform: 'Twitter',
      content: 'My scripts finally sound human again — but better.',
      likes: 189,
      comments: 67,
      shares: 123,
      time: '6h',
      verified: true,
    },
    {
      author: 'ScriptMaster',
      handle: '@ScriptMaster',
      avatar: 'SM',
      platform: 'Twitter',
      content: 'From idea to viral script in under a minute. This is insane! 🔥',
      likes: 456,
      comments: 134,
      shares: 267,
      time: '8h',
      verified: true,
    },
    {
      author: 'ContentCreator',
      handle: '@ContentCreator',
      avatar: 'CC',
      platform: 'Twitter',
      content: 'The AI actually understands pacing and emotional arcs. Mind blown!',
      likes: 298,
      comments: 78,
      shares: 145,
      time: '12h',
      verified: true,
    },
    {
      author: 'ViralGenius',
      handle: '@ViralGenius',
      avatar: 'VG',
      platform: 'Twitter',
      content: 'Finally, an AI that gets what makes content viral. Game changer!',
      likes: 378,
      comments: 112,
      shares: 189,
      time: '1d',
      verified: true,
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
    <section className="py-24 bg-gray-800">
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
              <Twitter className="w-4 h-4 mr-2" />
              💬 Testimonials / Social Proof Section
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              What creators are saying about Cortiq 💜
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real feedback from real creators. See how Cortiq is transforming their content creation process.
            </p>
          </motion.div>

          {/* Social Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialPosts.map((post, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div className="bg-gray-900 rounded-3xl p-6 shadow-soft border border-gray-700 hover:shadow-large transition-all duration-300 group-hover:-translate-y-1">
                  {/* Header */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {post.avatar}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold text-white text-sm">
                          {post.author}
                        </h3>
                        {post.verified && (
                          <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                            <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <p className="text-gray-400 text-xs">
                        {post.handle} · {post.time}
                      </p>
                    </div>
                    <div className="w-6 h-6 text-gray-400">
                      <Twitter className="w-full h-full" />
                    </div>
                  </div>

                  {/* Content */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {post.content}
                  </p>

                  {/* Engagement */}
                  <div className="flex items-center justify-between text-gray-400 text-xs">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-1 hover:text-red-500 transition-colors">
                        <Heart className="w-4 h-4" />
                        <span>{post.likes}</span>
                      </button>
                      <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
                        <MessageCircle className="w-4 h-4" />
                        <span>{post.comments}</span>
                      </button>
                      <button className="flex items-center space-x-1 hover:text-green-500 transition-colors">
                        <Share2 className="w-4 h-4" />
                        <span>{post.shares}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          {/* <motion.div
            variants={itemVariants}
            className="text-center space-y-6"
          >
            <div className="bg-white rounded-3xl p-8 shadow-soft border border-gray-100 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Join the conversation
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Be part of our growing community of data-driven professionals. Share your success stories and connect with others.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href="#"
                  className="inline-flex items-center px-6 py-3  text-black rounded-full font-medium hover:bg-gray-50 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Twitter className="w-4 h-4 mr-2" />
                  Follow Us
                </motion.a>
                <motion.a
                  href="#"
                  className="inline-flex items-center px-6 py-3 bg-white border border-gray-200 rounded-full font-medium hover:bg-gray-50 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ color: '#000000' }}
                >
                  Share Your Story
                </motion.a>
              </div>
            </div>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  )
}
