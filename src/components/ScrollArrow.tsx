import { ChevronDown } from 'lucide-react';

interface ScrollArrowProps {
  targetId: string;
  light?: boolean;
}

const ScrollArrow = ({ targetId, light = false }: ScrollArrowProps) => {
  const scrollToSection = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollToSection}
      className="scroll-arrow group"
      aria-label="Scroll to next section"
    >
      <div className={`p-3 rounded-full backdrop-blur-sm transition-all duration-300 group-hover:scale-110 ${
        light 
          ? 'bg-gray-800/20 text-gray-700' 
          : 'bg-white/10 text-white/80'
      }`}>
        <ChevronDown className="w-6 h-6" />
      </div>
    </button>
  );
};

export default ScrollArrow;
