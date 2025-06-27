
import React from 'react';

interface StatusPanelProps {
  bikeStatus: 'locked' | 'unlocked';
  appUnlocked: boolean;
  keyEnabled: boolean;
}

const StatusPanel: React.FC<StatusPanelProps> = ({ bikeStatus, appUnlocked, keyEnabled }) => {
  const getStatusColor = (condition: boolean) => {
    return condition ? 'text-emerald-400' : 'text-red-400';
  };

  const getStatusBg = (condition: boolean) => {
    return condition 
      ? 'bg-emerald-500/10 border-emerald-500/30' 
      : 'bg-red-500/10 border-red-500/30';
  };

  return (
    <div className="w-full space-y-3">
      {/* System Status */}
      <div className={`p-4 rounded-xl border backdrop-blur-sm ${
        bikeStatus === 'unlocked' 
          ? 'bg-emerald-500/10 border-emerald-500/30' 
          : 'bg-red-500/10 border-red-500/30'
      }`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">🔐</span>
            <div>
              <div className="font-semibold text-white">Bike Status</div>
              <div className={`text-sm ${
                bikeStatus === 'unlocked' ? 'text-emerald-400' : 'text-red-400'
              }`}>
                {bikeStatus === 'unlocked' ? 'UNLOCKED & ACTIVE' : 'SECURED & LOCKED'}
              </div>
            </div>
          </div>
          <div className={`px-3 py-1 rounded-full text-xs font-bold ${
            bikeStatus === 'unlocked' 
              ? 'bg-emerald-400/20 text-emerald-300' 
              : 'bg-red-400/20 text-red-300'
          }`}>
            {bikeStatus === 'unlocked' ? 'ACTIVE' : 'LOCKED'}
          </div>
        </div>
      </div>

      {/* Security Checks */}
      <div className="grid grid-cols-2 gap-3">
        <div className={`p-3 rounded-xl border backdrop-blur-sm ${getStatusBg(appUnlocked)}`}>
          <div className="text-center">
            <div className="text-lg mb-1">📱</div>
            <div className="text-xs text-gray-300 mb-1">App Auth</div>
            <div className={`text-sm font-semibold ${getStatusColor(appUnlocked)}`}>
              {appUnlocked ? 'VERIFIED' : 'PENDING'}
            </div>
          </div>
        </div>
        
        <div className={`p-3 rounded-xl border backdrop-blur-sm ${getStatusBg(keyEnabled)}`}>
          <div className="text-center">
            <div className="text-lg mb-1">🔑</div>
            <div className="text-xs text-gray-300 mb-1">Ignition</div>
            <div className={`text-sm font-semibold ${getStatusColor(keyEnabled)}`}>
              {keyEnabled ? 'ENABLED' : 'STANDBY'}
            </div>
          </div>
        </div>
      </div>

      {/* Security Notice */}
      <div className="p-3 rounded-xl bg-gray-800/30 border border-gray-700/30 backdrop-blur-sm">
        <div className="text-center text-xs text-gray-400">
          <span className="inline-block w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
          Both authentication methods required for unlock
        </div>
      </div>
    </div>
  );
};

export default StatusPanel;
