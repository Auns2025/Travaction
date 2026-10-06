import { ArrowRight, Plane, MapPin, Star, Compass, Users, Award, ShieldCheck, Play } from "lucide-react";
import amalfiImg from "../assets/amalfi_coast.jpg";
import womanImg from "../assets/woman_walking.jpg";
import balloonsImg from "../assets/hot_air_balloons.jpg";

const Home = () => {
  return (
    <section className="relative min-h-[auto] lg:min-h-screen overflow-hidden bg-[#FFF9F3] flex items-center">

      {/* ===== BACKGROUND DECORATIONS ===== */}
      <div className="absolute -top-40 -right-40 w-[400px] sm:w-[500px] lg:w-[600px] h-[400px] sm:h-[500px] lg:h-[600px] bg-[#fa9c24]/15 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[320px] sm:w-[400px] lg:w-[500px] h-[320px] sm:h-[400px] lg:h-[500px] bg-[#015fc9]/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      {/* Dotted flight path (desktop only) */}
      <svg
        className="absolute top-24 left-0 text-[#fa9c24]/40 pointer-events-none hidden lg:block"
        width="500"
        height="300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 0 80 C 150 20, 320 220, 480 120"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="7 8"
        />
        <g transform="translate(470, 95)">
          <Plane className="w-6 h-6 text-[#fa9c24] fill-[#fa9c24] rotate-45" />
        </g>
      </svg>

      <svg
        className="absolute top-28 left-0 text-[#fa9c24]/40 pointer-events-none lg:hidden"
        width="320"
        height="120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M -20 35 C 55 10, 95 105, 175 78 S 255 60, 300 92"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="4 6"
        />
        <g transform="translate(286, 78)">
          <Plane className="w-5 h-5 text-[#fa9c24] fill-[#fa9c24] rotate-45" />
        </g>
      </svg>

      {/* Decorative "Collect Moments" — desktop only */}
      <div className="hidden lg:block absolute left-4 xl:left-8 top-1/2 -translate-y-1/2 z-30 pointer-events-none">
        <div className="font-['Caveat',cursive] text-3xl text-[#1d343e]/80 rotate-[-8deg] leading-snug font-bold relative">
          <span className="block">Collect</span>
          <span className="block">Moments</span>
          <span className="block text-[#fa9c24]">Not Things</span>

          <svg
            className="absolute -top-3 -left-4 w-32 h-32 text-[#1d343e]/30 -z-10"
            viewBox="0 0 100 100"
            fill="none"
          >
            <path
              d="M10 20 C -5 50, 15 85, 45 90 C 70 95, 85 80, 80 60"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <path
              d="M5 25 L 10 20 L 15 28"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="max-w-7xl mx-auto w-full px-4 xs:px-5 sm:px-8 md:px-12 lg:px-16 pt-24 xs:pt-26 sm:pt-28 md:pt-32 pb-0 lg:pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">

          {/* ===== LEFT: TEXT CONTENT ===== */}
          {/* Mobile: order-1 (text first) | Desktop: order-1 (left) */}
          <div className="relative z-10 lg:col-span-6 text-left lg:text-left order-1 max-lg:w-[54%]">
            {/* Eyebrow pill */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 xs:px-3 sm:px-4 py-1.5 rounded-full bg-white border border-[#fa9c24]/30 text-[#fa9c24] text-[8px] xs:text-[9px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest mb-4 sm:mb-5 shadow-sm whitespace-nowrap">
              <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fa9c24] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-[#fa9c24]"></span>
              </span>
              <Compass className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>Premium UAE Travel Agency</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif font-medium text-[#1d343e] leading-[1.05] tracking-tight text-[27px] xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem]">
              Discover the
              <br />
              <span className="relative inline-block">
                <span className="font-cursive italic font-normal text-[#fa9c24] text-[34px] xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6rem] whitespace-nowrap">
                  Extraordinary
                </span>
                <svg
                  className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-3 sm:h-4 text-[#fa9c24]/50"
                  viewBox="0 0 300 20"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 12 C 60 4, 120 18, 180 8 C 220 2, 260 14, 298 6"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              with<br className="lg:hidden" /> Travacations
            </h1>

            {/* Subtext */}
            <p className="mt-4 sm:mt-6 text-[#1d343e]/70 text-[11px] xs:text-xs sm:text-base md:text-lg lg:text-xl font-medium leading-relaxed max-w-xl mx-0 lg:mx-0">
              Bespoke luxury journeys, desert adventures, and unforgettable global escapes — crafted just for you from the heart of Dubai.
            </p>

            {/* CTA buttons */}
            <div className="mt-5 sm:mt-8 lg:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 justify-start lg:justify-start">
              <button className="group w-full sm:w-auto max-lg:max-w-[180px] bg-[#fa9c24] hover:bg-[#e08b1d] transition-all duration-300 text-white px-4 xs:px-6 sm:px-8 py-3 sm:py-4 rounded-full text-[10px] xs:text-xs sm:text-base font-bold uppercase tracking-wider shadow-lg shadow-[#fa9c24]/30 hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2.5 sm:gap-3">
                Plan Your Trip
                <ArrowRight size={16} className="sm:hidden transition-transform duration-300 group-hover:translate-x-1" />
                <ArrowRight size={18} className="hidden sm:block transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button className="group w-full sm:w-auto max-lg:max-w-[180px] bg-white hover:bg-[#1d343e] hover:text-white border border-[#1d343e]/15 text-[#1d343e] px-4 xs:px-6 py-3 sm:py-4 rounded-full text-[10px] xs:text-xs sm:text-base font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2.5 sm:gap-3">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#fa9c24]/15 group-hover:bg-[#fa9c24]/30 flex items-center justify-center transition-colors">
                  <Play size={10} className="sm:hidden fill-current ml-0.5" />
                  <Play size={12} className="hidden sm:block fill-current ml-0.5" />
                </span>
                Watch Here
              </button>
            </div>

            {/* Trust badges row */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 lg:gap-6 max-lg:hidden">
              <div className="flex items-center gap-1.5 sm:gap-2 text-[#1d343e]/60">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#fa9c24]" />
                <span className="text-[10px] xs:text-[11px] sm:text-xs font-bold uppercase tracking-wider">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-[#1d343e]/60">
                <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#fa9c24]" />
                <span className="text-[10px] xs:text-[11px] sm:text-xs font-bold uppercase tracking-wider">Award Winning</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-[#1d343e]/60">
                <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#fa9c24]" />
                <span className="text-[10px] xs:text-[11px] sm:text-xs font-bold uppercase tracking-wider">24/7 Support</span>
              </div>
            </div>

            {/* Trust stats row */}
            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[#1d343e]/10 flex flex-wrap items-center justify-center lg:justify-start gap-4 xs:gap-6 sm:gap-10 max-lg:hidden">
              <div className="text-center lg:text-left">
                <div className="flex items-center gap-1 justify-center lg:justify-start">
                  <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#fa9c24] text-[#fa9c24]" />
                  <span className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#1d343e] font-serif">4.9</span>
                </div>
                <p className="text-[9px] xs:text-[10px] sm:text-xs font-bold text-[#1d343e]/60 uppercase tracking-wider mt-0.5 sm:mt-1">
                  Traveler Rating
                </p>
              </div>

              <div className="w-px h-8 sm:h-10 bg-[#1d343e]/10 hidden sm:block" />

              <div className="text-center lg:text-left">
                <span className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#1d343e] font-serif">15+</span>
                <p className="text-[9px] xs:text-[10px] sm:text-xs font-bold text-[#1d343e]/60 uppercase tracking-wider mt-0.5 sm:mt-1">
                  Years Experience
                </p>
              </div>

              <div className="w-px h-8 sm:h-10 bg-[#1d343e]/10 hidden sm:block" />

              <div className="text-center lg:text-left">
                <span className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#1d343e] font-serif">50K+</span>
                <p className="text-[9px] xs:text-[10px] sm:text-xs font-bold text-[#1d343e]/60 uppercase tracking-wider mt-0.5 sm:mt-1">
                  Happy Travelers
                </p>
              </div>
            </div>
          </div>

          {/* ===== RIGHT: IMAGE COLLAGE ===== */}
          {/* Mobile: order-2 (image second) | Desktop: order-2 (right) */}
          <div className="lg:col-span-6 order-2 relative max-lg:absolute max-lg:top-[150px] max-lg:right-0 max-lg:w-[42%] max-lg:z-0">
            <div className="relative w-full max-w-[300px] xs:max-w-xs sm:max-w-md md:max-w-lg lg:max-w-none mx-auto">

              {/* Main large image */}
              <div className="relative rounded-2xl xs:rounded-3xl sm:rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-[3px] sm:border-4 border-white aspect-[4/5] group">
               <img
  src={amalfiImg}
  alt="Amalfi Coast"
  fetchPriority="high"
  loading="eager"
  decoding="async"
  width="800"
  height="1000"
  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
/>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1d343e]/50 via-transparent to-transparent" />

                {/* Location pill overlay */}
                <div className="absolute bottom-2.5 xs:bottom-3 sm:bottom-5 left-2.5 xs:left-3 sm:left-5 right-2.5 xs:right-3 sm:right-5 flex items-center justify-between bg-white/95 backdrop-blur-md rounded-xl xs:rounded-2xl px-2.5 xs:px-3 sm:px-4 py-2 sm:py-3 shadow-lg gap-2">
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                    <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 rounded-full bg-[#fa9c24] flex items-center justify-center text-white shrink-0">
                      <MapPin className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[8px] xs:text-[9px] sm:text-[10px] font-bold text-[#1d343e]/60 uppercase tracking-wider truncate">
                        Featured Trip
                      </p>
                      <p className="text-[10px] xs:text-[11px] sm:text-xs md:text-sm font-bold text-[#1d343e] font-serif truncate">
                        Amalfi Coast, Italy
                      </p>
                    </div>
                  </div>
                  <span className="text-[9px] xs:text-[10px] sm:text-xs font-bold text-[#fa9c24] uppercase tracking-wider whitespace-nowrap">
                    $1,299
                  </span>
                </div>
              </div>

              {/* Floating small image — top right */}
              <div className="absolute -top-3 -right-3 xs:-top-4 xs:-right-4 sm:-top-6 sm:-right-6 w-20 h-20 xs:w-24 xs:h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-xl xs:rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-[3px] sm:border-4 border-white rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-500 cursor-pointer">
                <img src={balloonsImg} alt="Hot Air Balloons" className="w-full h-full object-cover" />
              </div>

              {/* Floating small image — bottom left */}
              <div className="absolute -bottom-3 -left-3 xs:-bottom-4 xs:-left-4 sm:-bottom-6 sm:-left-6 w-16 h-20 xs:w-20 xs:h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-xl xs:rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-[3px] sm:border-4 border-white -rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-500 cursor-pointer">
                <img src={womanImg} alt="Traveler" className="w-full h-full object-cover" />
              </div>

              {/* Live Trip badge - top left */}
              <div className="absolute top-3 -left-2 xs:top-4 xs:-left-3 sm:top-8 sm:-left-4 z-20 bg-white rounded-xl xs:rounded-2xl px-2 xs:px-3 py-1.5 xs:py-2 sm:px-4 sm:py-3 shadow-xl border border-[#1d343e]/10 flex items-center gap-1.5 xs:gap-2 sm:gap-3">
                <div className="relative shrink-0">
                  <div className="w-2 h-2 xs:w-2.5 xs:h-2.5 rounded-full bg-green-500"></div>
                  <div className="absolute inset-0 w-2 h-2 xs:w-2.5 xs:h-2.5 rounded-full bg-green-500 animate-ping"></div>
                </div>
                <div className="min-w-0">
                  <p className="text-[7px] xs:text-[8px] sm:text-[10px] font-bold text-[#1d343e]/60 uppercase tracking-wider">
                    <span className="hidden lg:inline">Live Now</span>
                    <span className="lg:hidden">Live Your</span>
                  </p>
                  <p className="text-[9px] xs:text-[10px] sm:text-xs font-bold text-[#1d343e] font-serif whitespace-nowrap">
                    <span className="hidden lg:inline">128 booked</span>
                    <span className="lg:hidden">Next Adventure</span>
                  </p>
                </div>
              </div>

              {/* Decorative dashed circles — desktop only */}
              <div className="absolute -z-10 -top-8 -left-8 w-40 h-40 border-2 border-dashed border-[#fa9c24]/40 rounded-full hidden lg:block" />
              <div className="absolute -z-10 -bottom-8 -right-8 w-32 h-32 border-2 border-dashed border-[#015fc9]/30 rounded-full hidden lg:block" />

            </div>
          </div>

          <div className="order-3 col-span-1 lg:hidden mt-8 border-y border-[#1d343e]/10 py-4 flex items-center justify-between gap-2">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1">
                <Star className="w-3.5 h-3.5 fill-[#fa9c24] text-[#fa9c24]" />
                <span className="text-xl font-extrabold text-[#1d343e] font-serif">4.9</span>
              </div>
              <p className="text-[8px] xs:text-[9px] font-bold text-[#1d343e]/60 uppercase tracking-wide mt-1">
                Traveller Rating
              </p>
            </div>
            <div className="w-px h-10 bg-[#1d343e]/10" />
            <div className="text-center">
              <span className="text-xl font-extrabold text-[#1d343e] font-serif">15+</span>
              <p className="text-[8px] xs:text-[9px] font-bold text-[#1d343e]/60 uppercase tracking-wide mt-1">
                Travel Experiences
              </p>
            </div>
            <div className="w-px h-10 bg-[#1d343e]/10" />
            <div className="text-center">
              <span className="text-xl font-extrabold text-[#1d343e] font-serif">50K+</span>
              <p className="text-[8px] xs:text-[9px] font-bold text-[#1d343e]/60 uppercase tracking-wide mt-1">
                Happy Travellers
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative "Good Vibes" — desktop only */}
      <div className="hidden lg:block absolute bottom-8 right-4 xl:right-8 z-30 pointer-events-none">
        <div className="relative font-['Caveat',cursive] text-2xl text-[#1d343e]/85 font-bold text-center p-5">
          <span className="block leading-tight">Good</span>
          <span className="block leading-tight">Vibes</span>
          <span className="block leading-tight text-[#fa9c24]">Always</span>

          <svg
            className="absolute inset-0 w-full h-full text-[#1d343e]/35 -z-10"
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

      {/* Scroll indicator — desktop only */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-[#1d343e]/40">
        <span className="text-[10px] font-bold uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-[#1d343e]/30 animate-pulse" />
      </div>

    </section>
  );
};

export default Home;