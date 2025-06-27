
import React from 'react';

interface StatusIndicatorProps {
  bikeStatus: 'locked' | 'unlocked';
  keyStatus: 'waiting' | 'enabled';
  showBikeStatusAbove?: boolean;
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ 
  bikeStatus, 
  keyStatus, 
  showBikeStatusAbove = false 
}) => {
  if (showBikeStatusAbove) {
    return (
      <div className="text-center mb-8">
        <div className="flex items-center justify-center space-x-3">
          <span className="text-3xl">🔐</span>
          <div className="text-2xl">
            <span className={`font-bold ${
              bikeStatus === 'locked' 
                ? 'text-red-400' 
                : 'text-green-400'
            }`}>
              Bike {bikeStatus === 'locked' ? 'Locked' : 'Unlocked'}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4 text-center">
      {/* Key Status */}
      <div className="flex items-center justify-center space-x-3">
        <span className="text-2xl">🔑</span>
        <div className="text-lg">
          <span className="text-gray-300">Key Ignition: </span>
          <span className={`font-semibold ${
            keyStatus === 'waiting' 
              ? 'text-yellow-400' 
              : 'text-green-400'
          }`}>
            {keyStatus === 'waiting' ? 'Waiting' : 'Enabled'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatusIndicator;
