import { useState } from 'react';
import { Users, Heart, Globe } from 'lucide-react';
import ScrollArrow from '../ScrollArrow';

const friendsMessages = [
  "Cheers to laughter, late nights, and memories yet to be made 🥂",
  "May your dreams be bold and your coffee strong ☕",
  "Here's to new adventures and less stress 🌟",
  "Friendship and fun, all year long 🎯",
  "May this year bring endless moments worth remembering 🎊",
  "To late-night talks and spontaneous plans 🌙",
];

const lovedMessages = [
  "Thank you for being my safe place ❤️",
  "May this year treat you gently and kindly 🌸",
  "Wishing health, joy, and endless smiles for you 🌈",
  "Love and warmth to your heart, always 💖",
  "You make every day brighter just by being you 🌻",
  "Here's to more love, more laughter, more us 💕",
];

const everyoneMessages = [
  "May peace find you quietly 🌿",
  "Wishing kindness and success to all 🌍",
  "May growth come without struggle or pain 💪",
  "Hope, clarity, and calm for every day ✨",
  "May your path be lit with purpose 🔥",
  "Wishing you courage for the unknown ahead 🦋",
];

const MoodSection = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [currentMessage, setCurrentMessage] = useState('');

  const getRandomMessage = (messages: string[]) => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
  };

  const handleMoodClick = (mood: string) => {
    setSelectedMood(mood);
    let messages: string[] = [];
    
    switch (mood) {
      case 'friends':
        messages = friendsMessages;
        break;
      case 'loved':
        messages = lovedMessages;
        break;
      case 'everyone':
        messages = everyoneMessages;
        break;
    }
    
    setCurrentMessage(getRandomMessage(messages));
  };

  return (
    <section id="mood" className="section-container bg-gradient-to-b from-background to-muted">
      <div className="relative z-10 w-full max-w-md mx-auto px-4 text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-4 animate-fade-in">
          Choose Your Mood
        </h2>
        <p className="font-body text-muted-foreground mb-8">
          Select who this wish is for
        </p>
        
        <div className="flex flex-col gap-4 mb-8">
          <button
            onClick={() => handleMoodClick('friends')}
            className={`w-full py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
              selectedMood === 'friends' 
                ? 'gradient-friends text-white scale-105 shadow-lg' 
                : 'bg-muted text-foreground hover:scale-102'
            }`}
          >
            <Users className="w-6 h-6" />
            😊 For Friends
          </button>
          
          <button
            onClick={() => handleMoodClick('loved')}
            className={`w-full py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
              selectedMood === 'loved' 
                ? 'gradient-loved text-white scale-105 shadow-lg' 
                : 'bg-muted text-foreground hover:scale-102'
            }`}
          >
            <Heart className="w-6 h-6" />
            ❤️ For Loved Ones
          </button>
          
          <button
            onClick={() => handleMoodClick('everyone')}
            className={`w-full py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
              selectedMood === 'everyone' 
                ? 'gradient-everyone text-white scale-105 shadow-lg' 
                : 'bg-muted text-foreground hover:scale-102'
            }`}
          >
            <Globe className="w-6 h-6" />
            🤍 For Everyone
          </button>
        </div>
        
        {currentMessage && (
          <div className="card-glass p-6 animate-fade-in-left">
            <p className="font-body text-xl text-foreground leading-relaxed">
              {currentMessage}
            </p>
            <button
              onClick={() => handleMoodClick(selectedMood!)}
              className="mt-4 text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Get another wish →
            </button>
          </div>
        )}
      </div>

      <ScrollArrow targetId="cards" />
    </section>
  );
};

export default MoodSection;
