import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import ScrollArrow from '../ScrollArrow';

const GreetingSection = () => {
  const [name, setName] = useState('');
  const [showWish, setShowWish] = useState(false);

  const handleShowWish = () => {
    if (name.trim()) {
      setShowWish(true);
    }
  };

  return (
    <section id="greeting" className="section-container gradient-warm">
      <div className="relative z-10 w-full max-w-md mx-auto px-4">
        <div className="card-warm p-8 text-center">
          <Sparkles className="w-10 h-10 mx-auto mb-4 text-primary" />
          
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">
            Personalized Wish
          </h2>
          
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setShowWish(false);
            }}
            placeholder="Enter your name"
            className="w-full px-4 py-3 rounded-xl border-2 border-primary/20 focus:border-primary focus:outline-none text-center text-gray-800 font-body text-lg mb-4 transition-all duration-300"
          />
          
          <button
            onClick={handleShowWish}
            disabled={!name.trim()}
            className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-lg transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100 shadow-lg"
          >
            See Your Wish ✨
          </button>
          
          {showWish && (
            <div className="mt-6 p-6 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 animate-fade-in-up">
              <p className="font-display text-2xl text-gray-800 mb-2">
                Happy New Year, <span className="text-primary font-bold">{name}</span> ✨
              </p>
              <p className="font-body text-gray-600">
                This wish is just for you
              </p>
            </div>
          )}
        </div>
      </div>

      <ScrollArrow targetId="mood" light />
    </section>
  );
};

export default GreetingSection;
