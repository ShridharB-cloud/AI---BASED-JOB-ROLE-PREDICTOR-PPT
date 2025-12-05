import { useState, useEffect } from 'react';

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [currentText, setCurrentText] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isExpanding, setIsExpanding] = useState(false);

  const texts = [
    'Analyzing Skills…',
    'Processing Data…',
    'Predicting Career Path…'
  ];

  useEffect(() => {
    let charIndex = 0;
    const text = texts[currentText];
    
    const typeInterval = setInterval(() => {
      if (charIndex <= text.length) {
        setDisplayText(text.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        
        setTimeout(() => {
          if (currentText < texts.length - 1) {
            setDisplayText('');
            setCurrentText(prev => prev + 1);
          } else {
            setTimeout(() => {
              setIsExpanding(true);
              setTimeout(onComplete, 1000);
            }, 500);
          }
        }, 800);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [currentText, onComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-1000 ${isExpanding ? 'opacity-0' : 'opacity-100'}`}>
      {/* Animated circle */}
      <div className={`relative flex items-center justify-center ${isExpanding ? 'animate-expand-fade' : ''}`}>
        <svg 
          className="absolute w-48 h-48 md:w-64 md:h-64"
          viewBox="0 0 200 200"
        >
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="hsl(0, 0%, 100%)"
            strokeWidth="0.5"
            className="animate-draw-circle animate-pulse-glow"
            style={{ filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.5))' }}
          />
        </svg>
        
        {/* Inner glow */}
        <div className="absolute w-40 h-40 md:w-52 md:h-52 rounded-full bg-gradient-to-r from-transparent via-foreground/5 to-transparent blur-xl" />
        
        {/* Text container */}
        <div className="relative z-10 text-center px-4">
          <p className="font-mono text-sm md:text-base text-foreground/90 tracking-wider">
            <span>{displayText}</span>
            <span className="animate-pulse">|</span>
          </p>
        </div>
      </div>

      {/* Ambient particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-foreground/20 rounded-full animate-float"
          style={{
            left: `${20 + i * 12}%`,
            top: `${30 + (i % 3) * 20}%`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}
    </div>
  );
};

export default IntroAnimation;
