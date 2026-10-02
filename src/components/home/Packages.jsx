import React, { useEffect, useRef, useState } from 'react'
import { Clock, Star, MapPin, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react'
import SectionHeading from '../common/SectionHeading'
import Button from '../common/Button'
import { packagesData } from '../../data/packages'
import { gsap, ScrollTrigger } from '../../lib/gsap'

export default function Packages() {
  const sectionRef = useRef(null)
  const cardsRef = useRef(null)
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('.package-card')
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 92%',
              toggleActions: 'play none none none',
            },
          }
        )
      }
    }, el)

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 150)

    return () => {
      clearTimeout(refreshTimer)
      ctx.revert()
    }
  }, [])

  const handleMobileScroll = () => {
    const container = cardsRef.current
    if (!container) return
    const cardWidth = container.children[0]?.offsetWidth || 0
    const scrollPosition = container.scrollLeft
    const newIndex = Math.round(scrollPosition / (cardWidth + 24))
    setActiveSlide(newIndex)
  }

  const scrollSlide = (direction) => {
    const container = cardsRef.current
    if (!container) return
    const cardWidth = container.children[0]?.offsetWidth || 0
    const scrollAmount = (cardWidth + 24) * (direction === 'next' ? 1 : -1)

    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 bg-white overflow-hidden" id="packages">
      {/* Background Decorative Element */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#fa9c24]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Section Heading & Mobile Slider Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeading
            align="left"
            eyebrow="Featured Packages"
            titlePrefix="Hand-crafted"
            accentText="journeys"
            description="Immerse yourself in expertly curated travel itineraries designed with 5-star accommodations, private tours, and exclusive VIP privileges."
          />

          {/* Navigation Arrows for Mobile Slider (< md) */}
          <div className="flex md:hidden items-center justify-between pt-2">
            <div className="flex items-center gap-2">
              {packagesData.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeSlide === idx ? 'w-6 bg-[#fa9c24]' : 'w-2 bg-slate-300'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollSlide('prev')}
                disabled={activeSlide === 0}
                aria-label="Previous package"
                className="w-10 h-10 rounded-full border border-slate-300 bg-white flex items-center justify-center text-slate-800 disabled:opacity-30 disabled:pointer-events-none shadow-sm active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollSlide('next')}
                disabled={activeSlide === packagesData.length - 1}
                aria-label="Next package"
                className="w-10 h-10 rounded-full border border-slate-300 bg-white flex items-center justify-center text-slate-800 disabled:opacity-30 disabled:pointer-events-none shadow-sm active:scale-95"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Package Cards Container: Slider on Small Screens (< md), Grid on Desktop (md+) */}
        <div
          ref={cardsRef}
          onScroll={handleMobileScroll}
          className="flex md:grid overflow-x-auto md:overflow-visible no-scrollbar snap-x snap-mandatory gap-6 md:gap-8 mt-8 md:mt-16 pb-6 md:pb-0 md:grid-cols-2 lg:grid-cols-3 -mx-6 px-6 md:mx-0 md:px-0"
        >
          {packagesData.map((pkg) => (
            <div
              key={pkg.id}
              className="package-card group relative rounded-3xl bg-white border border-border-light shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden flex flex-col hover:border-[#fa9c24]/50 shrink-0 md:shrink w-[84vw] sm:w-[72vw] md:w-auto snap-center"
            >
              {/* Card Image Header */}
              <div className="relative h-60 sm:h-64 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#1d343e]/80 via-transparent to-black/20" />

                {/* Badge */}
                {pkg.badge && (
                  <div className="absolute top-4 left-4 bg-[#fa9c24] text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-md">
                    {pkg.badge}
                  </div>
                )}

                {/* Duration Badge */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-xs font-semibold text-white bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                  <Clock className="w-3.5 h-3.5 text-[#fa9c24]" />
                  {pkg.duration}
                </div>

                {/* Rating */}
                <div className="absolute bottom-4 right-4 flex items-center gap-1 text-xs font-bold text-white bg-[#1d343e]/70 backdrop-blur-md px-2.5 py-1 rounded-full">
                  <Star className="w-3.5 h-3.5 fill-[#fa9c24] text-[#fa9c24]" />
                  <span>{pkg.rating}</span>
                  <span className="text-gray-400">({pkg.reviews})</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-7 flex-1 flex flex-col justify-between space-y-5">
                
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#fa9c24] mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {pkg.location}
                  </div>

                  <h3 className="text-xl font-bold text-[#1d343e] group-hover:text-[#fa9c24] transition-colors leading-snug">
                    {pkg.title}
                  </h3>

                  {/* Highlight Chips */}
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {pkg.highlights.map((chip, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-1.5 text-xs text-muted-brown font-medium bg-[#fff7eb] px-2.5 py-1.5 rounded-lg"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#fa9c24] shrink-0" />
                        <span className="truncate">{chip}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Price & Action */}
                <div className="pt-4 border-t border-border-light flex items-center justify-between">
                  <div>
                    <span className="text-xs text-muted-brown block">Starting From</span>
                    <span className="text-2xl font-extrabold text-[#1d343e] tracking-tight">
                      {pkg.price}
                    </span>
                    <span className="text-xs text-muted-brown"> / person</span>
                  </div>

                  <Button size="sm" variant="primary">
                    Enquire Now
                  </Button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="md:hidden flex items-center justify-center gap-2 mt-2 text-xs font-semibold text-slate-400 uppercase tracking-widest">
          <span>Swipe Packages</span>
        </div>

      </div>
    </section>
  )
}
