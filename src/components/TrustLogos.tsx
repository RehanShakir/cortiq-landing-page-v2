'use client'

import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

export default function TrustLogos() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)

  const logos = [
    { name: 'Acme Corp', logo: 'AC' },
    { name: 'TechFlow', logo: 'TF' },
    { name: 'DataSync', logo: 'DS' },
    { name: 'CloudBase', logo: 'CB' },
    { name: 'InnovateLab', logo: 'IL' },
    { name: 'FutureTech', logo: 'FT' },
    { name: 'SmartSys', logo: 'SS' },
    { name: 'NextGen', logo: 'NG' },
    { name: 'ProActive', logo: 'PA' },
    { name: 'EliteSoft', logo: 'ES' },
    { name: 'QuantumTech', logo: 'QT' },
    { name: 'AlphaBeta', logo: 'AB' },
  ]

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.scrollWidth)
      }
    }

    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  return (
    <section className="py-16 bg-gray-900 border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">
            Trusted by leading companies
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            ref={containerRef}
            className="flex space-x-12"
            animate={{
              x: [0, -containerWidth / 2],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 30,
                ease: 'linear',
              },
            }}
          >
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <motion.div
                key={`first-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-32 h-16"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="flex items-center justify-center w-full h-full bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors duration-300">
                  <span className="text-lg font-bold text-gray-300">{logo.logo}</span>
                </div>
              </motion.div>
            ))}

            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <motion.div
                key={`second-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-32 h-16"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="flex items-center justify-center w-full h-full bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors duration-300">
                  <span className="text-lg font-bold text-gray-300">{logo.logo}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  )
}
