import ScrollArrow from '../ScrollArrow';

const MirrorSection = () => {
  return (
    <section id="mirror" className="section-container gradient-soft">
      <div className="relative z-10 w-full max-w-lg mx-auto px-4 text-center">
        <p className="font-body text-lg text-gray-600 mb-4 animate-fade-in">
          Before wishing others…
        </p>
        
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-gray-800 mb-6 animate-fade-in-up breathing">
          don't forget yourself
        </h2>
        
        <div className="card-warm p-8 animate-scale-in" style={{ animationDelay: '0.3s' }}>
          <p className="font-script text-3xl sm:text-4xl text-primary breathing">
            Happy New Year, You 🤍
          </p>
        </div>
        
        <p className="font-body text-gray-600 mt-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          You deserve every beautiful thing coming your way
        </p>
      </div>

      <ScrollArrow targetId="journal" light />
    </section>
  );
};

export default MirrorSection;
