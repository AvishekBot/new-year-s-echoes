import { useState, useEffect } from 'react';
import { PenLine, Save } from 'lucide-react';
import ScrollArrow from '../ScrollArrow';

const JournalSection = () => {
  const [journalEntry, setJournalEntry] = useState('');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedEntry = localStorage.getItem('newYearJournal');
    if (savedEntry) {
      setJournalEntry(savedEntry);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('newYearJournal', journalEntry);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <section id="journal" className="section-container bg-gradient-to-b from-background to-muted">
      <div className="relative z-10 w-full max-w-md mx-auto px-4">
        <div className="card-glass p-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <PenLine className="w-6 h-6 text-primary" />
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground">
              Private Reflection
            </h2>
          </div>
          
          <p className="font-body text-muted-foreground text-center mb-6">
            A safe space for your thoughts
          </p>
          
          <textarea
            value={journalEntry}
            onChange={(e) => setJournalEntry(e.target.value)}
            placeholder="Write something you want to leave behind or carry forward…"
            className="w-full h-40 px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:outline-none text-foreground font-body resize-none transition-all duration-300"
          />
          
          <button
            onClick={handleSave}
            className="w-full mt-4 py-3 px-6 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Save className="w-5 h-5" />
            {saved ? 'Saved ✓' : 'Save Privately'}
          </button>
          
          <p className="font-body text-xs text-muted-foreground text-center mt-3">
            Saved locally on your device only
          </p>
        </div>
      </div>

      <ScrollArrow targetId="timecapsule" />
    </section>
  );
};

export default JournalSection;
