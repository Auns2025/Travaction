import React, { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap, ScrollTrigger } from '../lib/gsap'

// Component Imports
import Header from '../components/layout/Header'
import Hero from '../components/home/Hero'
import Destinations from '../components/home/Destinations'
import About from '../components/home/About'
import Stats from '../components/home/Stats'
import Partners from '../components/home/Partners'
import Packages from '../components/home/Packages'
import AlsoVisit from '../components/home/AlsoVisit'
import Testimonials from '../components/home/Testimonials'
import WhyChooseUs from '../components/home/WhyChooseUs'
import CTA from '../components/home/CTA'
import Footer from '../components/layout/Footer'

// Common Accessories
import Preloader from '../components/common/Preloader'
import ScrollProgress from '../components/common/ScrollProgress'

export default function Home() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    })

    lenis.on('scroll', ScrollTrigger.update)

    const updateLenis = (time) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(updateLenis)
    gsap.ticker.lagSmoothing(0)

    // Trigger ScrollTrigger refresh after Lenis initialization
    const timer = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 250)

    const handleLoad = () => {
      ScrollTrigger.refresh()
    }

    window.addEventListener('load', handleLoad)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('load', handleLoad)
      gsap.ticker.remove(updateLenis)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-[#f8fafc] text-dark overflow-hidden font-sans">
      {/* Interactive Global Accessories */}
      <Preloader />
      <ScrollProgress />

      {/* Header */}
      <Header />

      {/* Main Content Sections in Prompt Order */}
      <main className="relative z-10">
        <Hero />
        <Destinations />
        <About />
        <Stats />
        <Partners />
        <Packages />
        <AlsoVisit />
        <Testimonials />
        <WhyChooseUs />
        <CTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
