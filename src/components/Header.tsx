
import React from 'react';

interface HeaderProps {
  bikeStatus: 'locked' | 'unlocked';
}

const Header: React.FC<HeaderProps> = ({ bikeStatus }) => {
  return (
    <div className="absolute top-0 left-0 right-0 z-20 pt-12 pb-6">
      <div className="text-center px-6">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
          NEXUS BIKE
        </h1>
        <p className="text-gray-400 text-sm uppercase tracking-wider">
          Neural Security System
        </p>
        
        {/* Status Badge */}
        <div className={`inline-flex items-center mt-4 px-4 py-2 rounded-full border backdrop-blur-sm ${
          bikeStatus === 'unlocked' 
            ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400' 
            : 'border-red-500/30 bg-red-500/10 text-red-400'
        }`}>
          <div className={`w-2 h-2 rounded-full mr-2 ${
            bikeStatus === 'unlocked' ? 'bg-emerald-400' : 'bg-red-400'
          } ${bikeStatus === 'unlocked' ? 'animate-pulse' : ''}`}></div>
          <span className="text-sm font-medium">
            {bikeStatus === 'unlocked' ? 'SYSTEM ACTIVE' : 'SYSTEM SECURED'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
