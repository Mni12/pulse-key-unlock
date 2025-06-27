
import React from 'react';

interface KeyIgnitionButtonProps {
  isEnabled: boolean;
  onToggle: () => void;
}

const KeyIgnitionButton: React.FC<KeyIgnitionButtonProps> = ({ isEnabled, onToggle }) => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <button
        onClick={onToggle}
        className={`
          relative w-24 h-24 rounded-full 
          ${isEnabled 
            ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 glow-yellow pulse-slow' 
            : 'bg-gradient-to-br from-gray-500 to-gray-700 hover:from-yellow-500 hover:to-yellow-700'
          }
          border-3 border-white/20 
          shadow-xl 
          transition-all duration-300 ease-in-out
          active:scale-95
        `}
      >
        <div className="flex flex-col items-center justify-center text-white">
          <div className="text-2xl mb-1">
            {isEnabled ? '🔑' : '🗝️'}
          </div>
          <div className="text-xs font-bold">
            KEY
          </div>
        </div>
      </button>
      <span className="text-sm text-gray-400">Key Ignition</span>
    </div>
  );
};

export default KeyIgnitionButton;
