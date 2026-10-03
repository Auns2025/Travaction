import React, { useState, useEffect } from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import {
  Compass,
  Download,
  Sparkles,
  MapPin,
  Calendar,
  Hotel,
  Mountain,
  CheckCircle2,
  Waves,
  Zap,
  MessageSquareQuote,
  ArrowRight,
  FileText
} from 'lucide-react'

export default function FarEastPage() {
  const [brochureDownloaded, setBrochureDownloaded] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleBrochureDownload = () => {
    setBrochureDownloaded(true)
    setTimeout(() => setBrochureDownloaded(false), 4000)
  }

  const farEastDestinations = [
    {
      name: 'Tokyo & Kyoto, Japan',
      tagline: 'Futuristic Metropolises & Ancient Shrines',
      image: '/images/Tokyo & Kyoto, Japan.png',
    },
    {
      name: 'Seoul & Jeju Island, S. Korea',
      tagline: 'K-Culture, Palaces & Volcanic Wonders',
      image: '/images/Seoul & Jeju Island, S. Korea.png',
    },
    {
      name: 'Singapore & Sentosa',
      tagline: 'Garden City Luxury & World-Class Resorts',
      image: '/images/Singapore.png',
    },
    {
      name: 'Hong Kong & Macau',
      tagline: 'Iconic Skylines & Vibrant Harbor Culture',
      image: '/images/Hong Kong & Macau.png',
    },
  ]

  const travelCategories = [
    {
      id: 'time',
      icon: Calendar,
      title: 'Best Time to Visit',
      description:
        'Plan your trip perfectly with seasonal insights — find out when weather, events, and activities are at their very best.',
    },
    {
      id: 'attractions',
      icon: MapPin,
      title: 'Top Attractions',
      description:
        'Plan your trip perfectly with seasonal insights — find out when weather, events, and activities are at their very best.',
    },
    {
      id: 'accommodations',
      icon: Hotel,
      title: 'Accommodation Options',
      description:
        'Plan your trip perfectly with seasonal insights — find out when weather, events, and activities are at their very best.',
    },
    {
      id: 'adventure',
      icon: Mountain,
      title: 'Adventure Activities',
      description:
        'Plan your trip perfectly with seasonal insights — find out when weather, events, and activities are at their very best.',
    },
  ]

  const featureHighlights = [
    'Duis ultricies sapien a volutpat varius. Maecenas',
    'Blandit enim. Pellentesque ultrices, justo non',
    'Nunc in quam in quam placerat rhoncus quis',
    'Duis ultricies sapien a volutpat varius. Maecenas',
    'Blandit enim. Pellentesque ultrices, justo non',
    'Nunc in quam in quam placerat rhoncus quis',
  ]

  return (
    <div className="min-h-screen bg-[#FFF9F3] text-[#1d343e] font-sans antialiased selection:bg-[#fa9c24] selection:text-white relative">
      {/* HEADER */}
      <Header />

      {/* 1. HERO BANNER */}
      <section className="relative py-20 sm:py-24 md:py-28 bg-gradient-to-br from-[#FFF9F3] via-[#fff4ee] to-[#fa9c24]/15 overflow-hidden border-b border-[#1d343e]/10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#fa9c24]/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10 text-center">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fa9c24]/10 border border-[#fa9c24]/30 text-[#fa9c24] text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FAR EAST DESTINATIONS</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-[#1d343e] tracking-tight leading-[1.1] max-w-4xl mx-auto">
            Explore More,{' '}
            <span className="font-italic text-[#fa9c24] font-normal italic">
              Experience More,
            </span>{' '}
            Travel Better
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-[#1d343e]/85 font-medium leading-relaxed max-w-3xl mx-auto">
            Travacations is dedicated to creating unforgettable travel experiences across the Far East, offering carefully curated destinations, seamless travel services, and memorable adventures for every type of traveller.
          </p>

          {/* Breadcrumb */}
          <div className="mt-8 flex items-center justify-center gap-3 text-xs sm:text-sm font-semibold text-[#4a636e]">
            <a href="/" className="hover:text-[#fa9c24] transition-colors">
              Home
            </a>
            <span>/</span>
            <a href="/#destinations" className="hover:text-[#fa9c24] transition-colors">
              Destinations
            </a>
            <span>/</span>
            <span className="text-[#fa9c24]">Far East</span>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW & DESTINATIONS GRID */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1d343e] leading-tight">
              Extraordinary Orient Traditions & Ultra-Modern Skylines
            </h2>

            <p className="text-sm sm:text-base text-[#4a636e] leading-relaxed font-medium">
              From the vibrant neon lights of Tokyo and historic temples of Kyoto to the K-pop energy of Seoul, futuristic garden city of Singapore, and dynamic Victoria Harbour of Hong Kong, the Far East offers an enchanting fusion of old and new.
            </p>

            <p className="text-sm sm:text-base text-[#4a636e] leading-relaxed font-medium">
              Explore bullet trains, ancient shrines, world-class culinary wonders, high-tech cities, and scenic mountain escapes with Travacations. Whether you’re planning a cultural tour, cherry blossom getaway, luxury shopping retreat, or culinary expedition, we’re here to make every journey special.
            </p>

            <div className="p-6 rounded-2xl bg-white border border-[#e2e8f0] shadow-sm">
              <p className="text-xs sm:text-sm font-bold text-[#1d343e] leading-relaxed">
                At Travacations, we look forward to expanding our destinations and helping travellers explore more, experience more, and travel better.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {farEastDestinations.map((dest) => (
              <div
                key={dest.name}
                className="relative h-48 rounded-2xl overflow-hidden shadow-lg border-2 border-white group"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h4 className="font-serif font-bold text-sm leading-tight">
                    {dest.name}
                  </h4>
                  <p className="text-[10px] text-slate-200 line-clamp-1 mt-0.5">
                    {dest.tagline}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </section>

      {/* 3. 4 KEY TRAVEL INSIGHTS CARDS */}
      <section className="py-16 md:py-20 bg-white relative border-t border-[#1d343e]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#fa9c24]">
              PLAN YOUR FAR EAST TRIP
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1d343e] mt-2">
              Essential Far Eastern Travel Insights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {travelCategories.map((cat) => {
              const IconComp = cat.icon
              return (
                <div
                  key={cat.id}
                  className="p-7 rounded-3xl bg-[#FFF9F3] border border-[#e2e8f0] shadow-sm hover:shadow-xl hover:border-[#fa9c24]/50 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#fa9c24] text-white flex items-center justify-center shadow-md mb-5 group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <h3 className="text-lg font-serif font-bold text-[#1d343e] mb-3 group-hover:text-[#fa9c24] transition-colors">
                      {cat.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#4a636e] font-medium leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#e2e8f0]">
                    <span className="text-xs font-bold text-[#fa9c24] flex items-center gap-1">
                      <span>Explore Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* 4. FEATURE HIGHLIGHTS & RAFTING / BOOKING SECTION */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#e2e8f0] shadow-lg">
          
          <div className="mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#fa9c24]">
              TOP FEATURE HIGHLIGHTS
            </span>
            <h2 className="text-3xl font-serif font-bold text-[#1d343e] mt-1">
              Curated Excellence & Outdoor Adventures
            </h2>
          </div>

          {/* Checklist Bullet Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {featureHighlights.map((point, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#FFF9F3] border border-[#e2e8f0] flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#fa9c24] shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-[#1d343e]">
                  {point}
                </span>
              </div>
            ))}
          </div>

          {/* 2 Feature Cards: Rafting Whitewater & Easy Booking */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[#e2e8f0]">
            
            {/* Rafting Whitewater */}
            <div className="p-6 rounded-2xl bg-[#FFF9F3] border border-[#e2e8f0] flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#015fc9] text-white flex items-center justify-center shrink-0 shadow-md">
                <Waves className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#1d343e]">
                  Rafting Whitewater
                </h4>
                <p className="text-xs sm:text-sm text-[#4a636e] font-medium mt-1 leading-relaxed">
                  We are experienced in bringing adventures to their journey, with all outdoor.
                </p>
              </div>
            </div>

            {/* Easy & Quick Booking */}
            <div className="p-6 rounded-2xl bg-[#FFF9F3] border border-[#e2e8f0] flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#fa9c24] text-white flex items-center justify-center shrink-0 shadow-md">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#1d343e]">
                  Easy & Quick Booking
                </h4>
                <p className="text-xs sm:text-sm text-[#4a636e] font-medium mt-1 leading-relaxed">
                  We are experienced in bringing adventures to their journey, with all outdoor.
                </p>
              </div>
            </div>

          </div>

          {/* Testimonials Banner Link Callout */}
          <div className="mt-10 p-6 rounded-2xl bg-[#1d343e] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <MessageSquareQuote className="w-8 h-8 text-[#fa9c24] shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-white">
                  Read What Our Travelers Say
                </h4>
                <p className="text-xs text-slate-300">
                  Browse our testimonial page to discover the experiences of our valued travellers.
                </p>
              </div>
            </div>

            <a
              href="/#testimonials"
              className="px-6 py-2.5 rounded-full bg-[#fa9c24] hover:bg-[#e08b1d] text-white text-xs font-bold uppercase tracking-wider shadow-md shrink-0 transition-all"
            >
              View Testimonials
            </a>
          </div>

        </div>
      </section>

      {/* FLOATING RIGHT-HAND BOTTOM CORNER BROCHURE DOWNLOAD WIDGET */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative group">
          
          {brochureDownloaded && (
            <div className="absolute -top-12 right-0 bg-emerald-600 text-white text-xs font-bold py-1.5 px-3 rounded-lg shadow-lg whitespace-nowrap animate-bounce">
              ✓ Far East Brochure PDF Downloaded!
            </div>
          )}

          <button
            type="button"
            onClick={handleBrochureDownload}
            className="bg-[#1d343e] hover:bg-[#fa9c24] text-white p-4 rounded-2xl shadow-2xl border-2 border-white flex items-center gap-3 transition-all duration-300 hover:scale-105 cursor-pointer group/btn"
          >
            <div className="w-9 h-9 rounded-xl bg-[#fa9c24] group-hover/btn:bg-white group-hover/btn:text-[#fa9c24] text-white flex items-center justify-center transition-colors">
              <FileText className="w-5 h-5" />
            </div>
            <div className="text-left hidden sm:block">
              <span className="block text-[10px] uppercase font-bold text-[#fa9c24] group-hover/btn:text-white tracking-wider">
                DOWNLOAD BROCHURE
              </span>
              <span className="block text-xs font-extrabold text-white">
                Far East Guide PDF
              </span>
            </div>
            <Download className="w-4 h-4 text-white group-hover/btn:translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}
