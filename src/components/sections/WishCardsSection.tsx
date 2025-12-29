import { useEffect, useRef, useState } from 'react';
import ScrollArrow from '../ScrollArrow';

const wishCards = [
  { emoji: '🌱', message: 'Growth without pressure' },
  { emoji: '🕊️', message: 'Peace over chaos' },
  { emoji: '💪', message: 'Strength without bitterness' },
  { emoji: '✨', message: 'Becoming, not proving' },
  { emoji: '🎯', message: 'Consistency over motivation' },
  { emoji: '🌊', message: 'Flow, not force' },
  { emoji: '🔥', message: 'Passion with patience' },
  { emoji: '🌙', message: 'Rest without guilt' },
];

const WishCardsSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting && !visibleCards.includes(index)) {
            setVisibleCards((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [visibleCards]);

  return (
    <section id="cards" className="section-container bg-gradient-to-b from-muted to-background py-20">
      <div className="relative z-10 w-full max-w-md mx-auto px-4">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground text-center mb-12">
          Wishes for the Year
        </h2>
        
        <div className="grid grid-cols-2 gap-4">
          {wishCards.map((card, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
              className={`card-glass p-6 text-center transition-all duration-500 hover:scale-105 cursor-pointer ${
                visibleCards.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <span className="text-4xl mb-3 block">{card.emoji}</span>
              <p className="font-body text-sm sm:text-base text-foreground/90">
                {card.message}
              </p>
            </div>
          ))}
        </div>
      </div>

      <ScrollArrow targetId="reflection" />
    </section>
  );
};

export default WishCardsSection;
