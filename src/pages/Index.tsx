import { useState } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import GreetingSection from '@/components/sections/GreetingSection';
import MoodSection from '@/components/sections/MoodSection';
import WishCardsSection from '@/components/sections/WishCardsSection';
import ReflectionSection from '@/components/sections/ReflectionSection';
import MirrorSection from '@/components/sections/MirrorSection';
import JournalSection from '@/components/sections/JournalSection';
import TimeCapsuleSection from '@/components/sections/TimeCapsuleSection';
import RandomWishSection from '@/components/sections/RandomWishSection';
import PeaceModeSection from '@/components/sections/PeaceModeSection';
import MusicSection from '@/components/sections/MusicSection';
import ShareSection from '@/components/sections/ShareSection';
import FooterSection from '@/components/sections/FooterSection';

const Index = () => {
  const [peaceModeActive, setPeaceModeActive] = useState(false);

  return (
    <main className="overflow-x-hidden">
      <HeroSection peaceModeActive={peaceModeActive} />
      <GreetingSection />
      <MoodSection />
      <WishCardsSection />
      <ReflectionSection />
      <MirrorSection />
      <JournalSection />
      <TimeCapsuleSection />
      <RandomWishSection />
      <PeaceModeSection 
        peaceModeActive={peaceModeActive} 
        setPeaceModeActive={setPeaceModeActive} 
      />
      <MusicSection />
      <ShareSection />
      <FooterSection />
    </main>
  );
};

export default Index;
