import Particles from '../Particles';
import Fireworks from '../Fireworks';
import ScrollArrow from '../ScrollArrow';

interface HeroSectionProps {
  peaceModeActive: boolean;
}

const HeroSection = ({ peaceModeActive }: HeroSectionProps) => {
  return (
    <section 
      id="hero" 
      className={`section-container ${peaceModeActive ? 'gradient-peace' : 'gradient-hero'} transition-all duration-1000`}
    >
      {!peaceModeActive && (
        <>
          <Particles count={40} type="stars" />
          <Fireworks active={!peaceModeActive} />
        </>
      )}
      
      <div className="relative z-10 text-center max-w-lg mx-auto px-4">
        <h1 
          className={`font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up ${
            peaceModeActive ? 'text-gray-800' : 'text-white text-glow'
          }`}
        >
          🎉 Happy New Year 🎉
        </h1>
        
        <p 
          className={`font-body text-lg sm:text-xl md:text-2xl mb-4 animate-fade-in-up ${
            peaceModeActive ? 'text-gray-700' : 'text-white/90 text-glow-soft'
          }`}
          style={{ animationDelay: '0.2s' }}
        >
          A New Beginning • New Hope • New Growth
        </p>
        
        <p 
          className={`font-script text-xl sm:text-2xl animate-fade-in-up ${
            peaceModeActive ? 'text-gray-600' : 'text-white/70'
          }`}
          style={{ animationDelay: '0.4s' }}
        >
          Every ending carries a beginning.
        </p>
      </div>

      <ScrollArrow targetId="greeting" light={peaceModeActive} />
    </section>
  );
};

export default HeroSection;
