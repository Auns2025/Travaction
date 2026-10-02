import React, { useEffect, useRef } from 'react'
import { Tag, MessageSquare, Zap, Award, Check } from 'lucide-react'
import SectionHeading from '../common/SectionHeading'
import { whyChooseUsData } from '../../data/whyChooseUs'
import { gsap, ScrollTrigger } from '../../lib/gsap'

const iconMap = {
  Tag: Tag,
  MessageSquare: MessageSquare,
  Zap: Zap,
  Award: Award,
}

export default function WhyChooseUs() {
  const sectionRef = useRef(null)
  const cardsRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('.feature-card')
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'back.out(1.2)',
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

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 bg-[#f8fafc] overflow-hidden" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Why Choose Us"
          titlePrefix="The Travacations"
          accentText="Difference"
          description="We blend Arabian hospitality with modern technology to deliver unmatched travel luxury, full price transparency, and round-the-clock personal assistance."
        />

        {/* 4 Feature Items Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14"
        >
          {whyChooseUsData.map((feature) => {
            const IconComp = iconMap[feature.iconName] || Tag

            return (
              <div
                key={feature.id}
                className="feature-card group relative bg-white rounded-3xl p-8 border border-border-light shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-start justify-between"
              >
                {/* Icon in Orange Circle */}
                <div className="w-16 h-16 rounded-full bg-[#fa9c24]/10 flex items-center justify-center text-[#fa9c24] mb-6 transition-transform duration-500 group-hover:rotate-[360deg] group-hover:bg-[#fa9c24] group-hover:text-white shadow-sm">
                  <IconComp className="w-8 h-8" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1d343e] group-hover:text-[#fa9c24] transition-colors">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm text-muted-brown leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border-light w-full flex items-center gap-2 text-xs font-bold text-[#fa9c24]">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Guaranteed Quality</span>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
