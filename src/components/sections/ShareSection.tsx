import { useState } from 'react';
import { Share2, MessageCircle, Facebook, Link2, Check } from 'lucide-react';
import ScrollArrow from '../ScrollArrow';

const ShareSection = () => {
  const [copied, setCopied] = useState(false);
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = "Wishing you a beautiful New Year filled with hope and happiness! 🎉✨";

  const handleWhatsAppShare = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
    window.open(url, '_blank');
  };

  const handleFacebookShare = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="share" className="section-container gradient-hero">
      <div className="relative z-10 w-full max-w-md mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Share2 className="w-8 h-8 text-white" />
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white">
            Share This Wish
          </h2>
        </div>
        
        <p className="font-body text-white/80 mb-8">
          If this made you feel something, pass it on
        </p>
        
        <div className="flex flex-col gap-4">
          <button
            onClick={handleWhatsAppShare}
            className="w-full py-4 px-6 rounded-2xl bg-green-500 hover:bg-green-600 text-white font-semibold text-lg flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-6 h-6" />
            Share on WhatsApp
          </button>
          
          <button
            onClick={handleFacebookShare}
            className="w-full py-4 px-6 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Facebook className="w-6 h-6" />
            Share on Facebook
          </button>
          
          <button
            onClick={handleCopyLink}
            className="w-full py-4 px-6 rounded-2xl bg-white/20 hover:bg-white/30 text-white font-semibold text-lg flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 active:scale-95 border border-white/30"
          >
            {copied ? (
              <>
                <Check className="w-6 h-6" />
                Copied!
              </>
            ) : (
              <>
                <Link2 className="w-6 h-6" />
                Copy Link
              </>
            )}
          </button>
        </div>
      </div>

      <ScrollArrow targetId="footer" />
    </section>
  );
};

export default ShareSection;
