import React, { useEffect, useRef } from 'react'
import SectionHeading from '../common/SectionHeading'
import Button from '../common/Button'
import { Plane, Compass, ShieldCheck, Award } from 'lucide-react'
import { gsap } from '../../lib/gsap'
import balloonsImg from '../../assets/hot_air_balloons.jpg'
import womanImg from '../../assets/woman_walking.jpg'

export default function About() {
  const sectionRef = useRef(null)
  const pathRef = useRef(null)
  const img1Ref = useRef(null)
  const img2Ref = useRef(null)
  const textGroupRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      if (pathRef.current) {
        const pathLength = pathRef.current.getTotalLength()
        gsap.set(pathRef.current, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
        })

        gsap.to(pathRef.current, {
          strokeDashoffset: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top 75%',
            end: 'bottom 40%',
            scrub: 1,
          },
        })
      }

      if (img1Ref.current && img2Ref.current) {
        gsap.to(img1Ref.current, {
          y: -25,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })

        gsap.to(img2Ref.current, {
          y: 25,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
      }

      const paragraphs = textGroupRef.current?.querySelectorAll('p')
      if (paragraphs) {
        gsap.from(paragraphs, {
          y: 20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: textGroupRef.current,
            start: 'top 85%',
          },
        })
      }
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-12 sm:py-16 md:py-24 bg-white overflow-hidden" id="about">
      {/* Flight SVG Dotted Path (Desktop Only) */}
      <svg
        className="absolute top-12 left-10 text-[#015fc9]/30 pointer-events-none z-0 hidden lg:block"
        width="450"
        height="350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={pathRef}
          d="M 20 50 C 150 10, 300 250, 420 180"
          stroke="currentColor"
          strokeWidth="3"
          strokeDasharray="8 8"
        />
        <g transform="translate(425, 155)">
          <Plane className="w-7 h-7 text-[#fa9c24] fill-[#fa9c24]" />
        </g>
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left Text Content Column */}
          <div className="space-y-4 sm:space-y-6">
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              titlePrefix="Our Stories Have"
              accentText="Experience"
              titleSuffix="adventure"
            />

            <div ref={textGroupRef} className="space-y-3 text-muted-brown text-sm sm:text-base leading-relaxed pt-1">
              <p>
                Based in Dubai, <strong className="text-dark">Travacations</strong> crafts bespoke luxury travel experiences—from desert hot-air balloons to private yachts and 5-star global expeditions.
              </p>

              <p>
                Our expert concierges handle every detail to ensure your vacation is seamless, inspiring, and completely unforgettable.
              </p>
            </div>

            {/* Core Pillars - Responsive Grid for Small Screens */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 py-3 border-y border-border-light">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#fa9c24]/10 flex items-center justify-center text-[#fa9c24] shrink-0">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-dark">Expert Guides</h4>
                  <p className="text-[11px] text-muted-brown">Multilingual locals</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#015fc9]/10 flex items-center justify-center text-[#015fc9] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-dark">100% Safe Travel</h4>
                  <p className="text-[11px] text-muted-brown">Fully licensed & insured</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex sm:block justify-start">
              <Button size="md" variant="primary" className="w-full sm:w-auto">
                Discover Our Story
              </Button>
            </div>
          </div>

          {/* Right Overlapping Images Column - Fully Responsive for Mobile (375px+) */}
          <div className="relative h-[320px] xs:h-[360px] sm:h-[460px] md:h-[520px] flex items-center justify-center mt-4 lg:mt-0">
            
            {/* Image 1 */}
            <div
              ref={img1Ref}
              className="absolute top-0 left-0 w-[60%] sm:w-[62%] h-[78%] sm:h-[80%] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border-2 sm:border-4 border-white"
            >
              <img
                src={womanImg}
                alt="Travacations Traveler"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image 2 */}
            <div
              ref={img2Ref}
              className="absolute bottom-0 right-0 w-[56%] sm:w-[58%] h-[74%] sm:h-[75%] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border-2 sm:border-4 border-white z-10"
            >
              <img
                src={balloonsImg}
                alt="Hot Air Balloon Adventure"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Experience Badge - Ultra Compact & Centered for Mobile */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-[#1d343e] text-white px-3.5 py-2.5 sm:px-5 sm:py-3.5 rounded-xl sm:rounded-2xl shadow-2xl border border-white/20 flex items-center gap-2.5 sm:gap-3 glass-card-dark animate-pulse max-w-[90%] whitespace-nowrap">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#fa9c24] flex items-center justify-center text-white shrink-0">
                <Award className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <span className="text-base sm:text-xl font-bold font-serif text-[#fa9c24]">15+</span>
                <p className="text-[10px] sm:text-[11px] text-gray-300 font-medium">Years of Luxury Travel</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}