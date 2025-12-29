import { useState, useEffect } from 'react';
import { Clock, Send } from 'lucide-react';
import ScrollArrow from '../ScrollArrow';

const TimeCapsuleSection = () => {
  const [futureNote, setFutureNote] = useState('');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedNote = localStorage.getItem('newYearTimeCapsule');
    if (savedNote) {
      setFutureNote(savedNote);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('newYearTimeCapsule', futureNote);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <section id="timecapsule" className="section-container gradient-lavender">
      <div className="relative z-10 w-full max-w-md mx-auto px-4">
        <div className="card-warm p-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Clock className="w-6 h-6 text-primary" />
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-gray-800">
              A Note for Your Future Self
            </h2>
          </div>
          
          <p className="font-script text-lg text-gray-600 text-center mb-6">
            Growth is rarely loud
          </p>
          
          <textarea
            value={futureNote}
            onChange={(e) => setFutureNote(e.target.value)}
            placeholder="Write a message to your future self…"
            className="w-full h-40 px-4 py-3 rounded-xl bg-white/70 border-2 border-primary/20 focus:border-primary focus:outline-none text-gray-800 font-body resize-none transition-all duration-300"
          />
          
          <button
            onClick={handleSave}
            className="w-full mt-4 py-3 px-6 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Send className="w-5 h-5" />
            {saved ? 'Sealed ✓' : 'Seal Time Capsule'}
          </button>
        </div>
      </div>

      <ScrollArrow targetId="random" light />
    </section>
  );
};

export default TimeCapsuleSection;
