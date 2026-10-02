import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import SectionHeading from '../common/SectionHeading'
import { testimonialsData } from '../../data/testimonials'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Testimonials() {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <section className="relative py-16 md:py-20 bg-white overflow-hidden" id="testimonials">
      
      {/* Inline style to push Swiper pagination dots cleanly below the cards */}
      <style>{`
        .testimonials-swiper .swiper-pagination {
          position: relative !important;
          margin-top: 2.5rem !important;
          bottom: auto !important;
        }
      `}</style>

      {/* Background Decorative Quote Watermark */}
      <div className="absolute top-10 right-10 text-primary/5 pointer-events-none select-none">
        <Quote className="w-96 h-96" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <SectionHeading
            align="left"
            eyebrow="Our Testimonials"
            titlePrefix="See What They Are"
            accentText="Talking About"
            description="Read honest reviews and stories from international guests who experienced the magic of Dubai and global destinations with Travacations."
          />

          {/* Custom Navigation Arrows */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              ref={prevRef}
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-full border-2 border-border-light flex items-center justify-center text-dark hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              ref={nextRef}
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-full border-2 border-border-light flex items-center justify-center text-dark hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current
            swiper.params.navigation.nextEl = nextRef.current
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonials-swiper pb-4 pt-2"
        >
          {testimonialsData.map((item) => (
            <SwiperSlide key={item.id} className="h-auto">
              <div className="h-full rounded-3xl bg-[#FFF4EE] border border-border-light p-6 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 group relative">
                
                {/* Top Row: Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Quote className="w-5 h-5" />
                  </div>

                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Quote Content */}
                <p className="text-muted-brown text-sm sm:text-base italic leading-relaxed mb-6 flex-1 line-clamp-4">
                  "{item.comment}"
                </p>

                {/* User Info Footer */}
                <div className="pt-4 border-t border-border-light flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-primary"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-dark">{item.name}</h4>
                    <p className="text-[11px] text-muted-brown">{item.role}</p>
                    <span className="text-[10px] uppercase font-bold text-primary tracking-wider mt-0.5 block">
                      Booked: {item.packageBooked}
                    </span>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  )
}