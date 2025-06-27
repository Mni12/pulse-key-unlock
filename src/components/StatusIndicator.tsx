
import React from 'react';

interface StatusIndicatorProps {
  bikeStatus: 'locked' | 'unlocked';
  keyStatus: 'waiting' | 'enabled';
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ bikeStatus, keyStatus }) => {
  return (
    <div className="space-y-4 text-center">
      {/* Bike Status */}
      <div className="flex items-center justify-center space-x-3">
        <span className="text-2xl">🔐</span>
        <div className="text-lg">
          <span className="text-gray-300">Status: </span>
          <span className={`font-semibold ${
            bikeStatus === 'locked' 
              ? 'text-red-400' 
              : 'text-green-400'
          }`}>
            Bike {bikeStatus === 'locked' ? 'Locked' : 'Unlocked'}
          </span>
        </div>
      </div>

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
