
import React from 'react';

interface UnlockButtonProps {
  isUnlocked: boolean;
  onToggle: () => void;
}

const UnlockButton: React.FC<UnlockButtonProps> = ({ isUnlocked, onToggle }) => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Animated glow rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-64 h-64 rounded-full border-2 border-green-500/30 pulse-ring"></div>
        <div className="absolute w-64 h-64 rounded-full border-2 border-green-500/20 pulse-ring-delayed"></div>
      </div>
      
      {/* Main unlock button */}
      <button
        onClick={onToggle}
        className={`
          relative z-10 w-48 h-48 rounded-full 
          ${isUnlocked 
            ? 'bg-gradient-to-br from-green-400 to-green-600 pulse-button' 
            : 'bg-gradient-to-br from-gray-600 to-gray-800 hover:from-green-500 hover:to-green-700'
          }
          border-4 border-white/20 
          shadow-2xl 
          transition-all duration-300 ease-in-out
          active:scale-95
          glow-effect
        `}
      >
        <div className="flex flex-col items-center justify-center text-white">
          <div className="text-6xl mb-2">
            {isUnlocked ? '🔓' : '🔒'}
          </div>
          <div className="text-xl font-bold tracking-wide">
            {isUnlocked ? 'LOCKED' : 'UNLOCK'}
          </div>
        </div>
      </button>
    </div>
  );
};

export default UnlockButton;
