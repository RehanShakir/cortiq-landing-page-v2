'use client'

import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TrustLogos from '@/components/TrustLogos'
import FeatureStats from '@/components/FeatureStats'
import ExplainerVideo from '@/components/ExplainerVideo'
import ResultsGrid from '@/components/ResultsGrid'
import PlatformSuite from '@/components/PlatformSuite'
import Integrations from '@/components/Integrations'
import RatingsStrip from '@/components/RatingsStrip'
import Testimonials from '@/components/Testimonials'
import SocialProofWall from '@/components/SocialProofWall'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() =>
  {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    function raf(time: number)
    {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Handle scroll for header effect and video tilt
    const handleScroll = () =>
    {
      setIsScrolled(window.scrollY > 50)
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () =>
    {
      window.removeEventListener('scroll', handleScroll)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="min-h-screen">
      <Header isScrolled={isScrolled} />
      <main>
        <Hero scrollY={scrollY} />
        {/* <TrustLogos /> */}
        <FeatureStats />
        <ExplainerVideo />
        <ResultsGrid />
        {/* <PlatformSuite /> */}
        {/* <Integrations /> */}
        {/* <RatingsStrip /> */}
        <Testimonials />
        <SocialProofWall />
        <CTASection />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}
