import { Moon, Sun } from 'lucide-react';
import ScrollArrow from '../ScrollArrow';

interface PeaceModeSectionProps {
  peaceModeActive: boolean;
  setPeaceModeActive: (active: boolean) => void;
}

const PeaceModeSection = ({ peaceModeActive, setPeaceModeActive }: PeaceModeSectionProps) => {
  return (
    <section id="peace" className={`section-container transition-all duration-1000 ${peaceModeActive ? 'gradient-peace' : 'bg-gradient-to-b from-background to-muted'}`}>
      <div className="relative z-10 w-full max-w-md mx-auto px-4 text-center">
        <h2 className={`font-display text-3xl sm:text-4xl font-semibold mb-6 transition-colors duration-500 ${peaceModeActive ? 'text-gray-800' : 'text-foreground'}`}>
          Peace Mode
        </h2>
        
        <p className={`font-body mb-8 transition-colors duration-500 ${peaceModeActive ? 'text-gray-600' : 'text-muted-foreground'}`}>
          Sometimes celebration is quiet
        </p>
        
        <button
          onClick={() => setPeaceModeActive(!peaceModeActive)}
          className={`group relative inline-flex items-center gap-4 py-4 px-8 rounded-full font-semibold text-lg transition-all duration-500 ${
            peaceModeActive 
              ? 'bg-gray-800 text-white' 
              : 'bg-white/10 text-foreground border border-border hover:bg-white/20'
          }`}
        >
          {peaceModeActive ? (
            <>
              <Sun className="w-6 h-6" />
              Return to Celebration
            </>
          ) : (
            <>
              <Moon className="w-6 h-6" />
              Switch to Peace Mode
            </>
          )}
        </button>
        
        {peaceModeActive && (
          <div className="mt-10 animate-fade-in">
            <p className="font-script text-2xl sm:text-3xl text-gray-700 leading-relaxed">
              Not every celebration is loud.
              <br />
              Some are silent promises.
            </p>
          </div>
        )}
      </div>

      <ScrollArrow targetId="music" light={peaceModeActive} />
    </section>
  );
};

export default PeaceModeSection;
