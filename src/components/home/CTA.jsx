import React, { useEffect, useRef } from 'react'
import { Plane, Sparkles, PhoneCall } from 'lucide-react'
import Button from '../common/Button'
import { gsap } from '../../lib/gsap'

export default function CTA() {
  const ctaRef = useRef(null)
  const planeRef = useRef(null)

  useEffect(() => {
    const el = ctaRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      if (planeRef.current) {
        gsap.to(planeRef.current, {
          x: 40,
          y: -30,
          rotate: 10,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
      }
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={ctaRef} className="relative py-12 md:py-20 bg-white overflow-hidden" id="cta">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Banner padding p-6 md:p-10 lg:p-12 kar di taake height kam ho jaye */}
        <div className="relative rounded-3xl md:rounded-[2.5rem] bg-gradient-to-r from-[#fa9c24] via-[#fa9c24] to-[#015fc9] p-6 md:p-10 lg:p-12 text-white shadow-2xl shadow-[#fa9c24]/25 border border-white/30 overflow-hidden">
          
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-white/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-black/15 rounded-full blur-3xl pointer-events-none" />
          
          <div
            ref={planeRef}
            className="absolute top-8 right-8 lg:right-16 text-white/25 pointer-events-none select-none hidden sm:block"
          >
            <Plane className="w-36 h-36 md:w-48 md:h-48 rotate-[25deg]" />
          </div>

          <div className="relative z-10 max-w-2xl space-y-4">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-[11px] sm:text-xs font-bold uppercase tracking-widest text-white border border-white/30">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              Start Your Journey Today
            </div>

            {/* Heading font size thoda compact kiya */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
              Let's go, so pack your bags{' '}
              <span className="font-serif italic font-normal text-amber-100 block sm:inline">
                For Exciting Trip!
              </span>
            </h2>

            <p className="text-sm sm:text-base text-white/95 font-medium leading-relaxed max-w-xl">
              Unlock exclusive luxury travel deals across Dubai, Abu Dhabi, Maldives, and Europe. Contact our 24/7 concierges now for custom itineraries!
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                className="bg-[#1d343e] hover:bg-[#14262e] text-white font-semibold px-6 py-3 rounded-full text-sm sm:text-base tracking-wide shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
              >
                Discover More
              </button>

              <a
                href="tel:+97143987654"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm sm:text-base font-bold bg-white/10 hover:bg-white text-white hover:text-[#1d343e] backdrop-blur-md border border-white/30 transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                <PhoneCall className="w-4 h-4 text-amber-300" />
                <span>+971 4 398 7654</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}