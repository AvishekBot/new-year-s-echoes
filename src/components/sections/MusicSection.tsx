import { useState, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import ScrollArrow from '../ScrollArrow';

const MusicSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="music" className="section-container bg-gradient-to-b from-muted to-background">
      <audio
        ref={audioRef}
        loop
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      />
      
      <div className="relative z-10 w-full max-w-md mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Music className="w-8 h-8 text-primary" />
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground">
            Background Music
          </h2>
        </div>
        
        <p className="font-body text-muted-foreground mb-8">
          Set the mood with some calming tunes
        </p>
        
        <button
          onClick={toggleMusic}
          className={`group relative w-24 h-24 rounded-full flex items-center justify-center mx-auto transition-all duration-500 ${
            isPlaying 
              ? 'bg-primary animate-pulse-glow' 
              : 'bg-muted hover:bg-muted/80'
          }`}
        >
          {isPlaying ? (
            <Volume2 className="w-10 h-10 text-primary-foreground" />
          ) : (
            <VolumeX className="w-10 h-10 text-foreground" />
          )}
        </button>
        
        <p className="font-body text-sm text-muted-foreground mt-4">
          {isPlaying ? 'Music is playing' : 'Tap to play'}
        </p>
      </div>

      <ScrollArrow targetId="share" />
    </section>
  );
};

export default MusicSection;
