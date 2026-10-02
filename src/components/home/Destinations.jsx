import React, { useState, useRef, useEffect } from 'react'
import { ArrowRight, Star, MapPin, ChevronLeft, ChevronRight } from 'lucide-react'
import SectionHeading from '../common/SectionHeading'
import { emiratesList, uaeDestinations } from '../../data/destinations'
import { gsap } from '../../lib/gsap'

export default function Destinations() {
  const [activeEmirate, setActiveEmirate] = useState('Dubai')
  const [currentIndex, setCurrentIndex] = useState(0)
  const trackRef = useRef(null)
  const tabRefs = useRef([])
  const pillRef = useRef(null)

  const filteredItems = uaeDestinations.filter(
    (item) => item.emirate.toLowerCase() === activeEmirate.toLowerCase()
  )

  // Reset index on tab change with smooth entrance
  useEffect(() => {
    setCurrentIndex(0)
    if (trackRef.current) {
      gsap.fromTo(
        trackRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: 'power3.out' }
      )
    }
  }, [activeEmirate])

  // Update animated pill indicator under tabs
  useEffect(() => {
    const activeIndex = emiratesList.indexOf(activeEmirate)
    const activeTab = tabRefs.current[activeIndex]
    if (activeTab && pillRef.current) {
      gsap.to(pillRef.current, {
        x: activeTab.offsetLeft,
        width: activeTab.offsetWidth,
        duration: 0.4,
        ease: 'power3.out',
      })
    }
  }, [activeEmirate])

  // Perfectly symmetric GSAP track scroll for both Forward (Next) and Reverse (Prev)
  useEffect(() => {
    const track = trackRef.current
    if (!track || !track.children[0]) return

    const activeCard = track.children[currentIndex]
    if (!activeCard) return

    gsap.to(track, {
      scrollLeft: activeCard.offsetLeft - track.offsetLeft,
      duration: 0.8,
      ease: 'power3.out',
      overwrite: 'auto',
    })
  }, [currentIndex, activeEmirate])

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(filteredItems.length - 1, prev + 1))
  }

  const handleTabChange = (emirate) => {
    if (emirate === activeEmirate) return
    setActiveEmirate(emirate)
  }

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#fff4ee] via-[#fff7eb] to-[#fa9c24]/25 text-slate-900 overflow-hidden" id="destinations">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#fa9c24]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-[#015fc9]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10">
          <SectionHeading
            align="left"
            eyebrow="Cinematic Journey"
            titlePrefix="Places to visit in"
            accentText="UAE Emirates"
            description="Embark on a grand visual tour across Dubai, Abu Dhabi, and the 7 UAE emirates with full-width landscape destinations."
          />

          {/* Controls: Counter & Prev/Next Arrows */}
          <div className="flex items-center gap-6 shrink-0">
            <div className="text-sm font-mono tracking-widest text-[#fa9c24]">
              <span className="text-2xl font-bold text-slate-900">
                {String(currentIndex + 1).padStart(2, '0')}
              </span>
              <span className="text-gray-400 mx-1">/</span>
              <span className="text-gray-500">
                {String(filteredItems.length).padStart(2, '0')}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handlePrev}
                disabled={currentIndex === 0}
                aria-label="Previous destination"
                className="w-12 h-12 rounded-full border border-slate-300 bg-white/80 backdrop-blur-md flex items-center justify-center text-slate-800 hover:bg-[#fa9c24] hover:text-white hover:border-[#fa9c24] disabled:opacity-30 disabled:pointer-events-none transition-all duration-300 cursor-pointer shadow-md active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={currentIndex === filteredItems.length - 1}
                aria-label="Next destination"
                className="w-12 h-12 rounded-full border border-slate-300 bg-white/80 backdrop-blur-md flex items-center justify-center text-slate-800 hover:bg-[#fa9c24] hover:text-white hover:border-[#fa9c24] disabled:opacity-30 disabled:pointer-events-none transition-all duration-300 cursor-pointer shadow-lg active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Emirates Filter Tabs */}
        <div className="relative mb-12">
          <div className="relative inline-flex items-center gap-1 sm:gap-2 p-1.5 bg-white/90 backdrop-blur-md rounded-full border border-slate-300/60 overflow-x-auto no-scrollbar max-w-full shadow-sm">
            <div
              ref={pillRef}
              className="absolute top-1.5 bottom-1.5 bg-[#fa9c24] rounded-full shadow-md shadow-[#fa9c24]/30 z-0 pointer-events-none"
            />

            {emiratesList.map((emirate, idx) => {
              const isActive = activeEmirate === emirate
              return (
                <button
                  key={emirate}
                  ref={(el) => (tabRefs.current[idx] = el)}
                  onClick={() => handleTabChange(emirate)}
                  className={`relative z-10 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-colors duration-300 whitespace-nowrap cursor-pointer ${
                    isActive ? 'text-white' : 'text-slate-700 hover:text-slate-900'
                  }`}
                >
                  {emirate}
                </button>
              )
            })}
          </div>
        </div>

      </div>

      {/* Full Width Slider Matching the Red Boxes Image Sizing (Active Card: 70% width, Next Card: 26% width) */}
      <div className="w-full pl-6 md:pl-12 lg:pl-16 relative z-10">
        <div
          ref={trackRef}
          className="flex items-center gap-6 overflow-x-auto no-scrollbar pb-8 pr-12 md:pr-24"
        >
          {filteredItems.map((item, index) => {
            const isActiveCard = index === currentIndex

            return (
              <div
                key={item.id}
                onClick={() => setCurrentIndex(index)}
                style={{
                  transition: 'width 0.8s cubic-bezier(0.215, 0.61, 0.355, 1), opacity 0.8s cubic-bezier(0.215, 0.61, 0.355, 1)',
                }}
                className={`shrink-0 relative rounded-3xl md:rounded-[2.2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.55)] border border-white/20 cursor-pointer select-none group transform-gpu backface-hidden translate-z-0 h-[56vh] sm:h-[62vh] md:h-[68vh] ${
                  isActiveCard
                    ? 'w-[75vw] sm:w-[70vw] md:w-[66vw] lg:w-[64vw] ring-2 ring-[#fa9c24] opacity-100 z-20'
                    : 'w-[40vw] sm:w-[32vw] md:w-[28vw] lg:w-[25vw] opacity-75 hover:opacity-95 z-10'
                }`}
              >
                {/* Background Full Landscape Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 transform-gpu"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10 pointer-events-none" />

                {/* Top Left Emirate Pill Badge */}
                <div className="absolute top-6 left-6 z-10">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-black/40 backdrop-blur-md text-white border border-white/20 flex items-center gap-1.5 shadow-md">
                    <MapPin className="w-3.5 h-3.5 text-[#fa9c24]" />
                    {item.emirate}
                  </span>
                </div>

                {/* Top Right Rating Badge */}
                <div className="absolute top-6 right-6 z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#fa9c24] text-white flex items-center gap-1 shadow-md">
                    <Star className="w-3.5 h-3.5 fill-white text-white" />
                    {item.rating}
                  </span>
                </div>

                {/* Bottom Main Content Matching User's Red Box Screenshot */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-12 z-10 text-white flex flex-col justify-end transform-gpu">
                  
                  {/* Orange Line + Category */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-[2.5px] bg-[#fa9c24] rounded-full" />
                    <span className="text-xs uppercase font-extrabold tracking-[0.2em] text-[#fa9c24]">
                      {item.category}
                    </span>
                  </div>

                  {/* Large High Contrast Title */}
                  <h3 className={`font-black uppercase tracking-tight leading-[0.95] text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] font-sans max-w-4xl transform-gpu transition-all duration-500 ${
                    isActiveCard ? 'text-3xl sm:text-5xl md:text-6xl lg:text-7xl' : 'text-xl sm:text-2xl md:text-3xl line-clamp-1'
                  }`}>
                    {item.title}
                  </h3>

                  {/* Subtitle Line & Bottom Row */}
                  <div className="mt-4 pt-3 border-t border-white/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className={`text-slate-100 font-medium leading-relaxed drop-shadow-sm ${
                      isActiveCard ? 'text-xs sm:text-sm line-clamp-2 max-w-xl' : 'text-[11px] line-clamp-1 max-w-xs opacity-80'
                    }`}>
                      {item.tagline}
                    </p>

                    {/* Discover Button on Active Card */}
                    {isActiveCard && (
                      <button
                        type="button"
                        className="inline-flex items-center gap-2.5 bg-[#fa9c24] hover:bg-[#e08b1d] text-white px-6 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 shrink-0 cursor-pointer"
                      >
                        <span>Discover Experience</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                    )}
                  </div>

                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Bottom Progress Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mt-8 flex items-center gap-4">
        <div className="flex-1 h-1.5 bg-slate-300/70 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#fa9c24] transition-all duration-500 ease-out rounded-full shadow-sm"
            style={{
              width: `${((currentIndex + 1) / filteredItems.length) * 100}%`,
            }}
          />
        </div>
        <span className="text-xs font-semibold uppercase tracking-widest text-slate-600">
          SCROLL / DRAG JOURNEY
        </span>
      </div>

    </section>
  )
}