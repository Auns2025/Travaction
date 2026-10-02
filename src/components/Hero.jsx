import { ArrowRight, Plane } from "lucide-react";
import amalfiImg from "../assets/amalfi_coast.jpg";
import womanImg from "../assets/woman_walking.jpg";
import balloonsImg from "../assets/hot_air_balloons.jpg";

const Home = () => {
  return (
    <div className="relative min-h-[110vh] overflow-hidden flex items-center">
      {/* Decorative SVG Paths */}
      <svg
        className="absolute top-0 left-0 text-[#e6d9ce] -z-10"
        width="150"
        height="200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 150 C 50 150, 100 100, 150 0"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="6 6"
        />
      </svg>
      <svg
        className="absolute bottom-32 left-10 text-[#e6d9ce] -z-10"
        width="200"
        height="150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 100 C 50 100, 100 150, 200 50"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="6 6"
        />
        <Plane
          x="170"
          y="20"
          className="text-primary fill-primary rotate-45"
          size={24}
        />
      </svg>
      
      {/* Bottom left beige blob */}
      <div className="absolute bottom-0 left-0 w-96 h-64 bg-[#e3cdbb] opacity-40 rounded-tr-full -z-10"></div>
      <div className="absolute bottom-[-100px] left-[200px] w-96 h-64 bg-[#d8bca6] opacity-40 rounded-t-full -z-10"></div>

      <div className="max-w-7xl mx-auto w-full px-10 md:px-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="max-w-xl">
          <h1 className="text-6xl md:text-[5.5rem] font-serif leading-[1.1] text-text-dark font-medium">
            Explore <br />
            <span className="font-cursive text-primary font-normal text-7xl md:text-[6.5rem]">the World</span>
          </h1>
          <p className="mt-6 text-text-light text-lg md:text-xl font-medium leading-relaxed max-w-md">
            Let's journey to the most beautiful places and create unforgettable memories.
          </p>
          <button className="mt-10 bg-primary hover:bg-primary-dark transition-colors text-white px-8 py-3.5 rounded-full text-base font-medium flex items-center gap-3">
            Plan Your Trip <ArrowRight size={18} />
          </button>
        </div>

        {/* Right Content - Collage */}
        <div className="grid grid-cols-2 gap-4 h-[600px] mt-10 md:-mt-20 md:mb-20 relative">
           <div className="flex flex-col gap-4">
              <div className="h-[55%] w-full rounded-[4rem] rounded-br-[1rem] overflow-hidden shadow-lg transform transition-transform hover:scale-[1.02]">
                 <img src={amalfiImg} alt="Amalfi Coast" className="w-full h-full object-cover" />
              </div>
              <div className="h-[45%] w-full rounded-[4rem] rounded-tr-[1rem] overflow-hidden shadow-lg transform transition-transform hover:scale-[1.02]">
                 <img src={balloonsImg} alt="Hot Air Balloons" className="w-full h-full object-cover" />
              </div>
           </div>
           <div className="flex flex-col gap-4 mt-12">
              <div className="h-[45%] w-full rounded-[4rem] rounded-bl-[1rem] overflow-hidden shadow-lg transform transition-transform hover:scale-[1.02]">
                 <img src={womanImg} alt="Woman Walking" className="w-full h-full object-cover" />
              </div>
              <div className="h-[55%] w-full rounded-[4rem] rounded-tl-[1rem] overflow-hidden shadow-lg transform transition-transform hover:scale-[1.02]">
                 <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop" alt="Tropical Beach" className="w-full h-full object-cover" />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
