'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { APP_LINKS } from '@/constants'

interface HeaderProps {
  isScrolled: boolean
}

export default function Header({ isScrolled }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1280)
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
    setIsMobileMenuOpen(false)
  }

  const navigationItems = [
    {
      label: 'Features',
      href: '#',
      hasDropdown: false,
      onClick: () => scrollToSection('features')
    },
    {
      label: 'How It Works',
      href: '#',
      hasDropdown: false,
      onClick: () => scrollToSection('how-it-works')
    },
    {
      label: 'Results',
      href: '#',
      hasDropdown: false,
      onClick: () => scrollToSection('results')
    },
    {
      label: 'Platform',
      href: '#',
      hasDropdown: false,
      onClick: () => scrollToSection('platform')
    },
    {
      label: 'Testimonials',
      href: '#',
      hasDropdown: false,
      onClick: () => scrollToSection('testimonials')
    },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }


  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-gray-900/95 backdrop-blur-md shadow-soft border-b border-gray-800'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-row items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <a href="#" className="flex items-center">
                <img 
                  src="/logo.png" 
                  alt="Cortiq Logo" 
                  className="h-10 w-auto"
                />
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            {isDesktop && (
              <nav className="flex items-center space-x-1">
                {navigationItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    className="relative group px-4 py-2 rounded-lg transition-all duration-300"
                    onClick={item.onClick}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="relative z-10 text-gray-300 group-hover:text-white font-medium transition-colors duration-300">
                      {item.label}
                    </span>
                    
                    {/* Hover Background */}
                    <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                    
                    {/* Active Indicator */}
                    <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full group-hover:w-4/5 group-hover:left-[10%] transition-all duration-300" />
                    
                    {/* Subtle Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/10 to-primary-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-20" />
                  </motion.button>
                ))}
              </nav>
            )}

            {/* CTA Buttons */}
            {isDesktop && (
              <div className="flex items-center space-x-3 relative z-10">
                <motion.a
                  href={APP_LINKS.LOGIN}
                  className="relative group px-4 py-2 text-gray-300 hover:text-white font-medium transition-all duration-300 rounded-lg"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  target="_blank"
                >
                  <span className="relative z-10">Login</span>
                  <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </motion.a>
                
                <motion.a
                  href={APP_LINKS.SIGNUP}
                  className="relative group px-6 py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full font-semibold overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ zIndex: 60 }}
                >
                  <span className="relative z-10">Try for free</span>
                  
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 -top-1 -bottom-1 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-primary-500/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 scale-110" />
                </motion.a>
              </div>
            )}

            {/* Mobile Menu Button */}
            {!isDesktop && (
              <motion.button
                onClick={toggleMobileMenu}
                className="p-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200"
                aria-label="Toggle mobile menu"
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6 text-white" />
                  ) : (
                    <Menu className="w-6 h-6 text-white" />
                  )}
                </motion.div>
              </motion.button>
            )}
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && !isDesktop && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40"
          >
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={toggleMobileMenu} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-80 bg-gradient-to-b from-gray-900 to-gray-800 shadow-2xl border-l border-gray-700"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
                  <div className="flex items-center">
                    <img 
                      src="/logo.png" 
                      alt="Cortiq Logo" 
                      className="h-8 w-auto"
                    />
                  </div>
                  <button
                    onClick={toggleMobileMenu}
                    className="p-2 rounded-lg hover:bg-gray-700/50 transition-colors duration-200"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                </div>
                
                {/* Navigation */}
                <nav className="flex-1 px-6 py-8 space-y-2">
                  {navigationItems.map((item, index) => (
                    <motion.button
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="w-full text-left px-4 py-3 text-lg font-medium text-gray-300 hover:text-white hover:bg-gray-700/30 rounded-xl transition-all duration-200 flex items-center space-x-3"
                      onClick={item.onClick}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-400 rounded-full"></div>
                      <span>{item.label}</span>
                    </motion.button>
                  ))}
                </nav>

                {/* CTA Section */}
                <div className="p-6 border-t border-gray-700/50 space-y-4 bg-gray-800/30">
                  <a
                    href={APP_LINKS.LOGIN}
                    className="block w-full text-center py-3 text-gray-300 hover:text-white font-medium transition-colors duration-200 border border-gray-600 rounded-xl hover:border-gray-500"
                    onClick={toggleMobileMenu}
                    target="_blank"
                  >
                    Login
                  </a>
                  <motion.a
                    href="#"
                    className="block w-full text-center py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg"
                    onClick={toggleMobileMenu}
                    whileTap={{ scale: 0.98 }}
                    target="_blank"
                  >
                    Try for free
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
