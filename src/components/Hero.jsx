export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[calc(100vh-85px)] max-h-[840px] flex items-center px-6 md:px-12 lg:px-16 py-6 lg:py-8 bg-cream overflow-hidden"
      aria-label="Hero Section"
    >
      {/* Layer 1: Soft Beige Background Wave */}
      <svg
        className="absolute bottom-0 left-0 w-full sm:w-[75%] h-[68%] pointer-events-none z-0 opacity-75"
        viewBox="0 0 800 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M -50 480 L -50 200 C 140 160, 320 250, 460 320 C 600 390, 700 330, 850 480 Z"
          fill="#EADCCB"
        />
      </svg>

      {/* Layer 2: Main Warm Sand Blob Shape (Matching Reference) */}
      <svg
        className="absolute bottom-0 left-0 w-[90%] sm:w-[58%] h-[50%] pointer-events-none z-0 opacity-90"
        viewBox="0 0 650 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M -50 360 L -50 160 C 90 120, 200 110, 310 190 C 420 270, 500 280, 700 360 Z"
          fill="#CCA27E"
        />
      </svg>

      {/* Decorative Dashed Flight Path (Top Left Curve) */}
      <svg
        className="hidden md:block absolute top-[8%] left-[2%] w-[120px] h-[250px] pointer-events-none z-10 opacity-60"
        viewBox="0 0 140 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M 15 250 C 55 190, 110 120, 35 35 C 20 15, 10 25, 25 5"
          stroke="#B59678"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <g transform="translate(22, 2) rotate(-35)">
          <path d="M8 0L10 4L16 6L10 8L8 14L6 8L0 6L6 4L8 0Z" fill="#A96F3E" />
        </g>
      </svg>

      {/* Decorative Dashed Flight Path (Bottom Left Curve with Airplane) */}
      <svg
        className="hidden md:block absolute bottom-[10%] left-[3%] w-[220px] h-[130px] pointer-events-none z-10 opacity-75"
        viewBox="0 0 240 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M 10 110 C 80 135, 150 90, 210 35"
          stroke="#B59678"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <g transform="translate(210, 30) rotate(38)">
          <path d="M8 0L10 4L16 6L10 8L8 14L6 8L0 6L6 4L8 0Z" fill="#A96F3E" />
        </g>
      </svg>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
        {/* Left Column Content Area */}
        <div className="w-full lg:w-[42%] max-w-lg flex flex-col justify-center">
          <div className="flex flex-col mb-4 select-none">
            <h1 className="flex flex-col">
              <span className="font-serif text-5xl sm:text-6xl lg:text-[5.2rem] font-semibold text-dark-brown leading-[0.92] tracking-tight">
                Explore
              </span>
              <span className="font-script text-5xl sm:text-6xl lg:text-[4.8rem] text-warm-brown leading-none -mt-2 sm:-mt-4 ml-1">
                the World
              </span>
            </h1>
          </div>

          <p className="text-muted-brown text-base sm:text-lg leading-relaxed font-normal mb-8 max-w-sm">
            Let’s journey to the most beautiful places
            <br className="hidden sm:inline" /> and create unforgettable memories.
          </p>

          <div>
            <button
              type="button"
              className="inline-flex items-center gap-3 bg-warm-brown hover:bg-warm-brown-dark text-white px-7 py-3.5 rounded-full text-base font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 group cursor-pointer"
            >
              <span>Plan Your Trip</span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Column Asymmetrical Interlocking Image Collage */}
        <div className="w-full lg:w-[56%] flex justify-center lg:justify-end items-center">
          <div className="grid grid-cols-[1.15fr_0.85fr] gap-3.5 sm:gap-4 w-full max-w-[650px] relative">
            {/* Top Left: Positano Amalfi Coast */}
            <div className="relative overflow-hidden h-[260px] sm:h-[315px] rounded-[80px_35px_40px_70px] border-[5px] sm:border-[6px] border-white bg-white shadow-md hover:shadow-xl transition-all duration-500 group">
              <img
                src="/images/hero-coast.jpg"
                alt="Amalfi Coast Positano cliffside village with cathedral dome"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 rounded-[74px_29px_34px_64px]"
                loading="eager"
              />
            </div>

            {/* Top Right: Traveler in Mediterranean Street */}
            <div className="relative overflow-hidden h-[280px] sm:h-[330px] -mt-2 rounded-[40px_60px_45px_75px] border-[5px] sm:border-[6px] border-white bg-white shadow-md hover:shadow-xl transition-all duration-500 group">
              <img
                src="/images/hero-traveler.jpg"
                alt="Female traveler walking down sunny Mediterranean alley"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 rounded-[34px_54px_39px_69px]"
                loading="eager"
              />
            </div>

            {/* Bottom Left: Cappadocia Balloons */}
            <div className="relative overflow-hidden h-[180px] sm:h-[230px] w-[86%] ml-auto mt-1 rounded-[75px_35px_60px_65px] border-[5px] sm:border-[6px] border-white bg-white shadow-md hover:shadow-xl transition-all duration-500 group">
              <img
                src="/images/hero-balloons.jpg"
                alt="Hot air balloons hovering over Cappadocia rock valleys"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 rounded-[69px_29px_54px_59px]"
                loading="eager"
              />
            </div>

            {/* Bottom Right: Maldives Tropical Beach */}
            <div className="relative overflow-hidden h-[170px] sm:h-[215px] w-[108%] -ml-[8%] -mt-3 rounded-[65px_45px_50px_60px] border-[5px] sm:border-[6px] border-white bg-white shadow-md hover:shadow-xl transition-all duration-500 group">
              <img
                src="/images/hero-beach.jpg"
                alt="Tropical beach resort with leaning palm tree and wooden bungalow"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 rounded-[59px_39px_44px_54px]"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
