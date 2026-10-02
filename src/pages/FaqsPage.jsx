import React, { useState, useEffect } from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import {
  HelpCircle,
  ChevronDown,
  Search,
  Sparkles,
  MessageSquare,
  PhoneCall,
  Mail,
  ShieldCheck,
  Compass,
  Headphones
} from 'lucide-react'

export default function FaqsPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [openIndex, setOpenIndex] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const categories = [
    'All',
    'Booking & Payments',
    'UAE Tours & Safaris',
    'Flights & Visas',
    'Cancellations & Refunds',
  ]

  const faqs = [
    {
      id: 1,
      category: 'Booking & Payments',
      question: 'How do I book a tour or travel package with Travacations?',
      answer:
        'You can easily book online through our website search bar, fill out our quick booking form on the Contact page, or connect with our 24/7 concierge team directly via phone at +971 58 586 0078 or email at Holidays@travacations.ae.',
    },
    {
      id: 2,
      category: 'Booking & Payments',
      question: 'What payment methods do you accept?',
      answer:
        'We accept all major credit and debit cards (Visa, MasterCard, American Express), secure online payment links, and direct bank transfers. Instant booking confirmation is generated immediately after payment.',
    },
    {
      id: 3,
      category: 'UAE Tours & Safaris',
      question: 'Do you offer custom or private tour packages across the UAE?',
      answer:
        'Yes! We specialize in tailored itineraries across Dubai, Abu Dhabi, Sharjah, and all 7 Emirates. Whether you need private desert dune bashing, luxury yacht charters, helicopter tours, or VIP sightseeing, we customize every detail.',
    },
    {
      id: 4,
      category: 'Flights & Visas',
      question: 'Can Travacations assist with UAE tourist visas and flight bookings?',
      answer:
        'Absolutely. We provide hassle-free 30-day and 60-day UAE tourist visa processing, competitive flight bookings with our best-price guarantee, and comprehensive travel insurance coverage.',
    },
    {
      id: 5,
      category: 'Cancellations & Refunds',
      question: 'What is your cancellation and refund policy?',
      answer:
        'Standard tour bookings cancelled up to 48 hours prior to scheduled departure qualify for a 100% full refund or free date rescheduling. Customized holiday packages vary based on partner airline and hotel policies.',
    },
    {
      id: 6,
      category: 'Booking & Payments',
      question: 'Is 24/7 customer support available during my trip?',
      answer:
        'Yes! Our dedicated live support team is available 24 hours a day, 7 days a week via phone (+971 58 586 0078), WhatsApp, and live email (Sales@travacations.ae) to assist you anytime, anywhere.',
    },
    {
      id: 7,
      category: 'UAE Tours & Safaris',
      question: 'Are there group discounts for family or corporate vacations?',
      answer:
        'We offer exclusive discounted rates for groups of 4+ travelers, corporate delegations, and family vacations. Contact our Sales team at Sales@travacations.ae for a custom group quote.',
    },
    {
      id: 8,
      category: 'Flights & Visas',
      question: 'When will I receive my flight tickets and tour vouchers?',
      answer:
        'All instant confirmation vouchers, flight e-tickets, and day-by-day itinerary planners are sent directly to your registered email immediately upon booking confirmation.',
    },
  ]

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory =
      activeCategory === 'All' || faq.category === activeCategory
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <div className="min-h-screen bg-[#FFF9F3] text-[#1d343e] font-sans antialiased selection:bg-[#fa9c24] selection:text-white">
      {/* HEADER */}
      <Header />

      {/* 1. HERO BANNER */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#FFF9F3] via-[#fff4ee] to-[#fa9c24]/15 overflow-hidden border-b border-[#1d343e]/10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#fa9c24]/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10 text-center">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fa9c24]/10 border border-[#fa9c24]/30 text-[#fa9c24] text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#1d343e] tracking-tight leading-[1.1] max-w-3xl mx-auto">
            Got Questions?{' '}
            <span className="font-italic text-[#fa9c24] font-normal italic">
              We’ve Got Answers
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[#1d343e]/80 font-medium leading-relaxed max-w-2xl mx-auto">
            Find everything you need to know about booking trips, UAE tours, visa assistance, flight packages, and 24/7 concierge support with Travacations.
          </p>

          {/* FAQ Live Search Input */}
          <div className="mt-8 max-w-xl mx-auto relative">
            <input
              type="text"
              placeholder="Search questions (e.g. visa, booking, refund)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-4 rounded-full bg-white border border-[#e2e8f0] shadow-lg focus:border-[#fa9c24] focus:ring-2 focus:ring-[#fa9c24]/20 outline-none text-sm font-medium text-[#1d343e] transition-all"
            />
            <Search className="w-5 h-5 text-[#fa9c24] absolute left-4.5 top-1/2 -translate-y-1/2" />
          </div>

          {/* Breadcrumbs */}
          <div className="mt-8 flex items-center justify-center gap-3 text-xs sm:text-sm font-semibold text-[#4a636e]">
            <a href="/" className="hover:text-[#fa9c24] transition-colors">
              Home
            </a>
            <span>/</span>
            <span className="text-[#fa9c24]">Our FAQs</span>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY TABS & ACCORDION SECTION */}
      <section className="py-16 md:py-24 max-w-5xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Category Pill Filters */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat
            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCategory(cat)
                  setOpenIndex(0)
                }}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#fa9c24] text-white shadow-md shadow-[#fa9c24]/30'
                    : 'bg-white text-[#1d343e] border border-[#e2e8f0] hover:border-[#fa9c24]'
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>

        {/* ACCORDION CONTAINER */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl bg-white border border-[#e2e8f0] shadow-sm overflow-hidden transition-all duration-300 hover:border-[#fa9c24]/50"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="font-serif text-lg sm:text-xl font-bold text-[#1d343e]">
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full bg-[#FFF9F3] text-[#fa9c24] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-[#fa9c24] text-white' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-0 text-sm text-[#4a636e] font-medium leading-relaxed border-t border-[#e2e8f0]/60 mt-1">
                      <p className="pt-4">{faq.answer}</p>
                    </div>
                  )}
                </div>
              )
            })
          ) : (
            <div className="text-center py-12 bg-white rounded-3xl border border-[#e2e8f0] p-8">
              <HelpCircle className="w-12 h-12 text-[#fa9c24] mx-auto mb-3" />
              <h3 className="text-lg font-bold text-[#1d343e]">
                No matching questions found
              </h3>
              <p className="text-xs text-[#4a636e] mt-1">
                Try searching for another keyword or browse our categories.
              </p>
            </div>
          )}
        </div>

        {/* 3. STILL HAVE QUESTIONS CTA BOX */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-[#1d343e] text-white shadow-2xl relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#fa9c24] flex items-center gap-1.5 justify-center sm:justify-start">
              <Headphones className="w-4 h-4" />
              <span>24/7 SUPPORT AVAILABLE</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Still Have Questions?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md">
              Can’t find the answer you’re looking for? Talk to our travel experts right now.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#fa9c24] hover:bg-[#e08b1d] text-white px-7 py-3.5 rounded-full text-sm font-bold tracking-wide shadow-lg shadow-[#fa9c24]/30 hover:shadow-xl transition-all duration-300 shrink-0"
          >
            <span>Contact Support</span>
            <PhoneCall className="w-4 h-4" />
          </a>
        </div>

      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}
