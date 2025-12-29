import { useEffect, useState } from 'react';

interface Firework {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  delay: number;
}

interface FireworksProps {
  active?: boolean;
}

const Fireworks = ({ active = true }: FireworksProps) => {
  const [fireworks, setFireworks] = useState<Firework[]>([]);

  useEffect(() => {
    if (!active) {
      setFireworks([]);
      return;
    }

    const colors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#A855F7', '#3B82F6', '#F472B6'];
    const newFireworks: Firework[] = [];
    
    for (let i = 0; i < 15; i++) {
      newFireworks.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 60 + 10,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 80 + 40,
        delay: Math.random() * 5,
      });
    }
    
    setFireworks(newFireworks);
  }, [active]);

  if (!active) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {fireworks.map((fw) => (
        <div
          key={fw.id}
          className="firework"
          style={{
            left: `${fw.x}%`,
            top: `${fw.y}%`,
            width: `${fw.size}px`,
            height: `${fw.size}px`,
            background: `radial-gradient(circle, ${fw.color} 0%, transparent 70%)`,
            animationDelay: `${fw.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Fireworks;
