import React, { useState, useEffect } from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Sparkles,
  CheckCircle,
  Clock,
  Compass,
  Headphones
} from 'lucide-react'

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    category: 'Adventure Category',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        category: 'Adventure Category',
        message: '',
      })
    }, 4000)
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
          <div className="inline-flex items-center gap-2 px-4 mt-5 py-1.5 rounded-full bg-[#fa9c24]/10 border border-[#fa9c24]/30 text-[#fa9c24] text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#1d343e] tracking-tight leading-[1.1] max-w-3xl mx-auto">
            We’d Love to{' '}
            <span className="font-italic text-[#fa9c24] font-normal italic">
              Hear From You
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[#1d343e]/80 font-medium leading-relaxed max-w-2xl mx-auto">
            Have questions about destinations, flight bookings, or custom tour guides? Our team is available 24/7 to plan your perfect trip.
          </p>

          {/* Breadcrumb */}
          <div className="mt-8 flex items-center justify-center gap-3 text-xs sm:text-sm font-semibold text-[#4a636e]">
            <a href="/" className="hover:text-[#fa9c24] transition-colors">
              Home
            </a>
            <span>/</span>
            <span className="text-[#fa9c24]">Contact Us</span>
          </div>
        </div>
      </section>

      {/* 2. CONTACT INFO CARDS SECTION */}
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* CARD 1: CALL ME */}
          <div className="p-8 rounded-3xl bg-white border border-[#e2e8f0] shadow-sm hover:shadow-xl hover:border-[#fa9c24]/50 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#fa9c24] to-[#e08b1d] text-white flex items-center justify-center shadow-md mb-6 group-hover:scale-110 transition-transform">
                <Phone className="w-7 h-7" />
              </div>

              <h3 className="text-sm font-extrabold text-[#fa9c24] uppercase tracking-widest mb-1">
                Call me:
              </h3>
              
              <a
                href="tel:+971585860078"
                className="text-xl sm:text-2xl font-serif font-bold text-[#1d343e] hover:text-[#fa9c24] transition-colors block mt-2"
              >
                +971 58 586 0078
              </a>

              <p className="text-xs text-[#4a636e] font-medium mt-3">
                Available 24/7 for instant travel support & bookings.
              </p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-[#e2e8f0] text-xs font-bold text-[#fa9c24] flex items-center gap-1.5">
              <Headphones className="w-4 h-4" />
              <span>24/7 Phone Support</span>
            </div>
          </div>

          {/* CARD 2: MAIL ME */}
          <div className="p-8 rounded-3xl bg-white border border-[#e2e8f0] shadow-sm hover:shadow-xl hover:border-[#fa9c24]/50 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#015fc9] to-[#3484e4] text-white flex items-center justify-center shadow-md mb-6 group-hover:scale-110 transition-transform">
                <Mail className="w-7 h-7" />
              </div>

              <h3 className="text-sm font-extrabold text-[#fa9c24] uppercase tracking-widest mb-1">
                Mail me:
              </h3>

              <div className="space-y-1.5 mt-2">
                <a
                  href="mailto:Holidays@travacations.ae"
                  className="text-base sm:text-lg font-serif font-bold text-[#1d343e] hover:text-[#fa9c24] transition-colors block"
                >
                  Holidays@travacations.ae
                </a>
                <a
                  href="mailto:Sales@travacations.ae"
                  className="text-base sm:text-lg font-serif font-bold text-[#1d343e] hover:text-[#fa9c24] transition-colors block"
                >
                  Sales@travacations.ae
                </a>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#e2e8f0] text-xs font-bold text-[#015fc9] flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>Response within 1 hour</span>
            </div>
          </div>

          {/* CARD 3: LOCATION */}
          <div className="p-8 rounded-3xl bg-white border border-[#e2e8f0] shadow-sm hover:shadow-xl hover:border-[#fa9c24]/50 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#fa9c24] to-[#fbaf4f] text-white flex items-center justify-center shadow-md mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="w-7 h-7" />
              </div>

              <h3 className="text-sm font-extrabold text-[#fa9c24] uppercase tracking-widest mb-1">
                Location:
              </h3>

              <p className="text-xl sm:text-2xl font-serif font-bold text-[#1d343e] mt-2">
                Al nahda 1 Dubai
              </p>

              <p className="text-xs text-[#4a636e] font-medium mt-3">
                United Arab Emirates — Head Office & Travel Lounge.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#e2e8f0] text-xs font-bold text-[#fa9c24] flex items-center gap-1.5">
              <Compass className="w-4 h-4" />
              <span>Visit Our Dubai Office</span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. FORM & MAP SECTION */}
      <section className="py-12 md:py-20 bg-white relative border-t border-[#1d343e]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* LEFT: FORM COLUMN */}
            <div className="lg:col-span-6 bg-[#FFF9F3] p-6 sm:p-8 md:p-10 rounded-3xl border border-[#e2e8f0] shadow-lg">
              <div className="mb-8">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#fa9c24]">
                  SEND A MESSAGE
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1d343e] mt-1">
                  Book Your Travel Service
                </h2>
                <p className="text-xs sm:text-sm text-[#4a636e] mt-2 font-medium">
                  Fill out the form below and our concierge team will connect with you instantly.
                </p>
              </div>

              {submitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-bold flex items-center gap-3 animate-fade-in">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>
                    Thank you! Your message has been received. Our team will contact you shortly.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {/* First name* */}
                  <div>
                    <label className="block text-xs font-bold text-[#1d343e] uppercase tracking-wider mb-2">
                      First name*
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      placeholder="e.g. John"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-white border border-[#e2e8f0] focus:border-[#fa9c24] focus:ring-2 focus:ring-[#fa9c24]/20 text-sm outline-none font-medium text-[#1d343e] transition-all"
                    />
                  </div>

                  {/* Last name* */}
                  <div>
                    <label className="block text-xs font-bold text-[#1d343e] uppercase tracking-wider mb-2">
                      Last name*
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      placeholder="e.g. Smith"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-white border border-[#e2e8f0] focus:border-[#fa9c24] focus:ring-2 focus:ring-[#fa9c24]/20 text-sm outline-none font-medium text-[#1d343e] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {/* Your phone* */}
                  <div>
                    <label className="block text-xs font-bold text-[#1d343e] uppercase tracking-wider mb-2">
                      Your phone*
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+971 50 123 4567"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-white border border-[#e2e8f0] focus:border-[#fa9c24] focus:ring-2 focus:ring-[#fa9c24]/20 text-sm outline-none font-medium text-[#1d343e] transition-all"
                    />
                  </div>

                  {/* Your Email */}
                  <div>
                    <label className="block text-xs font-bold text-[#1d343e] uppercase tracking-wider mb-2">
                      Your email*
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-white border border-[#e2e8f0] focus:border-[#fa9c24] focus:ring-2 focus:ring-[#fa9c24]/20 text-sm outline-none font-medium text-[#1d343e] transition-all"
                    />
                  </div>
                </div>

                {/* Service Category Selection */}
                <div>
                  <label className="block text-xs font-bold text-[#1d343e] uppercase tracking-wider mb-2">
                    Service Category / Interest*
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-white border border-[#e2e8f0] focus:border-[#fa9c24] focus:ring-2 focus:ring-[#fa9c24]/20 text-sm outline-none font-semibold text-[#1d343e] cursor-pointer transition-all"
                  >
                    <option value="Adventure Category">Adventure Category</option>
                    <option value="Flight booking">Flight booking</option>
                    <option value="Tour guide">Tour guide</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-[#1d343e] uppercase tracking-wider mb-2">
                    Inquiry / Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Tell us about your travel dates, preferred destinations, or requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-white border border-[#e2e8f0] focus:border-[#fa9c24] focus:ring-2 focus:ring-[#fa9c24]/20 text-sm outline-none font-medium text-[#1d343e] transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#fa9c24] hover:bg-[#e08b1d] text-white py-3.5 sm:py-4 px-6 sm:px-8 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-[#fa9c24]/25 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* RIGHT: MAP COLUMN – increased height on large screens */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#fa9c24]">
                  FIND US IN DUBAI
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1d343e] mt-1">
                  Al Nahda 1 Location Map
                </h2>
                <p className="text-xs sm:text-sm text-[#4a636e] mt-2 font-medium">
                  Located in Al Nahda 1, Dubai, United Arab Emirates — near Sahara Centre & Al Mamzar Beach Park.
                </p>
              </div>

              {/* Map Frame Container – taller on lg screens */}
              <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[575px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <iframe
                  title="Al Nahda 1 Dubai Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14429.23126830704!2d55.362145!3d25.29381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c404616801f%3A0xb377a0df47cb6b91!2sAl%20Nahda%201%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter contrast-105"
                ></iframe>

                {/* Floating Map Location Card overlay */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-xl border border-slate-200 max-w-xs hidden sm:flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#fa9c24] text-white flex items-center justify-center shrink-0 shadow-md">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#1d343e]">Al Nahda First</h4>
                    <p className="text-[11px] text-[#4a636e]">Al Nahda 1 - Dubai - UAE</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}