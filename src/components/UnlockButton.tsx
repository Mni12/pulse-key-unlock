
import React from 'react';

interface UnlockButtonProps {
  isUnlocked: boolean;
  onToggle: () => void;
  bikeStatus: 'locked' | 'unlocked';
}

const UnlockButton: React.FC<UnlockButtonProps> = ({ isUnlocked, onToggle, bikeStatus }) => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer Glow Ring */}
      <div className={`absolute inset-0 rounded-full ${
        isUnlocked 
          ? 'bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 animate-pulse' 
          : 'bg-gradient-to-r from-gray-600/10 to-gray-700/10'
      } blur-xl scale-150`}></div>
      
      {/* Animated Rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`absolute w-80 h-80 rounded-full border-2 ${
          isUnlocked 
            ? 'border-blue-400/30 animate-ping' 
            : 'border-gray-600/20'
        }`} style={{ animationDuration: '3s' }}></div>
        <div className={`absolute w-80 h-80 rounded-full border ${
          isUnlocked 
            ? 'border-purple-400/20 animate-ping' 
            : 'border-gray-600/10'
        }`} style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
      </div>
      
      {/* Main Button */}
      <button
        onClick={onToggle}
        className={`relative z-10 w-56 h-56 rounded-full border-2 backdrop-blur-sm transition-all duration-500 active:scale-95 ${
          isUnlocked 
            ? 'bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 border-blue-400/50 shadow-lg shadow-blue-500/25' 
            : 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-600/30 hover:border-gray-500/50'
        }`}
      >
        {/* Inner Glow */}
        <div className={`absolute inset-4 rounded-full ${
          isUnlocked 
            ? 'bg-gradient-to-br from-blue-400/10 to-purple-400/10' 
            : 'bg-gradient-to-br from-gray-700/20 to-gray-800/20'
        }`}></div>
        
        {/* Content */}
        <div className="relative flex flex-col items-center justify-center text-white h-full">
          <div className={`text-6xl mb-3 transition-all duration-300 ${
            isUnlocked ? 'filter drop-shadow-lg' : ''
          }`}>
            {bikeStatus === 'unlocked' ? '🔓' : isUnlocked ? '🔐' : '🔒'}
          </div>
          <div className={`text-lg font-bold tracking-wider ${
            isUnlocked 
              ? 'text-blue-300 drop-shadow-lg' 
              : 'text-gray-300'
          }`}>
            {isUnlocked ? 'ARMED' : 'UNLOCK'}
          </div>
          <div className="text-xs text-gray-400 mt-1 uppercase tracking-widest">
            {isUnlocked ? 'System Ready' : 'Tap to Authenticate'}
          </div>
        </div>
      </button>
    </div>
  );
};

export default UnlockButton;
