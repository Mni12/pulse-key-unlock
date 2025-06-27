
import React from 'react';

interface UnlockAnimationProps {
  isPlaying: boolean;
}

const UnlockAnimation: React.FC<UnlockAnimationProps> = ({ isPlaying }) => {
  if (!isPlaying) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      {/* Energy waves */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-96 h-96 rounded-full border-4 border-green-400/60 energy-wave"></div>
        <div className="absolute w-96 h-96 rounded-full border-4 border-blue-400/60 energy-wave-delayed"></div>
        <div className="absolute w-96 h-96 rounded-full border-4 border-purple-400/60 energy-wave-slow"></div>
      </div>
      
      {/* Central burst */}
      <div className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-green-400 to-blue-500 burst-animation opacity-80"></div>
      
      {/* Particle effects */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-green-400 rounded-full particle-float"
            style={{
              left: `${50 + Math.cos((i * 30) * Math.PI / 180) * 20}%`,
              top: `${50 + Math.sin((i * 30) * Math.PI / 180) * 20}%`,
              animationDelay: `${i * 0.1}s`
            }}
          />
        ))}
      </div>
      
      {/* Success message */}
      <div className="absolute top-1/3 text-center success-message">
        <div className="text-4xl mb-2">✨</div>
        <div className="text-2xl font-bold text-green-400">UNLOCKED!</div>
      </div>
    </div>
  );
};

export default UnlockAnimation;
