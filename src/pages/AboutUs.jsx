import React, { useEffect } from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import {
  CheckCircle2,
  ShieldCheck,
  Headphones,
  Zap,
  Star,
  Compass,
  Sparkles,
  Plane,
  HeartHandshake,
  ArrowRight
} from 'lucide-react'
import womanImg from '../assets/woman_walking.jpg'
import balloonsImg from '../assets/hot_air_balloons.jpg'

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const checklistItems = [
    'Easy Booking',
    '24/7 Support',
    'Adventure Activities',
    'Weather Updates',
    'Instant Confirmation',
    'Itinerary Planner',
  ]

  const featureCards = [
    {
      id: 'price',
      icon: ShieldCheck,
      title: 'BEST PRICE GUARANTEE',
      description:
        'Book with confidence and enjoy our best price guarantee. We offer competitive rates to ensure you get the best value on every trip.',
      badgeColor: 'from-[#fa9c24] to-[#e08b1d]',
    },
    {
      id: 'support',
      icon: Headphones,
      title: '24X7 LIVE CHAT SUPPORT',
      description:
        'Our friendly support team is available 24/7 to assist you with bookings, travel questions, and any help you need—anytime, anywhere.',
      badgeColor: 'from-[#015fc9] to-[#3484e4]',
    },
    {
      id: 'fast',
      icon: Zap,
      title: 'FAST BOOKING',
      description:
        'Book your trip quickly and easily with our simple, hassle-free booking process. Save time and get ready to travel in just a few clicks.',
      badgeColor: 'from-[#fa9c24] to-[#fbaf4f]',
    },
    {
      id: 'luxury',
      icon: Star,
      title: '5 STAR FACILITIES',
      description:
        'Enjoy premium 5-star facilities, exceptional comfort, and quality services designed to make every journey relaxing and memorable.',
      badgeColor: 'from-[#015fc9] to-[#014fb0]',
    },
  ]

  return (
    <div className="min-h-screen bg-[#FFF9F3] text-[#1d343e] font-sans antialiased selection:bg-[#fa9c24] selection:text-white">
      {/* HEADER */}
      <Header />

      {/* 1. HERO BANNER FOR ABOUT US PAGE */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#FFF9F3] via-[#fff4ee] to-[#fa9c24]/15 overflow-hidden border-b border-[#1d343e]/10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#fa9c24]/10 rounded-full blur-[130px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10 text-center">
          
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fa9c24]/10 border border-[#fa9c24]/30 text-[#fa9c24] text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ABOUT Travacations</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-[#1d343e] tracking-tight leading-[1.1] max-w-4xl mx-auto">
            Explore More,{' '}
            <span className="font-italic text-[#fa9c24] font-normal italic">
              Experience More,
            </span>{' '}
            Travel Better
          </h1>

          {/* Subtitle Paragraph */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-[#1d343e]/80 font-medium leading-relaxed max-w-3xl mx-auto">
            We specialise in creating unforgettable travel experiences, offering carefully curated destinations across the UAE and around the world to turn every journey into a memorable adventure.
          </p>

          {/* Breadcrumb Navigation */}
          <div className="mt-8 flex items-center justify-center gap-3 text-xs sm:text-sm font-semibold text-[#4a636e]">
            <a href="/" className="hover:text-[#fa9c24] transition-colors">
              Home
            </a>
            <span>/</span>
            <span className="text-[#fa9c24]">About Us</span>
          </div>

        </div>
      </section>

      {/* 2. MAIN STORY & MEMORABLE EXPERIENCES SECTION */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* LEFT CONTENT COLUMN */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="p-6 rounded-2xl bg-white border border-[#e2e8f0] shadow-sm space-y-3">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1d343e] flex items-center gap-3">
                  <HeartHandshake className="w-7 h-7 text-[#fa9c24]" />
                  <span>Travel Experiences You Can Trust</span>
                </h2>
                <p className="text-sm sm:text-base text-[#4a636e] leading-relaxed">
                  At Travacations, we carefully plan every journey to deliver exceptional service, memorable experiences, and seamless travel from start to finish.
                </p>
              </div>

              {/* Memorable Experiences Highlight Box */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#1d343e] text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#fa9c24]/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#fa9c24] mb-3 flex items-center gap-2.5">
                  <Compass className="w-6 h-6 text-[#fa9c24]" />
                  <span>Memorable Experiences</span>
                </h3>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed relative z-10">
                  From breathtaking destinations to carefully planned itineraries, we create travel experiences that inspire, excite, and leave you with memories that last a lifetime.
                </p>
              </div>

              {/* Checklist Grid */}
              <div className="pt-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#fa9c24] mb-4">
                  INCLUDED TRAVEL ADVANTAGES
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {checklistItems.map((item) => (
                    <div
                      key={item}
                      className="p-3 rounded-xl bg-white border border-[#e2e8f0] shadow-xs flex items-center gap-2.5 hover:border-[#fa9c24] transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#fa9c24] shrink-0" />
                      <span className="text-xs sm:text-sm font-bold text-[#1d343e]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* RIGHT IMAGES COLLAGE COLUMN */}
            <div className="lg:col-span-6 relative flex items-center justify-center min-h-[440px] sm:min-h-[520px]">
              
              {/* Primary Image */}
              <div className="absolute top-0 left-4 sm:left-8 w-[65%] h-[82%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src={womanImg}
                  alt="Travacations Traveler"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Secondary Image */}
              <div className="absolute bottom-0 right-2 sm:right-4 w-[60%] h-[76%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src={balloonsImg}
                  alt="Hot Air Balloons Travel"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white/95 backdrop-blur-md text-[#1d343e] p-4 sm:p-6 rounded-2xl shadow-2xl border border-white flex items-center gap-4 transform hover:scale-105 transition-transform">
                <div className="w-12 h-12 rounded-full bg-[#fa9c24] text-white flex items-center justify-center shadow-lg shadow-[#fa9c24]/30 shrink-0">
                  <Plane className="w-6 h-6 rotate-45" />
                </div>
                <div>
                  <div className="font-serif text-2xl font-bold text-[#1d343e] leading-none">
                    100%
                  </div>
                  <div className="text-xs font-bold text-[#fa9c24] mt-1">
                    Trusted Travel Partner
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. BEST PRICE, 24X7 SUPPORT, FAST BOOKING & 5 STAR FACILITIES CARDS */}
      <section className="py-20 md:py-24 bg-white relative border-t border-[#1d343e]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#fa9c24]">
              EXCELLENCE IN SERVICE
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1d343e] mt-2">
              Why Travelers Choose Travacations
            </h2>
            <p className="text-sm sm:text-base text-[#4a636e] mt-3">
              We offer unmatched guarantees and 5-star service standard on every adventure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {featureCards.map((card) => {
              const IconComponent = card.icon
              return (
                <div
                  key={card.id}
                  className="p-7 sm:p-8 rounded-3xl bg-[#FFF9F3] border border-[#e2e8f0] shadow-sm hover:shadow-xl hover:border-[#fa9c24]/50 transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    {/* Icon Badge */}
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.badgeColor} text-white flex items-center justify-center shadow-md mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-7 h-7" />
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-extrabold text-[#1d343e] tracking-tight mb-3 group-hover:text-[#fa9c24] transition-colors">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#4a636e] font-medium leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Bottom Action Link */}
                  <div className="mt-8 pt-4 border-t border-[#1d343e]/10 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#fa9c24] tracking-wider uppercase">
                      Discover More
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#fa9c24] transform group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}
