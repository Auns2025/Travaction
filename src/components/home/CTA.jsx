import React, { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { gsap } from '../../lib/gsap'

export default function CTA() {
  const ctaRef = useRef(null)

  useEffect(() => {
    const el = ctaRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.from('.cta-content', {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
        },
      })
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={ctaRef} className="relative w-full overflow-hidden bg-transparent" id="cta">
      <div className="w-full">
        
        {/* Main Banner Container */}
        <div className="relative overflow-hidden shadow-2xl min-h-[280px] sm:min-h-[320px] md:min-h-[360px] flex items-center w-full bg-[#0b1c24]">
          
          {/* Background Image with absolute path */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
            style={{
              backgroundImage: `url('/images/fjord-sunset.jpg')`,
            }}
          />

          {/* Lighter Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1c24]/70 via-[#0b1c24]/40 to-transparent" />

          {/* Content Wrapper */}
          <div className="relative z-10 w-full px-6 sm:px-10 md:px-16 py-10 md:py-12 grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
            
            {/* Left Side Copy & CTA Buttons */}
            <div className="cta-content lg:col-span-8 space-y-4 max-w-2xl">
              
              {/* Eyebrow with line indicator */}
              <div className="flex items-center gap-3">
                <span className="w-8 h-0.5 bg-[#fa9c24] rounded-full" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#fa9c24]">
                  READY FOR YOUR NEXT ADVENTURE?
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white tracking-tight leading-[1.15]">
                Let's Go, So Pack Your Bags{' '}
                <span className="italic font-normal text-[#fa9c24] block mt-1">
                  for Exciting Trips!
                </span>
              </h2>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed max-w-xl">
                Discover incredible destinations, exclusive deals and unforgettable experiences. Your next adventure is just a click away.
              </p>

              {/* Action Buttons */}
              <div className="pt-1 flex flex-wrap items-center gap-3">
                
                {/* Browse Destinations */}
                <a
                  href="/destinations"
                  className="inline-flex items-center gap-2 bg-[#fa9c24] hover:bg-[#e08b1d] text-white font-semibold px-6 py-3 rounded-full text-xs sm:text-sm shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <span>Browse Destinations</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                {/* Talk to Expert */}
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-transparent hover:bg-white/15 text-white border-2 border-white/70 hover:border-white font-semibold px-6 py-3 rounded-full text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <span>Talk to Expert</span>
                </a>

              </div>

            </div>

            {/* Right Side Decorative Badge */}
            <div className="lg:col-span-4 hidden lg:flex items-center justify-end">
              <div className="relative border-2 border-dashed border-white/40 rounded-full px-8 py-6 text-center transform rotate-[-6deg] bg-white/5 backdrop-blur-xs select-none">
                <span className="font-serif italic text-2xl sm:text-3xl font-normal text-white/90 tracking-wide block drop-shadow-md">
                  Adventure Awaits
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}