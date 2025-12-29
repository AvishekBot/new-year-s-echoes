import { Heart } from 'lucide-react';

const FooterSection = () => {
  return (
    <section id="footer" className="section-container gradient-footer min-h-[50vh]">
      <div className="relative z-10 w-full max-w-md mx-auto px-4 text-center">
        <p className="font-script text-xl sm:text-2xl text-white/80 mb-4 animate-fade-in">
          Made with intention, not noise.
        </p>
        
        <div className="flex items-center justify-center gap-2 mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <span className="font-body text-white/60">By</span>
          <span className="font-display text-xl text-white font-semibold">Avishek</span>
          <Heart className="w-5 h-5 text-red-400 animate-pulse" />
        </div>
        
        <p className="font-body text-white/60 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Choose growth. Choose peace.
        </p>
        
        <div className="mt-10 pt-8 border-t border-white/10 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <p className="font-body text-sm text-white/40">
            © {new Date().getFullYear()} • Wishing you a beautiful year ahead
          </p>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
