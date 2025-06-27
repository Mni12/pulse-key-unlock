
import React from 'react';

interface UnlockAnimationProps {
  isPlaying: boolean;
}

const UnlockAnimation: React.FC<UnlockAnimationProps> = ({ isPlaying }) => {
  if (!isPlaying) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none bg-black/80 backdrop-blur-sm">
      {/* Energy Field */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-96 h-96 rounded-full border-2 border-blue-400/60 animate-ping" style={{ animationDuration: '1s' }}></div>
        <div className="absolute w-96 h-96 rounded-full border-2 border-purple-400/40 animate-ping" style={{ animationDuration: '1.5s', animationDelay: '0.3s' }}></div>
        <div className="absolute w-96 h-96 rounded-full border-2 border-cyan-400/40 animate-ping" style={{ animationDuration: '2s', animationDelay: '0.6s' }}></div>
      </div>
      
      {/* Central Energy Core */}
      <div className="absolute w-40 h-40 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-cyan-400 animate-pulse opacity-80"></div>
      
      {/* Particle Effects */}
      <div className="absolute inset-0">
        {Array.from({ length: 16 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-ping"
            style={{
              left: `${50 + Math.cos((i * 22.5) * Math.PI / 180) * 25}%`,
              top: `${50 + Math.sin((i * 22.5) * Math.PI / 180) * 25}%`,
              animationDelay: `${i * 0.1}s`,
              animationDuration: '2s'
            }}
          />
        ))}
      </div>
      
      {/* Success Message */}
      <div className="absolute top-1/3 text-center animate-bounce">
        <div className="text-6xl mb-4">⚡</div>
        <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          SYSTEM UNLOCKED
        </div>
        <div className="text-blue-300 text-sm mt-2 uppercase tracking-wider">
          Neural Link Established
        </div>
      </div>
    </div>
  );
};

export default UnlockAnimation;
