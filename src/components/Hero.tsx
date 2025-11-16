import { ArrowRight, Sparkles, Zap, Camera, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

const teamPhotos = [
  {
    id: 1,
    image: '/images/home/1.jpeg',
    caption: 'Team HackThem',
  },
  {
    id: 2,
    image: '/images/home/2.jpeg',
  },
  {
    id: 3,
    image: '/images/home/3.jpeg',
  },
  {
    id: 4,
    image: '/images/home/IMG_9566.jpg',
  },
  {
    id: 5,
    image: '/images/home/ABC_7391.JPEG',
  },
];

export default function Hero({ onNavigate }: HeroProps) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % teamPhotos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + teamPhotos.length) % teamPhotos.length);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 page-transition">
      <div className="max-w-6xl mx-auto text-center space-y-16">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card accent-border">
            <Sparkles className="w-4 h-4 text-gray-300" />
            <span className="text-sm text-gray-300 font-medium">Elite Hackathon Team</span>
          </div>

          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tight">
            <span className="gradient-text">
              HackThem
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
            We build, break, and innovate—one hackathon at a time
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto my-16">
          {/* Mobile Frame */}
          <div className="md:hidden mx-auto max-w-xs">
            <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl border-4 border-gray-700">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-3xl z-10"></div>
              <div className="relative bg-black rounded-[2.5rem] overflow-hidden aspect-[9/16] silver-glow">
                <img
                  src={teamPhotos[currentPhotoIndex].image}
                  alt={teamPhotos[currentPhotoIndex].caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white text-xs font-medium">{teamPhotos[currentPhotoIndex].caption}</p>
                </div>

                <button
                  onClick={prevPhoto}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full smooth-transition"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={nextPhoto}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full smooth-transition"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-600 rounded-full"></div>
            </div>

            <div className="flex justify-center gap-2 mt-4">
              {teamPhotos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPhotoIndex(index)}
                  className={`w-2 h-2 rounded-full smooth-transition ${
                    index === currentPhotoIndex ? 'bg-gray-300 w-6' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Laptop Frame */}
          <div className="hidden md:block">
            <div className="relative">
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-2xl p-3 border-4 border-gray-700 border-b-0">
                <div className="bg-black rounded-t-xl overflow-hidden aspect-[16/10] silver-glow relative">
                  <img
                    src={teamPhotos[currentPhotoIndex].image}
                    alt={teamPhotos[currentPhotoIndex].caption}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <p className="text-white text-sm font-medium">{teamPhotos[currentPhotoIndex].caption}</p>
                  </div>

                  <button
                    onClick={prevPhoto}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 rounded-full smooth-transition hover-lift"
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </button>
                  <button
                    onClick={nextPhoto}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 rounded-full smooth-transition hover-lift"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>
              <div className="relative h-6 bg-gradient-to-b from-gray-800 to-gray-900 border-4 border-t-0 border-gray-700">
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-2 bg-gray-700 rounded-t-lg"></div>
              </div>
              <div className="h-3 bg-gradient-to-b from-gray-900 to-gray-800 mx-auto" style={{ width: '60%', clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)' }}></div>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {teamPhotos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPhotoIndex(index)}
                  className={`h-2 rounded-full smooth-transition hover:bg-gray-400 ${
                    index === currentPhotoIndex ? 'bg-gray-300 w-8' : 'bg-gray-600 w-2'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('Projects')}
            className="group px-8 py-4 bg-gradient-to-r from-gray-200 to-gray-300 text-black rounded-xl hover:from-gray-300 hover:to-gray-400 smooth-transition hover-lift flex items-center gap-3 font-semibold silver-glow-hover"
          >
            <Zap className="w-5 h-5" />
            <span>View Projects</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 smooth-transition" />
          </button>

          <button
            onClick={() => onNavigate('Team')}
            className="px-8 py-4 glass-card border border-gray-400/30 rounded-xl hover:bg-white/5 hover:border-gray-300/50 smooth-transition hover-lift text-gray-200 font-semibold"
          >
            Meet the Team
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-5xl mx-auto">
          {[
            { label: 'Hackathons Won', value: '5+' },
            { label: 'Projects Built', value: '20+' },
            { label: 'Team Members', value: '5' },
          ].map((stat, index) => (
            <div
              key={index}
              className="glass-card border border-gray-400/20 rounded-2xl p-10 hover:glass-card-hover hover:silver-glow-hover smooth-transition"
            >
              <div className="text-6xl font-bold silver-accent mb-3">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
