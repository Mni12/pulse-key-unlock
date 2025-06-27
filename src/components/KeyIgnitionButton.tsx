
import React from 'react';

interface KeyIgnitionButtonProps {
  isEnabled: boolean;
  onToggle: () => void;
}

const KeyIgnitionButton: React.FC<KeyIgnitionButtonProps> = ({ isEnabled, onToggle }) => {
  return (
    <div className="w-full">
      <button
        onClick={onToggle}
        className={`w-full p-4 rounded-2xl border backdrop-blur-sm transition-all duration-300 ${
          isEnabled 
            ? 'bg-gradient-to-r from-amber-500/20 to-orange-500/20 border-amber-400/50 shadow-lg shadow-amber-500/20' 
            : 'bg-gradient-to-r from-gray-800/30 to-gray-900/30 border-gray-600/30 hover:border-gray-500/50'
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
              isEnabled 
                ? 'bg-gradient-to-br from-amber-400/30 to-orange-400/30' 
                : 'bg-gradient-to-br from-gray-700/30 to-gray-800/30'
            }`}>
              <span className="text-2xl">
                {isEnabled ? '🔑' : '🗝️'}
              </span>
            </div>
            <div className="text-left">
              <div className={`font-semibold ${
                isEnabled ? 'text-amber-300' : 'text-gray-300'
              }`}>
                Key Ignition
              </div>
              <div className={`text-sm ${
                isEnabled ? 'text-amber-400/80' : 'text-gray-500'
              }`}>
                {isEnabled ? 'System Enabled' : 'Standby Mode'}
              </div>
            </div>
          </div>
          
          {/* Status Indicator */}
          <div className={`w-3 h-3 rounded-full ${
            isEnabled 
              ? 'bg-amber-400 animate-pulse' 
              : 'bg-gray-600'
          }`}></div>
        </div>
      </button>
    </div>
  );
};

export default KeyIgnitionButton;
