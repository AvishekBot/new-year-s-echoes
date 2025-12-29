import { useEffect, useRef, useState } from 'react';
import ScrollArrow from '../ScrollArrow';

const reflectionLines = [
  "This year taught patience.",
  "It taught boundaries.",
  "It taught silent strength.",
  "Not everything healed, but everything taught.",
];

const ReflectionSection = () => {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          reflectionLines.forEach((_, index) => {
            setTimeout(() => {
              setVisibleLines((prev) => [...prev, index]);
            }, index * 600);
          });
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="reflection" 
      ref={sectionRef}
      className="section-container gradient-lavender"
    >
      <div className="relative z-10 w-full max-w-lg mx-auto px-4 text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-gray-800 mb-12 animate-fade-in">
          Looking Back, Moving Forward
        </h2>
        
        <div className="space-y-6">
          {reflectionLines.map((line, index) => (
            <p
              key={index}
              className={`font-body text-lg sm:text-xl text-gray-700 transition-all duration-700 ${
                visibleLines.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              {line}
            </p>
          ))}
        </div>
      </div>

      <ScrollArrow targetId="mirror" light />
    </section>
  );
};

export default ReflectionSection;
