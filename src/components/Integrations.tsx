'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Check } from 'lucide-react'

export default function Integrations() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredIntegration, setHoveredIntegration] = useState<string | null>(null)

  const integrations = [
    { name: 'Salesforce', category: 'CRM', logo: 'SF', color: 'bg-blue-500' },
    { name: 'HubSpot', category: 'Marketing', logo: 'HS', color: 'bg-orange-500' },
    { name: 'Slack', category: 'Communication', logo: 'SL', color: 'bg-purple-500' },
    { name: 'Google Analytics', category: 'Analytics', logo: 'GA', color: 'bg-green-500' },
    { name: 'Stripe', category: 'Payments', logo: 'ST', color: 'bg-indigo-500' },
    { name: 'Zendesk', category: 'Support', logo: 'ZD', color: 'bg-red-500' },
    { name: 'Shopify', category: 'E-commerce', logo: 'SH', color: 'bg-green-600' },
    { name: 'Mailchimp', category: 'Email', logo: 'MC', color: 'bg-yellow-500' },
    { name: 'Asana', category: 'Project Management', logo: 'AS', color: 'bg-pink-500' },
    { name: 'GitHub', category: 'Development', logo: 'GH', color: 'bg-gray-800' },
    { name: 'Notion', category: 'Productivity', logo: 'NO', color: 'bg-gray-700' },
    { name: 'Figma', category: 'Design', logo: 'FI', color: 'bg-purple-600' },
    { name: 'Zoom', category: 'Video', logo: 'ZO', color: 'bg-blue-600' },
    { name: 'Dropbox', category: 'Storage', logo: 'DB', color: 'bg-blue-700' },
    { name: 'Trello', category: 'Project Management', logo: 'TR', color: 'bg-blue-500' },
    { name: 'Intercom', category: 'Support', logo: 'IC', color: 'bg-blue-400' },
    { name: 'Mixpanel', category: 'Analytics', logo: 'MP', color: 'bg-purple-500' },
    { name: 'Segment', category: 'Data', logo: 'SG', color: 'bg-green-500' },
    { name: 'Webflow', category: 'Design', logo: 'WF', color: 'bg-blue-500' },
    { name: 'Airtable', category: 'Database', logo: 'AT', color: 'bg-orange-600' },
    { name: 'Monday.com', category: 'Project Management', logo: 'MO', color: 'bg-red-500' },
    { name: 'Calendly', category: 'Scheduling', logo: 'CA', color: 'bg-blue-500' },
    { name: 'Typeform', category: 'Forms', logo: 'TF', color: 'bg-purple-500' },
    { name: 'Canva', category: 'Design', logo: 'CV', color: 'bg-blue-600' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
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
              <Check className="w-4 h-4 mr-2" />
              Integrations
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Connect with your favorite tools
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Seamlessly integrate with 300+ popular apps and services. No coding required.
            </p>
          </motion.div>

          {/* Integrations Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {integrations.map((integration) => (
              <motion.div
                key={integration.name}
                variants={itemVariants}
                className="group relative"
                onMouseEnter={() => setHoveredIntegration(integration.name)}
                onMouseLeave={() => setHoveredIntegration(null)}
              >
                <div className="relative p-4 bg-gray-900 rounded-2xl shadow-soft border border-gray-700 hover:shadow-large transition-all duration-300 group-hover:-translate-y-1 cursor-pointer">
                  {/* Logo */}
                  <div className={`w-12 h-12 ${integration.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white font-bold text-sm">{integration.logo}</span>
                  </div>

                  {/* Name */}
                  <h3 className="text-sm font-semibold text-white mb-1 truncate">
                    {integration.name}
                  </h3>

                  {/* Category */}
                  <p className="text-xs text-gray-400 truncate">
                    {integration.category}
                  </p>

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-purple-900/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </div>

                {/* Tooltip */}
                {hoveredIntegration === integration.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-20"
                  >
                    <div className="bg-gray-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap">
                      {integration.name}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Bottom Section */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-8"
          >
            <div className="bg-gray-900 rounded-3xl p-8 shadow-soft border border-gray-700 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Don&apos;t see your tool? No problem.
              </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We&apos;re constantly adding new integrations. Request one or build your own with our powerful API.
            </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href="#"
                  className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Request Integration
                </motion.a>
                <motion.a
                  href="#"
                  className="inline-flex items-center px-6 py-3 bg-white/10 border border-white/20 text-white rounded-full font-medium hover:bg-white/20 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View API Docs
                </motion.a>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">300+</div>
                <div className="text-sm text-gray-400">Integrations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-sm text-gray-400">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
