import React from 'react'
import SectionHeading from '../common/SectionHeading'
import { alsoVisitDestinations } from '../../data/destinations'

export default function AlsoVisit() {
  return (
    <section className="relative py-20 md:py-24 bg-[#FFF4EE] overflow-hidden" id="also-visit">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mb-12">
        <SectionHeading
          eyebrow="Global Destinations"
          titlePrefix="Also"
          accentText="Check Out"
          description="Discover otherworldly beaches, ancient heritage wonders, and vibrant metropolitan hubs across Europe, Asia, and Africa."
        />
      </div>

      {/* Horizontal Scroll Snap Container for Mobile & Grid layout for Desktop */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex items-center gap-6 md:gap-8 overflow-x-auto no-scrollbar pb-6 snap-x snap-mandatory lg:grid lg:grid-cols-6 lg:gap-8">
          {alsoVisitDestinations.map((dest) => (
            <div
              key={dest.id}
              className="flex flex-col items-center text-center shrink-0 snap-center group cursor-pointer w-28 md:w-36 lg:w-auto"
            >
              {/* Circular Avatar Container with Rotating Orange Ring */}
              <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full p-1 transition-transform duration-500 group-hover:scale-110">
                
                {/* Rotating Gradient Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/40 group-hover:border-primary transition-all duration-700 group-hover:rotate-180" />

                {/* Inner Image Mask */}
                <div className="relative w-full h-full rounded-full overflow-hidden shadow-md group-hover:shadow-xl">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-dark/10 group-hover:bg-transparent transition-colors" />
                </div>
              </div>

              {/* Destination Label */}
              <h4 className="mt-3 text-sm font-bold text-dark group-hover:text-primary transition-colors">
                {dest.name}
              </h4>
              <span className="text-xs text-muted-brown font-medium">
                {dest.country}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
