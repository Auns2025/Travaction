import React, { useEffect } from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import {
  Plane,
  Compass,
  Ship,
  Sparkles,
  ShieldCheck,
  Hotel,
  Car,
  Users,
  FileCheck,
  ArrowRight,
  Headphones,
  CheckCircle2
} from 'lucide-react'

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const services = [
    {
      id: 'safari',
      icon: Compass,
      title: 'Desert Safaris & Dune Excursions',
      category: 'Adventure',
      description:
        'Experience 4x4 dune bashing, quad biking, camel rides, traditional Bedouin camp dinners, and breathtaking sunrise hot air balloon flights over desert dunes.',
      highlights: ['VIP Bedouin Camp Dinner', 'Quad Biking & Dune Bashing', 'Hot Air Balloon Sunrise'],
      image: '/images/Golden Desert Safari at Sunset.png',
    },
    {
      id: 'yacht',
      icon: Ship,
      title: 'Luxury Yacht & Dhow Cruise Charters',
      category: 'Luxury Cruise',
      description:
        'Sail through Dubai Marina and Palm Jumeirah aboard private luxury yachts or enjoy romantic dhow dinner cruises featuring gourmet dining and live shows.',
      highlights: ['Private Yacht Rental (33ft–100ft)', 'Dubai Marina Dhow Dinner Cruise', 'Water Sports & Jet Skiing'],
      image: '/images/Marina Dhow Cruise.png',
    },
    {
      id: 'flights',
      icon: Plane,
      title: 'Global Flight Booking & Airline Tickets',
      category: 'Ticketing',
      description:
        'Reserve worldwide flight tickets with our Best Price Guarantee across premier international airlines with instant confirmation and flexible seat selection.',
      highlights: ['Best Price Guarantee', 'Instant E-Ticket Delivery', '24/7 Date Rescheduling'],
      image: '/images/flights.png',
    },
    {
      id: 'visas',
      icon: FileCheck,
      title: 'UAE Tourist Visa & Passport Assistance',
      category: 'Visa Support',
      description:
        'Fast-track 30-day and 60-day UAE tourist visa applications, visa extensions, and travel documentation with expert guidance and high approval rates.',
      highlights: ['30 & 60-Day Express Tourist Visa', 'Hassle-Free Online Processing', 'Comprehensive Travel Insurance'],
      image: '/images/UAE Travel Visa Over Dubai Skyline.png',
    },
    {
      id: 'hotels',
      icon: Hotel,
      title: '5-Star Resort & Luxury Hotel Reservations',
      category: 'Hospitality',
      description:
        'Unlock exclusive rates and VIP perks at iconic 5-star hotels—including Burj Al Arab, Atlantis The Palm, Maldives overwater villas, and European retreats.',
      highlights: ['Complimentary Room Upgrades', 'Burj Al Arab & Atlantis Deals', 'Maldives Overwater Bungalows'],
      image: '/images/Golden-Hour Dubai Resort Welcome.png',
    },
    {
      id: 'transfers',
      icon: Car,
      title: 'VIP Chauffeur & Airport Transfers',
      category: 'Transport',
      description:
        'Arrive in style with private luxury airport transfers, executive Mercedes-Benz chauffeur rentals, and sports car hire across Dubai and Abu Dhabi.',
      highlights: ['24/7 Dubai Airport Meet & Greet', 'Luxury Executive Chauffeur', 'Supercar & SUV Rentals'],
      image: '/images/VIP Chauffeur Arrival at Dubai Departures.png',
    },
    {
      id: 'guides',
      icon: Users,
      title: 'Multilingual Licensed Tour Guides',
      category: 'Sightseeing',
      description:
        'Discover the rich heritage and futuristic architecture of the UAE with expert licensed tour guides offering private custom city excursions.',
      highlights: ['Private Custom City Itineraries', 'Multilingual Concierge Guides', 'Skip-the-Line Attraction Passes'],
      image: '/images/Guided Dubai Heritage and Skyline Tour.png',
    },
    {
      id: 'corporate',
      icon: ShieldCheck,
      title: 'Corporate MICE & Event Management',
      category: 'Corporate',
      description:
        'Tailored corporate travel management, incentive delegation trips, international conference arrangements, and team retreat packages.',
      highlights: ['Tailored Corporate Delegation Travel', 'Conference & Event Logistics', 'Exclusive Group Discounts'],
      image: '/images/Luxury MICE Event at Sunset.png',
    },
  ]

  const steps = [
    { number: '01', title: 'Choose Your Service', desc: 'Select from our wide array of UAE tours, flights, or luxury services.' },
    { number: '02', title: 'Tailor Your Itinerary', desc: 'Work with our expert concierges to customize dates & preferences.' },
    { number: '03', title: 'Instant Confirmation', desc: 'Receive instant e-vouchers, tickets, and booking confirmation.' },
    { number: '04', title: 'Unforgettable Journey', desc: 'Enjoy seamless 5-star travel with 24/7 live support throughout your trip.' },
  ]

  return (
    <div className="min-h-screen bg-[#FFF9F3] text-[#1d343e] font-sans antialiased selection:bg-[#fa9c24] selection:text-white">
      {/* HEADER */}
      <Header />

      {/* 1. HERO BANNER */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#FFF9F3] via-[#fff4ee] to-[#fa9c24]/15 overflow-hidden border-b border-[#1d343e]/10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#fa9c24]/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fa9c24]/10 border border-[#fa9c24]/30 text-[#fa9c24] text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OUR PREMIUM SERVICES</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-[#1d343e] tracking-tight leading-[1.1] max-w-4xl mx-auto">
            World-Class Travel &{' '}
            <span className="text-[#fa9c24] font-normal italic">
              Concierge Services
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg md:text-xl text-[#1d343e]/80 font-medium leading-relaxed max-w-3xl mx-auto">
            From private desert safaris and luxury yacht charters to express visa processing and 5-star resort bookings—we handle every detail for an unforgettable journey.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3 text-xs sm:text-sm font-semibold text-[#4a636e]">
            <a href="/" className="hover:text-[#fa9c24] transition-colors">
              Home
            </a>
            <span>/</span>
            <span className="text-[#fa9c24]">Services</span>
          </div>
        </div>
      </section>

      {/* 2. SERVICES — HORIZONTAL PREMIUM CARDS (Reference Design) */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-8">
          {services.map((service) => {
            const IconComp = service.icon
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-[2rem] overflow-hidden border border-[#1d343e]/8 shadow-[0_4px_25px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_70px_-20px_rgba(250,156,36,0.45)] hover:border-[#fa9c24]/30 transition-all duration-500 flex flex-col sm:flex-row"
              >
                {/* ===== LEFT: IMAGE ===== */}
                <div className="relative sm:w-[42%] w-full h-56 sm:h-auto shrink-0 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1d343e]/50 via-[#1d343e]/20 to-transparent sm:bg-gradient-to-r sm:from-transparent sm:via-transparent sm:to-[#1d343e]/40" />

                  {/* Category pill (top-left) */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-white/95 backdrop-blur-md text-[#1d343e] shadow-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#fa9c24]"></span>
                      {service.category}
                    </span>
                  </div>
                </div>

                {/* ===== RIGHT: CONTENT ===== */}
                <div className="flex-1 flex flex-col p-5 sm:p-6 lg:p-7">

                  {/* Icon + Title row */}
                  <div className="flex items-start gap-3.5">
                    <div className="shrink-0 w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-gradient-to-br from-[#fa9c24] to-[#e08b1d] text-white flex items-center justify-center shadow-lg shadow-[#fa9c24]/35 transition-all duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
                      <IconComp className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.2} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[16px] sm:text-[17px] lg:text-[18px] font-serif font-bold text-[#1d343e] leading-snug group-hover:text-[#fa9c24] transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-[12.5px] sm:text-[13px] text-[#4a636e] font-medium leading-relaxed line-clamp-3">
                    {service.description}
                  </p>

                  {/* Highlights List (2 columns on larger screens) */}
                  <div className="mt-4 pt-4 border-t border-dashed border-[#e2e8f0] grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 flex-1">
                    {service.highlights.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2 text-[11.5px] font-semibold text-[#1d343e]/90"
                      >
                        <span className="w-4 h-4 rounded-full bg-[#fa9c24]/10 flex items-center justify-center shrink-0 mt-[1px]">
                          <CheckCircle2 className="w-3 h-3 text-[#fa9c24]" strokeWidth={3} />
                        </span>
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="mt-5">
                    <a
                      href="/contact"
                      className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1d343e] hover:bg-gradient-to-r hover:from-[#fa9c24] hover:to-[#e08b1d] text-white font-bold text-[11px] uppercase tracking-widest transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-[#fa9c24]/30"
                    >
                      <span>Book This Service</span>
                      <ArrowRight
                        className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1"
                        strokeWidth={2.5}
                      />
                    </a>
                  </div>
                </div>

                {/* Animated top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#fa9c24] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30" />
              </div>
            )
          })}
        </div>
      </section>

      {/* 3. HOW IT WORKS / 4-STEP PROCESS */}
      <section className="py-16 md:py-24 bg-white relative border-t border-[#1d343e]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#fa9c24]">
              SIMPLE & SEAMLESS
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1d343e] mt-2">
              How Our Travel Service Works
            </h2>
            <p className="text-sm sm:text-base text-[#4a636e] mt-2">
              Four easy steps to turn your dream vacation into reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="p-8 rounded-3xl bg-[#FFF9F3] border border-[#e2e8f0] relative flex flex-col justify-between group hover:border-[#fa9c24]/50 hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <div className="font-serif text-4xl font-black text-[#fa9c24]/30 group-hover:text-[#fa9c24] transition-colors mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-[#1d343e] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4a636e] font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CUSTOM INQUIRY CTA CARD */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#1d343e] text-white shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#fa9c24] flex items-center gap-1.5 justify-center lg:justify-start">
              <Headphones className="w-4 h-4" />
              <span>CUSTOM TRAVEL CONCIERGE</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Need a Customized Service or VIP Package?
            </h2>
            <p className="text-sm text-slate-300 max-w-xl">
              Connect with our team directly for private jet charters, luxury yacht events, group delegations, and specialized UAE tours.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#fa9c24] hover:bg-[#e08b1d] text-white px-8 py-4 rounded-full text-sm font-bold tracking-wide shadow-xl shadow-[#fa9c24]/30 hover:shadow-2xl transition-all duration-300 shrink-0"
          >
            <span>Request Custom Service</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}