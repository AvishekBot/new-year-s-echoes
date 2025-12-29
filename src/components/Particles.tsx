import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  size: number;
  delay: number;
  duration: number;
  color: string;
}

interface ParticlesProps {
  count?: number;
  colors?: string[];
  type?: 'stars' | 'sparkles' | 'confetti';
}

const Particles = ({ 
  count = 30, 
  colors = ['#FFD700', '#FFF', '#C0C0FF', '#FFB6C1'],
  type = 'stars' 
}: ParticlesProps) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        size: type === 'confetti' ? Math.random() * 8 + 4 : Math.random() * 4 + 2,
        delay: Math.random() * 8,
        duration: Math.random() * 6 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    setParticles(newParticles);
  }, [count, colors, type]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`particle ${type === 'sparkles' ? 'animate-twinkle' : ''}`}
          style={{
            left: `${particle.x}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
          }}
        />
      ))}
    </div>
  );
};

export default Particles;
