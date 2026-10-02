import React from 'react'
import SectionHeading from '../common/SectionHeading'
import Marquee from '../common/Marquee'
import { partnersData } from '../../data/partners'

export default function Partners() {
  return (
    <section className="relative py-20 md:py-24 bg-[#f8fafc] overflow-hidden" id="partners">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mb-12">
        <SectionHeading
          eyebrow="For Our B2B Partners"
          titlePrefix="Let's Grow"
          accentText="Together"
          description="Empowering global travel agencies, DMCs, and corporate partners with premier GCC ground handling, B2B wholesale tariffs, and instant reservations."
        />
      </div>

      {/* Infinite Flag & Partner Marquee with Real SVG Flags */}
      <div className="relative py-6 bg-white border-y border-border-light shadow-sm">
        <Marquee speed={35}>
          {partnersData.map((partner) => (
            <div
              key={partner.id}
              className="flex items-center gap-3.5 px-6 py-3.5 rounded-2xl bg-white border border-border-light shadow-sm hover:border-[#fa9c24] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer shrink-0"
            >
              {/* Flag Image Container */}
              <div className="w-9 h-6 rounded overflow-hidden shadow-xs border border-black/10 shrink-0 bg-slate-100 flex items-center justify-center">
                <img
                  src={partner.flagUrl}
                  alt={`${partner.country} Flag`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h4 className="text-sm font-bold text-dark">{partner.country}</h4>
                <p className="text-xs text-[#015fc9] font-semibold">{partner.partnerName}</p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Trust Badges Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mt-12 flex flex-wrap items-center justify-center gap-8 text-xs md:text-sm font-semibold text-muted-brown">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500" /> IATA Certified Agent
        </span>
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500" /> Dubai Economy & Tourism Licensed
        </span>
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500" /> 24/7 B2B Concierge Support
        </span>
      </div>
    </section>
  )
}
