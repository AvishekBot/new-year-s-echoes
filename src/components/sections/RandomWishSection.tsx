import { useState } from 'react';
import { Sparkles, RefreshCw } from 'lucide-react';
import ScrollArrow from '../ScrollArrow';

const randomWishes = [
  "May your coffee be strong and your Monday be short ☕",
  "Wishing you unexpected blessings and pleasant surprises 🎁",
  "May you find courage in the quiet moments 🌅",
  "Here's to new chapters and fresh starts 📖",
  "May your heart find what it's been searching for 💫",
  "Wishing you peace that passes understanding 🕊️",
  "May your hard work bloom into beautiful results 🌸",
  "Here's to less comparison and more contentment 🌿",
  "May you attract what you deserve 🧲",
  "Wishing you clarity in confusion and calm in chaos ✨",
  "May this year be kinder than the last 🤍",
  "Here's to growth that feels good 🌱",
  "May your boundaries be respected and your peace protected 🛡️",
  "Wishing you laughter that heals and love that stays 💖",
  "May you become everything you've been working towards 🎯",
];

const RandomWishSection = () => {
  const [currentWish, setCurrentWish] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const generateWish = () => {
    setIsAnimating(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * randomWishes.length);
      setCurrentWish(randomWishes[randomIndex]);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section id="random" className="section-container bg-gradient-to-b from-muted to-background">
      <div className="relative z-10 w-full max-w-md mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Sparkles className="w-8 h-8 text-accent" />
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground">
            Random Wish
          </h2>
        </div>
        
        <p className="font-body text-muted-foreground mb-8">
          Let the universe speak to you
        </p>
        
        <button
          onClick={generateWish}
          className="py-4 px-8 rounded-2xl bg-gradient-to-r from-accent to-primary text-accent-foreground font-bold text-lg flex items-center justify-center gap-3 mx-auto transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg animate-pulse-glow"
        >
          <RefreshCw className={`w-6 h-6 ${isAnimating ? 'animate-spin' : ''}`} />
          Generate My Wish
        </button>
        
        {currentWish && (
          <div className={`mt-8 card-glass p-8 transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <p className="font-body text-xl text-foreground leading-relaxed">
              {currentWish}
            </p>
          </div>
        )}
      </div>

      <ScrollArrow targetId="peace" />
    </section>
  );
};

export default RandomWishSection;
