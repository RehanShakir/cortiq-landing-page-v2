'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { BarChart3, Database, Shield, Zap, Users, Globe } from 'lucide-react'

export default function PlatformSuite() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      id: 'analytics',
      label: 'Analytics',
      icon: BarChart3,
      title: 'Advanced Analytics Engine',
      description: 'Unlock the power of your data with our sophisticated analytics platform designed for modern businesses.',
      features: [
        'Real-time data processing',
        'Machine learning insights',
        'Custom dashboard creation',
        'Automated reporting',
        'Predictive analytics',
        'Data visualization tools'
      ],
      image: 'Analytics Dashboard Preview'
    },
    {
      id: 'data',
      label: 'Data Management',
      icon: Database,
      title: 'Unified Data Platform',
      description: 'Centralize, clean, and organize your data from multiple sources with our comprehensive data management suite.',
      features: [
        'Data integration hub',
        'ETL/ELT pipelines',
        'Data quality monitoring',
        'Schema management',
        'Data lineage tracking',
        'Automated data cleaning'
      ],
      image: 'Data Management Interface'
    },
    {
      id: 'security',
      label: 'Security',
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description: 'Protect your most valuable asset with bank-level security and compliance features built for enterprise needs.',
      features: [
        'End-to-end encryption',
        'Role-based access control',
        'Audit logging',
        'SOC 2 compliance',
        'GDPR compliance',
        'Multi-factor authentication'
      ],
      image: 'Security Dashboard'
    },
    {
      id: 'automation',
      label: 'Automation',
      icon: Zap,
      title: 'Smart Automation',
      description: 'Streamline workflows and eliminate manual processes with intelligent automation and workflow orchestration.',
      features: [
        'Workflow automation',
        'Smart alerts',
        'Scheduled reports',
        'Auto-scaling',
        'Event-driven triggers',
        'Custom integrations'
      ],
      image: 'Automation Workflow'
    },
    {
      id: 'collaboration',
      label: 'Collaboration',
      icon: Users,
      title: 'Team Collaboration',
      description: 'Enable seamless collaboration across teams with shared workspaces, comments, and real-time updates.',
      features: [
        'Shared workspaces',
        'Real-time collaboration',
        'Comment system',
        'Version control',
        'Team permissions',
        'Activity feeds'
      ],
      image: 'Collaboration Interface'
    },
    {
      id: 'integration',
      label: 'Integrations',
      icon: Globe,
      title: 'Seamless Integrations',
      description: 'Connect with your favorite tools and services through our extensive library of pre-built integrations.',
      features: [
        '300+ integrations',
        'Custom API connectors',
        'Webhook support',
        'Third-party apps',
        'Data synchronization',
        'Real-time sync'
      ],
      image: 'Integration Marketplace'
    }
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
    <section id="platform" className="py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800">
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
              <Zap className="w-4 h-4 mr-2" />
              Platform Suite
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Everything you need in one platform
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive suite of tools and features designed to transform how you work with data and make decisions.
            </p>
          </motion.div>

          {/* Tabs */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2">
            {tabs.map((tab, index) => {
              const IconComponent = tab.icon
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(index)}
                  className={`relative flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-500 overflow-hidden ${
                    activeTab === index
                      ? 'bg-primary-600 text-white shadow-soft'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{tab.label}</span>
                  
                  {/* Hover shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                </motion.button>
              )
            })}
          </motion.div>

          {/* Tab Content */}
          <motion.div variants={itemVariants} className="min-h-[600px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ 
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                {/* Content */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-4">
                      {tabs[activeTab].title}
                    </h3>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {tabs[activeTab].description}
                    </p>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {tabs[activeTab].features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="pt-4"
                  >
                    <motion.a
                      href="#"
                      className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                    </motion.a>
                  </motion.div>
                </div>

                {/* Image/Preview */}
                <div className="relative">
                  <div className="relative bg-gradient-to-br from-gray-800 to-gray-700 rounded-3xl p-8 shadow-large">
                    <div className="aspect-video bg-gray-900 rounded-2xl shadow-soft flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-primary-900/30 rounded-2xl flex items-center justify-center mx-auto">
                          {(() => {
                            const IconComponent = tabs[activeTab].icon
                            return <IconComponent className="w-8 h-8 text-primary-400" />
                          })()}
                        </div>
                        <div>
                          <p className="font-semibold text-white">{tabs[activeTab].image}</p>
                          <p className="text-sm text-gray-400">Interactive Preview</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-200/30 rounded-full blur-xl" />
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-200/30 rounded-full blur-xl" />
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
