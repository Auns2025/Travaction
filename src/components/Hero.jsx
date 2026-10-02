import React, { useState } from 'react'
import { MapPin, Calendar, Users, ArrowRight, Play, Star, X } from 'lucide-react'

export default function Hero() {
  const [destination, setDestination] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [travelers, setTravelers] = useState('2 Travelers')

  return (
    <div className="relative w-full min-h-[900px] lg:min-h-[940px] bg-[#FFF9F3] text-[#0B192C] flex flex-col justify-between overflow-hidden pb-12 select-none">
      
      {/* SUBTLE WARM AMBIENT GRADIENTS */}
      <div className="absolute top-0 right-0 w-[650px] h-[650px] bg-gradient-to-br from-[#FF6B35]/8 via-[#FF8C42]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-gradient-to-tr from-[#FF6B35]/6 via-[#0EA5E9]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* BOTANICAL LEAF SILHOUETTE OVERLAY (Bottom-Left Corner) */}
      <div className="absolute bottom-0 left-0 w-56 md:w-80 h-72 md:h-96 pointer-events-none z-10 opacity-75 mix-blend-multiply overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=800&auto=format&fit=crop"
          alt="Botanical plant leaves"
          className="w-full h-full object-cover object-left-bottom opacity-65 filter contrast-125 grayscale-[30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFF9F3]/40 to-[#FFF9F3]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFF9F3]/80 via-transparent to-[#FFF9F3]/60" />
      </div>

      {/* FAINT MOUNTAIN LINE ART SKETCH */}
      <svg
        className="absolute top-24 left-0 w-[450px] h-[350px] opacity-15 pointer-events-none -z-10 text-[#0B192C]"
        viewBox="0 0 450 350"
        fill="none"
      >
        <path
          d="M-20 220 C 50 180, 100 120, 180 190 C 240 240, 310 140, 420 250"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeDasharray="4 6"
        />
        <path
          d="M10 260 Q 90 190, 160 270 T 320 240"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="3 5"
        />
      </svg>

      {/* TWO-COLUMN HERO SECTION MAIN CONTENT */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-4 pb-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-20 my-auto">
        
        {/* LEFT HERO CONTENT */}
        <div className="lg:col-span-6 flex flex-col justify-center relative z-20 pl-0 lg:pl-2">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#FF6B35] rounded-full" />
            <span className="text-[11px] font-black tracking-[0.25em] text-[#FF6B35] uppercase font-sans">
              YOUR JOURNEY BEGINS HERE
            </span>
          </div>

          {/* Headline + Paper Airplane Sketch */}
          <div className="relative">
            <h1 className="flex flex-col tracking-tight text-[#0B192C]">
              <span className="font-serif text-6xl sm:text-7xl lg:text-[80px] leading-[1.02] font-bold">
                Explore
              </span>
              <span className="font-serif italic text-6xl sm:text-7xl lg:text-[92px] leading-[1.05] text-[#FF6B35] font-normal -mt-1 lg:-mt-3">
                the World
              </span>
            </h1>

            {/* DECORATIVE: Paper Airplane Sketch & Path */}
            <div className="absolute top-2 right-4 lg:right-12 pointer-events-none z-10">
              <svg width="140" height="100" viewBox="0 0 140 100" fill="none">
                <path
                  d="M10 80 C 40 20, 80 40, 110 20"
                  stroke="#0B192C"
                  strokeWidth="1.2"
                  strokeDasharray="4 4"
                  strokeLinecap="round"
                  opacity="0.35"
                />
                <g transform="translate(100, 8) rotate(-15) scale(0.9)">
                  <path
                    d="M1 1L22 10L1 19L4 10L1 1Z"
                    fill="none"
                    stroke="#0B192C"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                    opacity="0.6"
                  />
                  <path d="M4 10H22" stroke="#0B192C" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
                </g>
              </svg>
            </div>
          </div>

          {/* Supporting Paragraph */}
          <p className="mt-5 text-[#0B192C]/75 text-base sm:text-[17px] leading-relaxed max-w-md font-medium">
            Let’s turn your travel dreams into real experiences. Discover breathtaking places, unique cultures and unforgettable moments.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            {/* Primary Orange Pill Button */}
            <a
              href="#plan"
              className="inline-flex items-center gap-3 bg-[#FF6B35] hover:bg-[#E05A2B] text-white px-7 py-3.5 rounded-full text-base font-semibold shadow-lg shadow-[#FF6B35]/25 hover:shadow-xl hover:shadow-[#FF6B35]/35 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Plan Your Trip</span>
              <ArrowRight className="w-4.5 h-4.5" />
            </a>

            {/* Secondary White Pill Button with Sky-Blue Play Icon */}
            <button
              type="button"
              className="inline-flex items-center gap-3 bg-white hover:bg-slate-50 text-[#0B192C] px-6 py-3.5 rounded-full text-base font-semibold shadow-sm hover:shadow-md border border-[#0B192C]/10 transition-all duration-200 cursor-pointer group"
            >
              <div className="w-8 h-8 rounded-full bg-[#0EA5E9] flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform duration-200">
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              </div>
              <span className="text-[#0B192C] font-bold text-sm">Watch Video</span>
            </button>
          </div>

          {/* Statistics Horizontal Row */}
          <div className="mt-10 pt-7 border-t border-[#0B192C]/10 grid grid-cols-3 gap-3 max-w-md">
            <div className="pr-2 border-r border-[#0B192C]/10">
              <div className="font-serif text-2xl sm:text-3xl font-extrabold text-[#0B192C]">
                28K+
              </div>
              <div className="text-xs text-[#0B192C]/60 font-semibold mt-0.5">
                Happy Travelers
              </div>
            </div>

            <div className="px-2 border-r border-[#0B192C]/10">
              <div className="font-serif text-2xl sm:text-3xl font-extrabold text-[#0B192C]">
                150+
              </div>
              <div className="text-xs text-[#0B192C]/60 font-semibold mt-0.5">
                Amazing Destinations
              </div>
            </div>

            <div className="pl-2">
              <div className="font-serif text-2xl sm:text-3xl font-extrabold text-[#0B192C] flex items-center gap-1">
                <span>4.9</span>
                <Star className="w-5 h-5 fill-[#FF6B35] text-[#FF6B35]" />
              </div>
              <div className="text-xs text-[#0B192C]/60 font-semibold mt-0.5">
                Customer Rating
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT HERO COLUMN - ASYMMETRICAL PHOTO COLLAGE & HANDWRITTEN NOTES */}
        <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end min-h-[500px] lg:min-h-[540px]">
          
          {/* DECORATIVE: Handwritten Note "Collect Moments Not Things" */}
          <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-12 z-30 pointer-events-none">
            <div className="font-['Caveat',cursive] text-2xl text-[#0B192C]/80 rotate-[-8deg] leading-snug font-bold relative">
              <span className="block">Collect</span>
              <span className="block">Moments</span>
              <span className="block text-[#0B192C]">Not Things</span>

              {/* Hand-drawn sketch curve/bracket around text */}
              <svg
                className="absolute -top-3 -left-4 w-28 h-28 text-[#0B192C]/30 -z-10"
                viewBox="0 0 100 100"
                fill="none"
              >
                <path
                  d="M10 20 C -5 50, 15 85, 45 90 C 70 95, 85 80, 80 60"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
                <path d="M5 25 L 10 20 L 15 28" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* COLLAGE CONTAINER */}
          <div className="relative w-full max-w-[500px] lg:max-w-[540px] h-[490px] lg:h-[530px]">
            
            {/* MAIN VERTICAL IMAGE: Santorini Coastal View with Custom Organic Arch Radius */}
            <div
              className="absolute left-6 lg:left-14 top-0 w-[250px] sm:w-[280px] h-[400px] sm:h-[450px] overflow-hidden shadow-2xl border-4 border-white z-10 transform hover:scale-[1.01] transition-transform duration-300"
              style={{ borderRadius: '170px 32px 32px 90px' }}
            >
              <img
                src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1000&auto=format&fit=crop"
                alt="Santorini Greece coastal village at sunset"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </div>

            {/* TOP-RIGHT SECONDARY IMAGE: Female traveler looking out over sea view */}
            <div className="absolute right-0 sm:right-4 top-0 w-[175px] sm:w-[205px] h-[225px] sm:h-[255px] rounded-[36px] overflow-hidden shadow-xl border-4 border-white z-20 hover:scale-[1.02] transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop"
                alt="Female traveler overlooking sea view"
                className="w-full h-full object-cover"
              />
            </div>

            {/* BOTTOM-RIGHT SECONDARY IMAGE: Maldives Overwater Resort Bungalows */}
            <div
              className="absolute right-2 sm:right-6 bottom-4 sm:bottom-6 w-[220px] sm:w-[250px] h-[175px] sm:h-[200px] overflow-hidden shadow-2xl border-4 border-white z-20 hover:scale-[1.02] transition-transform duration-300"
              style={{ borderRadius: '110px 32px 32px 32px' }}
            >
              <img
                src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800&auto=format&fit=crop"
                alt="Maldives overwater bungalows resort"
                className="w-full h-full object-cover"
              />
            </div>

            {/* FLOATING ORANGE CIRCULAR ACTION BUTTON */}
            <button
              type="button"
              className="absolute -right-2 sm:right-0 top-[220px] sm:top-[245px] w-[42px] h-[42px] rounded-full bg-[#FF6B35] text-white flex items-center justify-center shadow-lg shadow-[#FF6B35]/40 hover:scale-110 hover:bg-[#E05A2B] transition-all duration-200 z-30 cursor-pointer border-2 border-white"
              aria-label="Action Button"
            >
              <X className="w-5 h-5 rotate-45 stroke-[2.5]" />
            </button>

            {/* DECORATIVE: Handwritten Note "Good Vibes Always" in circular sketch ring */}
            <div className="absolute -bottom-4 right-0 sm:right-2 z-30 pointer-events-none">
              <div className="relative font-['Caveat',cursive] text-lg text-[#0B192C]/85 font-bold text-center p-4">
                <span className="block leading-tight">Good</span>
                <span className="block leading-tight">Vibes</span>
                <span className="block leading-tight text-[#FF6B35]">Always</span>

                <svg
                  className="absolute inset-0 w-full h-full text-[#0B192C]/35 -z-10"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeDasharray="4 3"
                  />
                  <path d="M12 25 L 8 18 M 85 75 L 90 82" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* FLOATING SEARCH / BOOKING BAR */}
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 relative z-30 mt-2 sm:mt-4">
        <div className="w-full bg-white/95 backdrop-blur-md rounded-3xl sm:rounded-full p-3 sm:p-4 shadow-[0_20px_50px_rgba(11,25,44,0.07)] border border-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-0 items-center">
          
          {/* 1. Destinations */}
          <div className="flex items-center gap-3.5 px-5 py-2 lg:border-r border-[#0B192C]/10 hover:bg-[#FFF9F3]/60 rounded-2xl transition-colors duration-150 cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-[#FF6B35]/10 flex items-center justify-center text-[#FF6B35] shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-[#0B192C] tracking-wide">
                Destinations
              </span>
              <input
                type="text"
                placeholder="Where to go?"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="text-xs text-[#0B192C]/75 placeholder:text-[#0B192C]/40 bg-transparent border-none outline-none font-sans font-medium w-full"
              />
            </div>
          </div>

          {/* 2. Check In */}
          <div className="flex items-center gap-3.5 px-5 py-2 lg:border-r border-[#0B192C]/10 hover:bg-[#FFF9F3]/60 rounded-2xl transition-colors duration-150 cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-[#FF6B35]/10 flex items-center justify-center text-[#FF6B35] shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-[#0B192C] tracking-wide">
                Check In
              </span>
              <input
                type="text"
                placeholder="Add dates"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                onFocus={(e) => (e.target.type = 'date')}
                onBlur={(e) => {
                  if (!e.target.value) e.target.type = 'text'
                }}
                className="text-xs text-[#0B192C]/75 placeholder:text-[#0B192C]/40 bg-transparent border-none outline-none font-sans font-medium w-full"
              />
            </div>
          </div>

          {/* 3. Check Out */}
          <div className="flex items-center gap-3.5 px-5 py-2 lg:border-r border-[#0B192C]/10 hover:bg-[#FFF9F3]/60 rounded-2xl transition-colors duration-150 cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-[#FF6B35]/10 flex items-center justify-center text-[#FF6B35] shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-[#0B192C] tracking-wide">
                Check Out
              </span>
              <input
                type="text"
                placeholder="Add dates"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                onFocus={(e) => (e.target.type = 'date')}
                onBlur={(e) => {
                  if (!e.target.value) e.target.type = 'text'
                }}
                className="text-xs text-[#0B192C]/75 placeholder:text-[#0B192C]/40 bg-transparent border-none outline-none font-sans font-medium w-full"
              />
            </div>
          </div>

          {/* 4. Travelers */}
          <div className="flex items-center gap-3.5 px-5 py-2 lg:border-r border-[#0B192C]/10 hover:bg-[#FFF9F3]/60 rounded-2xl transition-colors duration-150 cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-[#FF6B35]/10 flex items-center justify-center text-[#FF6B35] shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-[#0B192C] tracking-wide">
                Travelers
              </span>
              <select
                value={travelers}
                onChange={(e) => setTravelers(e.target.value)}
                className="text-xs text-[#0B192C]/80 bg-transparent border-none outline-none font-sans font-medium cursor-pointer"
              >
                <option value="1 Traveler">1 Traveler</option>
                <option value="2 Travelers">2 Travelers</option>
                <option value="3 Travelers">3 Travelers</option>
                <option value="4+ Travelers">4+ Travelers</option>
              </select>
            </div>
          </div>

          {/* 5. Search Button */}
          <div className="p-1 flex items-center justify-center">
            <button
              type="button"
              className="w-full bg-[#FF6B35] hover:bg-[#E05A2B] text-white py-3.5 px-7 rounded-full font-bold text-sm shadow-md shadow-[#FF6B35]/25 hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>Search Flights</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

        </div>
      </div>

    </div>
  )
}
